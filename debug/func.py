import pandas as pd
import spikeinterface.extractors as se
import spikeinterface.sorters as ss
import spikeinterface.toolkit as st
import matplotlib.pylab as plt
import math
import time
import numpy as np
import os
import csv
import sys
import scipy.io as scio
from mountainlab_pytools import mdaio
import read
from read import read_data
from read_rhs import read_data_rhs
import mountainsort4 as ms4


def snr(raw_data, std):
    p2p = np.max(raw_data) - np.min(raw_data)
    noise = np.mean(std)
    stand = p2p / noise
    return stand


def sym(raw_data):
    peak_1 = np.argmin(raw_data)
    if peak_1 < len(raw_data) / 2:
        left = raw_data[0:peak_1]
        right = raw_data[peak_1:peak_1 * 2]
    else:
        left = raw_data[(peak_1 - (len(raw_data) - peak_1)):peak_1]
        right = raw_data[peak_1:]
    right = right[::-1]
    sum_1 = 0
    for i in range(len(left)):
        sum_1 += abs(left[i] - right[i])
    if len(left) == 0:
        res = 2
    else:
        res = sum_1 / len(left)
    return res


def get_data(dataPath, badPath, mapPath, start, end):
    global timeseries, fre, data
    file_name = []
    flag = 2
    datanames = os.listdir(dataPath)
    for datanames in sorted(datanames):
        if os.path.splitext(datanames)[1] == '.rhd':
            flag = 0
            finame = (dataPath + '/' + str(datanames))
            file_name.append(finame)
        elif os.path.splitext(datanames)[1] == '.rhs':
            flag = 1
            finame = (dataPath + '/' + str(datanames))
            file_name.append(finame)
    for i in range(len(file_name)):
        if flag == 0:
            data = read_data(file_name[i])
        elif flag == 1:
            data = read_data_rhs(file_name[i])
        fre = data['frequency_parameters']['amplifier_sample_rate']
        if i == 0:
            timeseries = data["amplifier_data"]
        else:
            timeseries = np.hstack((timeseries, data["amplifier_data"]))
    # 处理时间段
    if start.strip() != "":
        s = int(start)
        e = int(end)
        timeseries = timeseries[:, s:e]
    else:
        pass
    t_all = timeseries.shape[1]
    t = t_all / fre
    sampling_frequency = fre
    csv_data = pd.read_csv(mapPath, header=None)
    channel_map = np.array(csv_data.values.tolist())
    return timeseries, channel_map, sampling_frequency, t, channel_map.shape[0]


def new_sorting(data, map, fre, data_path, interval, threshold, sign, radius, size, f_min, f_max):
    recording = se.NumpyRecordingExtractor(timeseries=data, geom=map, sampling_frequency=fre)
    # remove_bad_channels_recording = st.preprocessing.remove_bad_channels(recording=recording,bad_channel_ids=bad_channel)
    referenced_recording = st.preprocessing.common_reference(recording=recording, reference='average')
    se.MdaRecordingExtractor.write_recording(recording=referenced_recording, save_path=data_path + '/out_folder')
    recording = se.MdaRecordingExtractor(folder_path=data_path + '/out_folder')
    bandpass_filter_recording = st.preprocessing.bandpass_filter(recording=recording, freq_min=f_min, freq_max=f_max)
    detect_sign = int(sign)
    clip_size = int(size)
    adjacency_radius = int(radius)
    detect_threshold = float(threshold)
    detect_interval = int(interval)
    firing_path = data_path + '/out_folder/firings.mda'
    output = ms4.mountainsort4(
        recording=bandpass_filter_recording,
        detect_sign=detect_sign,
        clip_size=clip_size,
        adjacency_radius=adjacency_radius,
        detect_threshold=detect_threshold,
        detect_interval=detect_interval,
        num_workers=None,
        verbose=True,
        use_recording_directly=False,
        path=firing_path
    )
    original = st.postprocessing.get_unit_waveforms(recording=bandpass_filter_recording, sorting=output)
    return original


def postprocess(original, data_path):
    neuron_num = len(original)
    neuron_mean = []
    neuron_std = []
    print("start postprocess")
    for index_neu_num in range(neuron_num):  # 遍历unit
        each_neu_waveform = original[index_neu_num]  # 读取一个unit
        [record_amp_counts, record_chan_counts, record_samp_counts] = np.shape(each_neu_waveform)  # 获取维度
        chanmean = np.ones([record_chan_counts, record_samp_counts])
        chanstd = np.ones([record_chan_counts, record_samp_counts])
        for index_chan_num in range(record_chan_counts):  # 通道中遍历
            each_neu_chan_waveform = each_neu_waveform[:, index_chan_num, :]  # 取出一个通道中的所有数据
            chanmean[index_chan_num] = np.mean(each_neu_chan_waveform, axis=0)
            chanstd[index_chan_num] = np.std(each_neu_chan_waveform, axis=0)
        neuron_mean.append(chanmean)
        neuron_std.append(chanstd)
    #np.save(data_path + '/out_folder/neuron_mean.npy', neuron_mean)
    #np.save(data_path + '/out_folder/neuron_std.npy', neuron_std)
    scio.savemat(data_path+'/neuronmean.mat',{'data': neuron_mean})  #save mean spike data of all the tracked neurons, and all channels of each neuron
    scio.savemat(data_path+'/neuronstd.mat',{'data': neuron_std}) #save std noise data of all the tracked neurons, and all channels of each neuron 
    return neuron_mean, neuron_std


