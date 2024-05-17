# -*- coding: utf-8 -*-
import csv
import os
import time

import matplotlib
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from torch.utils.data import DataLoader
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader


class MyDataSet(torch.utils.data.Dataset):
    def __init__(self, data, label):
        self.data = torch.from_numpy(data).float()
        self.label = torch.from_numpy(label).long()
        self.length = label.shape[0]

    def __getitem__(self, index):
        return self.data[index], self.label[index]

    def __len__(self):
        return self.length


class My1DCNN(nn.Module):
    def __init__(self, input_size, num_classes):
        super(My1DCNN, self).__init__()
        self.block1 = nn.Sequential(
            nn.Conv1d(in_channels=1, out_channels=16, kernel_size=3, stride=1),
            nn.BatchNorm1d(16),
            nn.ReLU(),
            nn.MaxPool1d(kernel_size=2, stride=2),
            nn.Dropout(0.25)  # 0.25
        )
        self.block2 = nn.Sequential(
            nn.Conv1d(16, 32, kernel_size=3, stride=1),
            nn.BatchNorm1d(32),
            nn.ReLU(),
            nn.MaxPool1d(kernel_size=2, stride=2),
            nn.Dropout(0.25)
        )
        self.block3 = nn.Sequential(
            nn.Conv1d(32, 64, kernel_size=3, stride=1),
            nn.BatchNorm1d(64),
            nn.ReLU(),
            nn.MaxPool1d(kernel_size=2, stride=2),
            nn.Dropout(0.25)
        )

        self.fc = nn.Sequential(
            nn.Linear(1280, 512),  # 180-1280，120-832,5760-45952,5层5760-45568
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        out = self.block1(x)
        out = self.block2(out)
        out = self.block3(out)
        out = out.view(out.size(0), -1)
        out = self.fc(out)
        return out


def train(model, train_loader, criterion, optimizer, device):
    model.train()
    train_loss = 0
    correct = 0
    for data, target in train_loader:
        data = data.to(device)
        target = target.to(device)
        optimizer.zero_grad()
        output = model(data.unsqueeze(1))
        loss = criterion(output, target)
        loss.backward()
        optimizer.step()
        train_loss += loss.item() * data.size(0)
        pred = output.argmax(dim=1, keepdim=True)
        correct += pred.eq(target.view_as(pred)).sum().item()

    train_loss /= len(train_loader.dataset)
    accuracy = 100. * correct / len(train_loader.dataset)

    print(
        'Train set: Average loss: {:.4f}, Accuracy: {}/{} ({:.0f}%)'.format(train_loss, correct,
                                                                            len(train_loader.dataset),
                                                                            accuracy))

    return accuracy, train_loss


def test(model, test_loader, criterion, device):
    model.eval()
    test_loss = 0
    correct = 0
    with torch.no_grad():
        for data, target in test_loader:
            data = data.to(device)
            target = target.to(device)
            output = model(data.unsqueeze(1))
            test_loss += criterion(output, target).item()
            pred = output.argmax(dim=1, keepdim=True)
            correct += pred.eq(target.view_as(pred)).sum().item()

    test_loss /= len(test_loader.dataset)
    accuracy = 100. * correct / len(test_loader.dataset)

    print(
        'Test set: Average loss: {:.4f}, Accuracy: {}/{} ({:.0f}%)'.format(test_loss, correct, len(test_loader.dataset),
                                                                           accuracy))

    return accuracy, test_loss


def build(file, name):
    data = np.load(file)
    datapath = os.path.dirname(file)
    labels = np.arange(len(data))
    # 归一化
    # for i in range(len(data)):
    #     data[i] = (data[i] - np.min(data[i])) / (np.max(data[i]) - np.min(data[i]))
    data_repeated = np.repeat(data, 50, axis=0)
    labels_repeated = np.repeat(labels, 50, axis=0)
    idx = np.arange(len(data_repeated))
    np.random.shuffle(idx)
    data_repeated = data_repeated[idx]
    labels_repeated = labels_repeated[idx]
    train_data, test_data, train_labels, test_labels = train_test_split(data_repeated, labels_repeated, test_size=0.2,
                                                                        random_state=42)
    seed = 42
    np.random.seed(seed)
    torch.manual_seed(seed)
    batch_size = 128
    epochs = 100
    learning_rate = 0.001
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    # 创建数据集
    train_dataset = MyDataSet(train_data, train_labels)
    test_dataset = MyDataSet(test_data, test_labels)

    # 创建数据加载器
    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
    test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=True)

    # 创建模型
    input_size = train_data.shape[1]
    num_classes = np.unique(train_labels).shape[0]
    model = My1DCNN(input_size, num_classes).to(device)

    # 定义损失函数和优化器
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=learning_rate)

    # 训练模型
    for epoch in range(1, epochs + 1):
        print('Epoch [{}/{}]'.format(epoch, epochs))
        train(model, train_loader, criterion, optimizer, device)
        test(model, test_loader, criterion, device)

    torch.save(model.state_dict(), datapath+'/'+name + '.pt')


