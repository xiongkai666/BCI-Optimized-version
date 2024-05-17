import multiprocessing
import subprocess
import sys
from PyQt5 import QtWidgets, uic, QtGui
from PyQt5.QtCore import QCoreApplication
from PyQt5.QtWidgets import QProgressDialog, QMessageBox, QFileDialog, QApplication, QDesktopWidget
from time import sleep
import func
import fun


class MyWindow(QtWidgets.QMainWindow):
    def __init__(self):
        self.pgb = None
        super(MyWindow, self).__init__()
        # 加载UI文件
        uic.loadUi('myui.ui', self)
        qr = self.frameGeometry()
        cp = QDesktopWidget().availableGeometry().center()
        qr.moveCenter(cp)
        self.move(qr.topLeft())
        # 设置窗体左上角图标
        icon = QtGui.QIcon('icon4.jpg')
        self.setWindowIcon(icon)
        self.pushButton_6.clicked.connect(self.data_browse1)
        self.pushButton_8.clicked.connect(self.model_browse)
        self.pushButton_10.clicked.connect(self.rawdata_browse)
        self.pushButton_7.clicked.connect(self.newdata_browse)
        self.pushButton_11.clicked.connect(self.get_model)
        self.pushButton_9.clicked.connect(self.predict)
        self.pushButton_12.clicked.connect(self.map_browse1)
        self.pushButton_2.clicked.connect(self.data_browse)
        # self.pushButton_3.clicked.connect(self.channel_browse)
        self.pushButton_5.clicked.connect(self.start)
        self.pushButton.clicked.connect(self.map_browse)
        self.pushButton_4.clicked.connect(self.location_browse)
        self.radioButton_2.toggled.connect(self.line_edit_enable)
        self.radioButton.toggled.connect(self.line_edit_disable)
        self.radioButton_3.toggled.connect(self.line_edit_8_enable)
        self.radioButton_4.toggled.connect(self.line_edit_9_disable)
        self.lineEdit_3.setEnabled(False)
        self.lineEdit_4.setEnabled(False)
        self.lineEdit_5.setEnabled(False)
        self.lineEdit_6.setEnabled(False)
        self.lineEdit_7.setEnabled(False)
        self.lineEdit_8.setEnabled(False)
        self.lineEdit_9.setEnabled(False)

    def map_browse1(self):
        data_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose channel map file",  # 标题
            "/",
            "文本文件 (*.csv)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_20.setText(data_path)

    def data_browse1(self):
        data_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose raw_data file",  # 标题
            "/",
            "numpy文件 (*.npy)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_14.setText(data_path)

    def rawdata_browse(self):
        data_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose raw_data file",  # 标题
            "/",
            "numpy文件 (*.npy)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_24.setText(data_path)

    def newdata_browse(self):
        data_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose new_data file",  # 标题
            "/",
            "numpy文件 (*.npy)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_19.setText(data_path)

    def get_model(self):
        raw_data = self.lineEdit_14.text()
        model_name = self.lineEdit_18.text()
        fun.build(raw_data, model_name)

    def model_browse(self):
        data_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose model",  # 标题
            "/",
            "pt文件 (*.pt)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_23.setText(data_path)

    def predict(self):
        model = self.lineEdit_23.text()
        old = self.lineEdit_24.text()
        new = self.lineEdit_19.text()
        map=self.lineEdit_20.text()
        fun.out(model, new, old,map)

    def line_edit_8_enable(self, checked):
        if checked:
            self.lineEdit_8.setEnabled(True)
            self.lineEdit_9.setEnabled(True)
        else:
            self.lineEdit_8.setEnabled(False)
            self.lineEdit_9.setEnabled(False)

    def line_edit_9_disable(self, checked):
        if checked:
            self.lineEdit_8.clear()
            self.lineEdit_9.clear()
            self.lineEdit_8.setEnabled(False)
            self.lineEdit_9.setEnabled(False)
        else:
            self.lineEdit_8.setEnabled(True)
            self.lineEdit_9.setEnabled(True)

    def line_edit_enable(self, checked):
        if checked:
            self.lineEdit_3.setEnabled(True)
            self.lineEdit_4.setEnabled(True)
            self.lineEdit_5.setEnabled(True)
            self.lineEdit_6.setEnabled(True)
            self.lineEdit_7.setEnabled(True)
        else:
            self.lineEdit_3.setEnabled(False)
            self.lineEdit_4.setEnabled(False)
            self.lineEdit_5.setEnabled(False)
            self.lineEdit_6.setEnabled(False)
            self.lineEdit_7.setEnabled(False)

    def line_edit_disable(self, checked):
        if checked:
            self.lineEdit_3.setText('27')
            self.lineEdit_4.setText('3.5')
            self.lineEdit_5.setText('0')
            self.lineEdit_6.setText('100')
            self.lineEdit_7.setText('54')
            self.lineEdit_3.setEnabled(False)
            self.lineEdit_4.setEnabled(False)
            self.lineEdit_5.setEnabled(False)
            self.lineEdit_6.setEnabled(False)
            self.lineEdit_7.setEnabled(False)
        else:
            self.lineEdit_3.setEnabled(True)
            self.lineEdit_4.setEnabled(True)
            self.lineEdit_5.setEnabled(True)
            self.lineEdit_6.setEnabled(True)
            self.lineEdit_7.setEnabled(True)

    def start(self):
        data_path = self.lineEdit_11.text()
        badchannel_path = self.lineEdit_12.text()
        channelmap_path = self.lineEdit_10.text()
        location_path = self.lineEdit_13.text()
        self.pgb = QProgressDialog('数据处理进度', '取消', 0, 100)
        self.pgb.setWindowTitle('sorting......')
        self.pgb.setFixedSize(300, 150)
        self.pgb.show()

        self.pgb.setLabelText('初始化')
        QCoreApplication.processEvents()
        sleep(1)
        self.pgb.setValue(0)

        self.pgb.setLabelText('读入数据')
        QCoreApplication.processEvents()
        start=self.lineEdit_8.text()
        end=self.lineEdit_9.text()
        timeseries, map, sampling_frequency, t, channel_num = func.get_data(data_path,
                                                                            badchannel_path,
                                                                            channelmap_path,start,end)
        self.pgb.setValue(25)

        self.pgb.setLabelText('执行sort程序')
        QCoreApplication.processEvents()
        interval = self.lineEdit_3.text()
        threshold = self.lineEdit_4.text()
        sign = self.lineEdit_5.text()
        radius = self.lineEdit_6.text()
        size = self.lineEdit_7.text()
        f_min=int(self.lineEdit.text())
        f_max=int(self.lineEdit_2.text())
        original = func.new_sorting(timeseries, map, sampling_frequency, data_path, interval, threshold,
                                sign, radius, size,f_min,f_max)

        self.pgb.setValue(50)

        self.pgb.setLabelText('数据后处理')
        QCoreApplication.processEvents()
        neuronmean, neuronstd = func.postprocess(original,data_path)
        self.pgb.setValue(75)

        self.pgb.setLabelText('画图')
        QCoreApplication.processEvents()
        func.drawing(neuronmean, neuronstd, data_path, t, channel_num, sampling_frequency, location_path)
        self.pgb.setValue(100)
        choice = QMessageBox.question(
            self,
            '确认',
            '数据处理完毕\n结果存储在' + data_path + '/out_folder下，是否打开该文件夹？')

        if choice == QMessageBox.Yes:
            opener = "open" if sys.platform == "darwin" else "xdg-open"
            subprocess.call([opener, data_path + '/out_folder'])
        if choice == QMessageBox.No:
            pass

    def data_browse(self):
        data_path = QFileDialog.getExistingDirectory(self, "choose rhd/rhs file directory")
        self.lineEdit_11.setText(data_path)

    def bad_browse(self):
        bad_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose bad channel file",  # 标题
            "/",
            "纯文本文件 (*.csv)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_12.setText(bad_path)

    def channel_browse(self):
        channel_path = QFileDialog.getExistingDirectory(self, "choose bad channel file directory")
        self.lineEdit_12.setText(channel_path)

    def map_browse(self):
        map_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose channel map file",  # 标题
            "/",
            "纯文本文件 (*.csv)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_10.setText(map_path)

    def location_browse(self):
        location_path, _ = QFileDialog.getOpenFileName(
            self,  # 父窗口对象
            "choose channel map file",  # 标题
            "/",
            "纯文本文件 (*.csv)"  # 选择类型过滤项，过滤内容在括号中
        )
        self.lineEdit_13.setText(location_path)

if __name__ == '__main__':
    multiprocessing.freeze_support()
    app = QApplication([])
    stats = MyWindow()
    stats.show()
    app.exec_()