def drawing(neuronmean, neuronstd, datapath, t, channel_num, fre, location_path):
    data_length = int(fre / 1000 * 6)
    x_bar = np.linspace(0, data_length - 1, data_length)
    firings = mdaio.readmda(datapath + '/out_folder/firings.mda')
    spike_times = firings[1]  # 次数
    neu_num = firings[2]  # 编号
    neuron_num = len(neuronmean)
    print('origin neuron_num:{}'.format(neuron_num))
    result = []
    result_prime = []
    SNR = []
    sym_std = 0
    if fre == 20000:
        sym_std = 0.7
    if fre == 30000:
        sym_std = 1.5
    # 筛选
    rawdata = []
    errorbar = []
    for unit_num in range(neuron_num):
        tmp = neuronmean[unit_num]
        tmp_std = neuronstd[unit_num]
        p2p = 0
        flag = 0
        chan_num = len(tmp)
        for chan in range(chan_num):
            a = np.max(tmp[chan]) - np.min(tmp[chan])
            if p2p < a:
                p2p = a
                flag = chan
        if snr(neuronmean[unit_num][flag], neuronstd[unit_num][flag]) > 5: #signal to noise ratio, for mice and monkey, the value should be larger than 5
            if sym(neuronmean[unit_num][flag]) > sym_std:
                up_max = max(neuronmean[unit_num][flag])
                up_min = min(neuronmean[unit_num][flag])
                res = abs(up_max / up_min)
                if res < 1:#if not use,change to >0
                    result.append(unit_num)
                    result_prime.append(flag)
                    rawdata.append(neuronmean[unit_num][flag])
                    errorbar.append(neuronstd[unit_num][flag])
                    SNR.append(snr(neuronmean[unit_num][flag], neuronstd[unit_num][flag]))
    print('after neunon_num:{}'.format(len(result)))
    np.save(datapath+'/out_folder/waveform.npy',rawdata)
    np.save(datapath + '/out_folder/channel.npy', result_prime)
    scio.savemat(datapath+'/out_folder/waveform.mat',{'data': rawdata})
    scio.savemat(datapath+'/out_folder/channel.mat',{'data': result_prime})
    scio.savemat(datapath+'/out_folder/errorbar.mat',{'data': errorbar})
    # 画出所有波形图
    isi_out = []
    picpath = datapath + '/out_folder/pic'
    if not os.path.isdir(picpath):
        os.makedirs(picpath)
    if channel_num == 128:
        row = 16
        col = 10
    else:
        a = 4
        b = 2
        while a * b < channel_num:
            if b < a:
                b = b + 2
            else:
                a = a + 4
        row = a
        col = b + 2
    x1 = np.arange(row * col).reshape((row, col))
    for num in range(len(result)):
        tmp = neuronmean[result[num]]
        tmp_std = neuronstd[result[num]]
        tmp_prime = result_prime[num]
        p2p = np.max(tmp[tmp_prime]) - np.min(tmp[tmp_prime])  # p2p
        spike_res = 0
        isi_tmp = []
        for index in range(len(neu_num)):  # 获取spike个数
            if neu_num[index] == result[num] + 1:
                spike_res += 1
                isi_tmp.append(spike_times[index])
        isi = []  # 获取整个ISI数据
        for j in range(len(isi_tmp) - 1):
            isi.append(math.ceil((isi_tmp[j + 1] - isi_tmp[j]) / (fre / 1000)))
        isi_output = np.zeros(10)
        for i in range(10):
            isi_output[i] = isi.count(i + 1)
        isi_out.append(isi_output)
        spike_per_s = spike_res / t
        snr_output = SNR[num]
        up = np.max(tmp[tmp_prime]) * 1.2
        down = np.min(tmp[tmp_prime])
        # 画主通道和信息
        plt.figure(figsize=(32, 16), dpi=80)
        plt.subplot(4, col / 2, 1)
        plt.ylim(down, up)
        plt.errorbar(x_bar, tmp[tmp_prime], tmp_std[tmp_prime], color='r', ecolor='gainsboro', elinewidth=5)
        plt.xlabel('neuron{}\n{} spikes in total\n{} spike/sec\nP2P:{}μV\nSNR:{}\nChannel:{}'.format(result[num] + 1, spike_res,
                                                                                         round(spike_per_s, 2),
                                                                                         round(p2p, 2),
                                                                                         round(snr_output, 2),tmp_prime),
                   fontsize=20)
        # 画一到十的ISI
        plt.subplot(4, col / 2, col + 1)
        x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        x_label = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        plt.xticks(x, x_label)
        plt.bar(x, isi_output)
        # 画总的ISI
        plt.subplot(4, col / 2, col / 2 * 3 + 1)
        if len(isi) > 0:
            new_ticks = np.linspace(0, np.max(isi), 10)
            plt.xticks(new_ticks)
            plt.xticks(rotation=270)
            plt.hist(isi)
        else:
            plt.xticks(x, x_label)
            plt.bar(x, isi_output)
        # 画全部的图
        for i in range(len(tmp)):
            x_2 = x1[:, 2:col]
            csv_data = pd.read_csv(location_path, header=None)
            g = np.array(csv_data.values.tolist())
            x = np.where(g == i)
            ma = np.dstack((x[0], x[1])).squeeze()
            loc = x_2[ma[0]][ma[1]] + 1
            plt.subplot(row, col, loc)
            plt.ylim(down, up)
            if i == tmp_prime:
                plt.errorbar(x_bar, tmp[i], tmp_std[i], color='r', ecolor='gainsboro', elinewidth=2)
            else:
                plt.errorbar(x_bar, tmp[i], tmp_std[i], color='black', ecolor='gainsboro', elinewidth=2)
            plt.xticks([])
            plt.yticks([])
        plt.savefig(picpath + '/' + str(result[num] + 1) + '.jpg')
    print('done')