def out(model_path, new, old,map):
    datapath1 = os.path.dirname(old)
    datapath2 = os.path.dirname(new)
    train_data = np.load(old)
    type = len(train_data)
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = My1DCNN(180, type).to(device)
    #model_name = os.path.basename(model_path)
    model.load_state_dict(torch.load(model_path))
    test_data = np.load(new)
    t_data=np.load(new)
    # 归一化处理
    # for i in range(len(t_data)):
    #     t_data[i] = (t_data[i] - np.min(t_data[i])) / (np.max(t_data[i]) - np.min(t_data[i]))
    length = len(test_data)
    pre = []
    c_old = np.load(datapath1 + '/channel.npy')
    c_new = np.load(datapath2 + '/channel.npy')
    print('开始画图')
    plt.figure(figsize=(32, 16), dpi=80)
    for i in range(len(test_data)):
        test = t_data[i]
        draw=test_data[i]
        new_data_tensor = torch.from_numpy(test).float().to(device)
        model.eval()
        with torch.no_grad():
            output = model(new_data_tensor.unsqueeze(0).unsqueeze(1))
            prediction = output.argmax(dim=1)
            pre.append(prediction.item())
        rows = int(np.ceil(np.sqrt(length)))
        cols = int(np.ceil(length / rows))
        plt.subplot(rows, cols, i + 1)
        plt.plot(draw, color='r')
        plt.plot(train_data[pre[i]], color='b')
    plt.tight_layout()
    plt.savefig(datapath2 + '/compare.jpg')
    plt.figure(figsize=(32, 16), dpi=80)
    data = []
    with open(map, 'r') as file:
        reader = csv.reader(file)
        for row in enumerate(reader):
            x = row[1][0]
            y = row[1][1]
            tmp = [int(x), int(y)]
            data.append(tmp)
    x = [row[0] for row in data]
    y = [row[1] for row in data]
    for i in range(len(test_data)):
        rows = int(np.ceil(np.sqrt(length)))
        cols = int(np.ceil(length / rows))
        plt.subplot(rows, cols, i + 1)
        plt.scatter(x, y, c='darkgrey')
        c1=c_old[pre[i]]
        c2=c_new[i]
        plt.scatter(x[c1], y[c1], marker='v', color='red', s=200)
        plt.scatter(x[c2], y[c2], marker='^', color='blue', s=200)
    plt.savefig(datapath2 + '/channel.jpg')
    current_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    # 打开csv文件，如果文件不存在则创建一个新的空文件
    dirname = os.path.split(datapath1)[-1]
    filename = datapath1 + '/' + dirname + '.csv'
    with open(filename, mode="a", newline="") as file:
        writer = csv.writer(file)
        # 将当前时间和nums写入csv文件
        writer.writerow([current_time] + pre)
    print('done')
