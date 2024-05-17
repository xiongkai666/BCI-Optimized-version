<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN" sourcelanguage="en">
<context>
    <name>AbstractPanel</name>
    <message>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="212"/>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="246"/>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="261"/>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="292"/>
        <source>no selection</source>
        <translation>没有选中</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="233"/>
        <source> GROUP</source>
        <translation> 分组</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="248"/>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="267"/>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="298"/>
        <source>n/a</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/abstractpanel.cpp" line="250"/>
        <source>not measured</source>
        <translation>未测量</translation>
    </message>
</context>
<context>
    <name>AdvancedBandwidthDialog</name>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="116"/>
        <source>DSP Offset Removal Cutoff Frequency</source>
        <translation>DSP偏移消除截止频率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="117"/>
        <source>Low Frequency Bandwidth</source>
        <translation>低频带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="118"/>
        <source>High Frequency Bandwidth</source>
        <translation>高频带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="132"/>
        <source>Valid Range at </source>
        <translation>有效范围在 </translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="141"/>
        <source>Valid Range: 0.1 Hz to 500 Hz.</source>
        <translation>有效范围：0.1 Hz至500 Hz</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="142"/>
        <source>Valid Range: 100 Hz to 20 kHz.</source>
        <translation>有效范围：100 Hz至20 kHz</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="146"/>
        <source>Warning: Nyquist frequency violation (sample rate = </source>
        <translation>警告：违反奈奎斯特频率（采样率=</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="174"/>
        <source>DSP Cutoff Frequency</source>
        <translation>DSP截止频率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="176"/>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="181"/>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="186"/>
        <source>Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="179"/>
        <source>Analog Lower Cutoff</source>
        <translation>模拟下限截止</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="184"/>
        <source>Analog Upper Cutoff</source>
        <translation>模拟上限截止</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="190"/>
        <source>Enable On-Chip DSP Offset Removal Filter</source>
        <translation>启用片上DSP偏移消除滤波器</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="209"/>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="235"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="210"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="222"/>
        <source>Select Amplifier Filter Parameters</source>
        <translation>选择放大器滤波器参数</translation>
    </message>
</context>
<context>
    <name>AdvancedStartupDialog</name>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="25"/>
        <source>OpenCL is a platform-independent framework that allows the CPU to
send data to a GPU for processing. This can result in faster data
processing and filtering, and is most effective with higher channel
counts and faster sample rates. CPUs and GPUs can be selected for use
in the XPU section of the Performance Optimization dialog, from the
Performance menu of the main software window.

It is possible to disable this feature so that only the CPU will
process data. This is suitable for systems incompatible with OpenCL,
but will increase the workload of the CPU.</source>
        <translation>  OpenCL是一个独立于平台的框架，允许CPU将数据发送到GPU进行处理。
这可以导致更快的数据处理和过滤，并且对于更高的通道计数和更快的采样率最有效。
CPU和GPU可以从主软件窗口的性能菜单中选择用于性能优化对话框的XPU部分。
  可以禁用此功能，以便只有CPU才能处理数据。这适用于与OpenCL不兼容的系统，
但会增加CPU的工作负载。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="36"/>
        <source>Use OpenCL</source>
        <translation>使用OpenCL</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="40"/>
        <source>If running in playback mode, the RHX software will attempt to read
all data that is present for all selected ports. If this instance of
this software will only be used to read from specific ports, other
ports can be de-selected to improve the performance by limiting how
much data is read from disk.</source>
        <translation>如果在播放模式下运行，RHX软件将尝试读取所有选定端口的所有数据。
如果此软件实例仅用于从特定端口读取，则可以取消选择其他端口，
通过限制从磁盘读取的数据量来提高性能。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="73"/>
        <source>When running in demonstration mode, generate synthetic waveforms
on the maximum possible number of channels for the controller.</source>
        <translation>在演示模式下运行时，为控制器在尽可能多的通道上生成合成波形。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="76"/>
        <source>Maximum Number of Channels in Demonstration Mode</source>
        <translation>演示模式下的最大通道数</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="78"/>
        <source>When running in chip test mode, replace typical recording functionality with
automated testing.</source>
        <translation>在芯片测试模式下运行时，用自动测试取代典型的记录功能。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="81"/>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="128"/>
        <source>Chip Test Mode</source>
        <translation>芯片测试模式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="91"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="92"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="100"/>
        <source>OpenCL</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="114"/>
        <source>Playback Control</source>
        <translation>回放控制</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="121"/>
        <source>Demonstration Mode Data Generation</source>
        <translation>演示模式数据生成</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/advancedstartupdialog.cpp" line="144"/>
        <source>Advanced Startup Settings</source>
        <translation>高级启动设置</translation>
    </message>
</context>
<context>
    <name>AmpSettleDialog</name>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="13"/>
        <source>Headstage Global Amp Settle</source>
        <translation>headstage全局放大器设置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="16"/>
        <source>Lower Bandwidth for Amp Settle Range: 0.1 Hz to 1000 Hz.</source>
        <translation>放大器设置范围的较低带宽：0.1 Hz到1000 Hz</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="26"/>
        <source>Amplifier Lower Bandwidth for Amp Settle</source>
        <translation>用于放大器设置的放大器较低带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="28"/>
        <source>Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="36"/>
        <source>Switch Lower Bandwidth</source>
        <translation>转换到较低带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="37"/>
        <source>Traditional Fast Settle</source>
        <translation>传统快速沉降</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="44"/>
        <source>Amp Settle Mode</source>
        <translation>放大器设置模式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="49"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="50"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/ampsettledialog.cpp" line="63"/>
        <source>Select Amplifier Settle Parameters</source>
        <translation>选择放大器设置参数</translation>
    </message>
</context>
<context>
    <name>AnOutDialog</name>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="20"/>
        <source>Stimulation Waveform</source>
        <translation>刺激波形</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="22"/>
        <source>Stimulation Shape:</source>
        <translation>刺激形状：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="25"/>
        <source>Biphasic</source>
        <translation>双相</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="25"/>
        <source>Biphasic with Delay</source>
        <translation>具有延迟的双相</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="25"/>
        <source>Triphasic</source>
        <translation>三相</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="25"/>
        <source>Monophasic</source>
        <translation>单相</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="28"/>
        <source>Stimulation Polarity:</source>
        <translation>刺激极性：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="32"/>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="481"/>
        <source>Negative Voltage First</source>
        <translation>负电压优先</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="32"/>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="482"/>
        <source>Positive Voltage First</source>
        <translation>正电压优先</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="35"/>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="499"/>
        <source>First Phase Duration (D1):</source>
        <translation>第一阶段持续时间（D1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="39"/>
        <source>Second Phase Duration (D2):</source>
        <translation>第二阶段持续时间（D2）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="43"/>
        <source>Interphase Delay (DP):</source>
        <translation>相间延迟（DP）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="47"/>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="500"/>
        <source>First Phase Amplitude (A1):</source>
        <translation>第一相位振幅（A1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="51"/>
        <source>Second Phase Amplitude (A2):</source>
        <translation>第二相振幅（A2）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="55"/>
        <source>Baseline Voltage:</source>
        <translation>基准电压：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="60"/>
        <source>Trigger</source>
        <translation>触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="62"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="64"/>
        <source>Trigger Source:</source>
        <translation>触发源：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="77"/>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="84"/>
        <source> </source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="80"/>
        <source>Edge Triggered</source>
        <translation>边缘触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="80"/>
        <source>Level Triggered</source>
        <translation>电平触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="87"/>
        <source>Trigger on High</source>
        <translation>触发器处于高位</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="87"/>
        <source>Trigger on Low</source>
        <translation>触发器处于低位</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="90"/>
        <source>Post Trigger Delay:</source>
        <translation>触发后延迟：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="95"/>
        <source>Pulse Train</source>
        <translation>脉冲串</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="97"/>
        <source>Pulse Repetition:</source>
        <translation>脉冲重复：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="100"/>
        <source>Single Stim Pulse</source>
        <translation>单次刺激脉冲</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="100"/>
        <source>Stim Pulse Train</source>
        <translation>刺激脉冲序列</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="103"/>
        <source>Number of Stim Pulses</source>
        <translation>刺激脉冲数</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="107"/>
        <source>Pulse Train Period:</source>
        <translation>脉冲串周期：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="113"/>
        <source>Post-Stim Refractory Period:</source>
        <translation>刺激后不应期：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="118"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="119"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="478"/>
        <source>Negative Voltage</source>
        <translation>负电压</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="479"/>
        <source>Positive Voltage</source>
        <translation>正电压</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="502"/>
        <source>First/Third Phase Duration (D1):</source>
        <translation>第一/第三阶段持续时间（D1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="503"/>
        <source>First/Third Phase Amplitude (A1):</source>
        <translation>第一/第三相位振幅（A1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/anoutdialog.cpp" line="510"/>
        <source>Pulse Train Frequency: </source>
        <translation>脉冲串频率：</translation>
    </message>
</context>
<context>
    <name>AnalogOutConfigDialog</name>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="13"/>
        <source>Lock to Selected</source>
        <translation>锁定到选定项</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="17"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="18"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="20"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="21"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="22"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="23"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="24"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="25"/>
        <source>off</source>
        <translation>断开</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="28"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="29"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="33"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="34"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="35"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="36"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="37"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="38"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="344"/>
        <source>Set to Selected</source>
        <translation>设置为选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="47"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="50"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="54"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="57"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="60"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="63"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="66"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="69"/>
        <source>Disable</source>
        <translation>使无效</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="132"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="134"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="137"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="139"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="141"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="143"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="145"/>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="147"/>
        <source>Enable</source>
        <translation>选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="177"/>
        <source>ANALOG OUT 1 (Audio L):</source>
        <translation>模拟输出1（音频L）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="181"/>
        <source>ANALOG OUT 2 (Audio R):</source>
        <translation>模拟输出2（音频R）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="186"/>
        <source>ANALOG OUT 3:</source>
        <translation>模拟输出3：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="190"/>
        <source>ANALOG OUT 4:</source>
        <translation>模拟输出4：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="194"/>
        <source>ANALOG OUT 5:</source>
        <translation>模拟输出5：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="198"/>
        <source>ANALOG OUT 6:</source>
        <translation>模拟输出6：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="202"/>
        <source>ANALOG OUT 7:</source>
        <translation>模拟输出7：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="206"/>
        <source>ANALOG OUT 8:</source>
        <translation>模拟输出8：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="220"/>
        <source>DIGITAL OUT 1 Threshold</source>
        <translation>数字输出1阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="229"/>
        <source>DIGITAL OUT 2 Threshold</source>
        <translation>数字输出2阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="239"/>
        <source>DIGITAL OUT 3 Threshold</source>
        <translation>数字输出3阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="248"/>
        <source>DIGITAL OUT 4 Threshold</source>
        <translation>数字输出4阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="257"/>
        <source>DIGITAL OUT 5 Threshold</source>
        <translation>数字输出5阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="266"/>
        <source>DIGITAL OUT 6 Threshold</source>
        <translation>数字输出6阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="275"/>
        <source>DIGITAL OUT 7 Threshold</source>
        <translation>数字输出7阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="284"/>
        <source>DIGITAL OUT 8 Threshold</source>
        <translation>数字输出8阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="345"/>
        <source>Hardware Reference</source>
        <translation>硬件参考</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="351"/>
        <source>Global ANALOG OUT Reference:</source>
        <translation>全局模拟输出参考：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="360"/>
        <source>Software referencing cannot be applied to Analog Out signals, but one amplifier signal may be selected as a global reference that is subtracted from all Analog Out signals in real time.</source>
        <translation>软件参考不能应用于模拟输出信号，但可以选择一个放大器信号作为实时从所有模拟输出信号中减去的全局参考。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="370"/>
        <source>Selected wideband amplifier channels are routed to Analog Out ports on the Intan hardware.  Analog Out 1 and 2 are also connected to the left and right channels of Audio Line Out.  The typical latency from amplifier input to Analog Out port is less than 200 </source>
        <translation>选定的宽带放大器通道被路由到Intan硬件上的模拟输出端口。模拟输出1和2也连接到音频线路输出的左右声道。从放大器输入到模拟输出端口的典型延迟小于200</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="376"/>
        <source>Intan hardware implements low-latency threshold comparators that signal on Digital Out ports when the signals routed to Analog Out ports exceed specified levels.  These comparators have latencies less than 200 </source>
        <translation>Intan硬件实现低延迟阈值比较器，当路由到模拟输出端口的信号超过指定水平时，该比较器在数字输出端口上发出信号。这些比较器的延迟小于200</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="379"/>
        <source> and may be used for real-time triggering of other devices based on the detection of neural spikes.</source>
        <translation> 并且可以用于基于神经尖峰的检测来实时触发其他设备。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="383"/>
        <source>If spike detection is performed on amplifier signals that include low-frequency local field potentials, the optional Analog Out high pass filter can be enabled to pass only spikes.  Go to the &lt;b&gt;Audio/Analog&lt;/b&gt; tab to enable this filter.</source>
        <translation>如果对包括低频本地场电位的放大器信号执行尖峰检测，则可以启用可选的模拟输出高通滤波器以仅通过尖峰。转到“音频/模拟”选项卡以启用此滤波器。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="389"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/analogoutconfigdialog.cpp" line="448"/>
        <source>Analog Output Configuration</source>
        <translation>模拟输出配置</translation>
    </message>
</context>
<context>
    <name>AutoColorDialog</name>
    <message>
        <location filename="GUI/Dialogs/autocolordialog.cpp" line="16"/>
        <source>Total number of colors:</source>
        <translation>颜色总数：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autocolordialog.cpp" line="21"/>
        <source>Number of adjacent channels with same color:</source>
        <translation>具有相同颜色的相邻通道数：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autocolordialog.cpp" line="26"/>
        <source>&lt;b&gt;Note:&lt;/b&gt; You can undo this operation.</source>
        <translation>注意：您可以撤消此操作。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autocolordialog.cpp" line="30"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autocolordialog.cpp" line="31"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autocolordialog.cpp" line="43"/>
        <source>Color Amplifier Channels</source>
        <translation>放大器通道颜色</translation>
    </message>
</context>
<context>
    <name>AutoGroupDialog</name>
    <message>
        <location filename="GUI/Dialogs/autogroupdialog.cpp" line="13"/>
        <source>Number of amplifier channels per group:</source>
        <translation>每组放大器通道数：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autogroupdialog.cpp" line="18"/>
        <source>Any existing groups will be ungrouped, and all disabled channels will be moved to the bottom.</source>
        <translation>任何现有的组都将被取消分组，所有禁用的通道都将移动到底部。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autogroupdialog.cpp" line="22"/>
        <source>&lt;b&gt;Note:&lt;/b&gt; You can undo this operation.</source>
        <translation>注意：您可以撤消此操作。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autogroupdialog.cpp" line="26"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autogroupdialog.cpp" line="27"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/autogroupdialog.cpp" line="38"/>
        <source>Group Amplifier Channels</source>
        <translation>分组放大器通道</translation>
    </message>
</context>
<context>
    <name>AuxDigOutConfigDialog</name>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="18"/>
        <source>Control auxiliary digital output on Port A from</source>
        <translation>控制端口A上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="22"/>
        <source>Control auxiliary digital output on Port B from</source>
        <translation>控制端口B上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="26"/>
        <source>Control auxiliary digital output on Port C from</source>
        <translation>控制端口C上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="30"/>
        <source>Control auxiliary digital output on Port D from</source>
        <translation>控制端口D上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="55"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="56"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="81"/>
        <source>All RHD amplifier chips have an auxiliary digital output pin &lt;b&gt;auxout&lt;/b&gt; that can be controlled via the SPI interface.  This pin is brought out to a solder point &lt;b&gt;DO&lt;/b&gt; on some RHD headstages.  This dialog enables real-time control of this pin from a user-selected digital input on the Intan controller.  A logic signal on the selected digital input will control the selected &lt;b&gt;auxout&lt;/b&gt; pin with a latency of 4-5 amplifier sampling periods.</source>
        <translation>所有RHD放大器芯片都有一个辅助数字输出引脚，可以通过SPI接口进行控制。
此引脚引出到某些RHD探头上的焊接点DO。该对话框允许通过Intan控制器上
用户选择的数字输入实时控制该引脚。所选数字输入上的逻辑信号将以4-5个
放大器采样周期的延迟来控制所选引脚。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="90"/>
        <source>Note that the auxiliary output pin will only be controlled while data acquisition is running, and will be pulled to ground when acquisition stops.</source>
        <translation>请注意，辅助输出引脚仅在数据采集运行时受到控制，而在采集停止时将被拉至接地。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="95"/>
        <source>The &lt;b&gt;auxout&lt;/b&gt; pin is capable of driving up to 2 mA of current from the 3.3V supply.  An external transistor can be added for additional current drive or voltage range.</source>
        <translation>auxout引脚能够从3.3V电源驱动高达2mA的电流。
可以添加外部晶体管以获得额外的电流驱动或电压范围。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="107"/>
        <source>Control auxiliary digital output on Port E from</source>
        <translation>控制端口E上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="111"/>
        <source>Control auxiliary digital output on Port F from</source>
        <translation>控制端口F上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="115"/>
        <source>Control auxiliary digital output on Port G from</source>
        <translation>控制端口G上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="119"/>
        <source>Control auxiliary digital output on Port H from</source>
        <translation>控制端口H上的辅助数字输出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="181"/>
        <source>Configure Auxiliary Digital Output Control</source>
        <translation>配置辅助数字输出控制</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="276"/>
        <source>DIGITAL IN 1</source>
        <translation>数字输入1</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="277"/>
        <source>DIGITAL IN 2</source>
        <translation>数字输入2</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="278"/>
        <source>DIGITAL IN 3</source>
        <translation>数字输入3</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="279"/>
        <source>DIGITAL IN 4</source>
        <translation>数字输入4</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="280"/>
        <source>DIGITAL IN 5</source>
        <translation>数字输入5</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="281"/>
        <source>DIGITAL IN 6</source>
        <translation>数字输入6</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="282"/>
        <source>DIGITAL IN 7</source>
        <translation>数字输入7</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="283"/>
        <source>DIGITAL IN 8</source>
        <translation>数字输入8</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="284"/>
        <source>DIGITAL IN 9</source>
        <translation>数字输入9</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="285"/>
        <source>DIGITAL IN 10</source>
        <translation>数字输入10</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="286"/>
        <source>DIGITAL IN 11</source>
        <translation>数字输入11</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="287"/>
        <source>DIGITAL IN 12</source>
        <translation>数字输入12</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="288"/>
        <source>DIGITAL IN 13</source>
        <translation>数字输入13</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="289"/>
        <source>DIGITAL IN 14</source>
        <translation>数字输入14</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="290"/>
        <source>DIGITAL IN 15</source>
        <translation>数字输入15</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/auxdigoutconfigdialog.cpp" line="291"/>
        <source>DIGITAL IN 16</source>
        <translation>数字输入16</translation>
    </message>
</context>
<context>
    <name>BoardSelectDialog</name>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="335"/>
        <source>Open</source>
        <translation>打开</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="340"/>
        <source>Data File Playback</source>
        <translation>数据文件播放</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="344"/>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="479"/>
        <source> (run Clamp software to use)</source>
        <translation>（运行Clamp软件使用）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="488"/>
        <source>N/A</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="494"/>
        <source>I/O Expander Connected</source>
        <translation>已连接I/O扩展器</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="495"/>
        <source>No I/O Expander Connected</source>
        <translation>未连接I/O扩展器</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="664"/>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="668"/>
        <source>Start software with </source>
        <translation>启动软件使用 </translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="665"/>
        <source> sample rate and </source>
        <translation> 采样率和 </translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="669"/>
        <source> sample rate</source>
        <translation>采样率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="680"/>
        <source>Load default settings file: </source>
        <translation>加载默认设置文件：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="740"/>
        <source>Select Intan Data File</source>
        <translation>选择Intan数据文件</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="740"/>
        <source>Intan Data Files (*.rhd *.rhs)</source>
        <translation>Intan数据文件（*.rhd*.rhs）</translation>
    </message>
</context>
<context>
    <name>CableDelayDialog</name>
    <message>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="10"/>
        <source>Intan hardware can compensate for the nanosecond-scale time delays resulting from finite signal velocities on the headstage interface cables.  Each time the interface software is opened or the &lt;b&gt;Rescan Ports&lt;/b&gt; button is clicked, the software attempts to determine the optimum delay settings for each headstage port.  Sometimes this delay-setting algorithm fails, particularly when using 64- or 128-channel RHD headstages, which use a double-data-rate SPI protocol.</source>
        <translation>Intan硬件可以补偿由于前置接口电缆上的有限信号速度导致的纳秒级时间延迟。
每次打开接口软件或单击Rescan Ports（重新扫描端口）按钮时，软件都会尝试
确定每个headstage端口的最佳延迟设置。有时这种延迟设置算法会失败，尤其是
当使用64或128通道RHD headstage时，该设备使用双倍数据速率SPI协议。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="19"/>
        <source>This dialog box allows users to override this algorithm and set delays manually.  If a particular headstage port is returning noisy signals with large discontinuities, try checking the manual delay box for that port and adjust the delay setting up or down by one.</source>
        <translation>此对话框允许用户覆盖此算法并手动设置延迟。
如果某个特定的headstage端口返回具有较大不连续性的噪声信号，
请尝试检查该端口的手动延迟框，并将延迟设置向上或向下调整。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="26"/>
        <source>Note that the optimum delay setting for a particular cable length will change if the amplifier sampling rate is changed.</source>
        <translation>请注意，如果放大器采样率发生变化，特定电缆长度的最佳延迟设置将发生变化。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="59"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="66"/>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="72"/>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="78"/>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="84"/>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="123"/>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="129"/>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="135"/>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="141"/>
        <source>Current delay</source>
        <translation>电流延迟</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/cabledelaydialog.cpp" line="162"/>
        <source>Manual Headstage Cable Delay Configuration</source>
        <translation>手动headstage电缆延迟配置</translation>
    </message>
</context>
<context>
    <name>ChargeRecoveryDialog</name>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="16"/>
        <source>Target Voltage Range: -1.225 V to +1.215 V.</source>
        <translation>目标电压范围：-1.225 V至+1.215 V</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="25"/>
        <source>Target Voltage for Current-Limited Charge Recovery</source>
        <translation>电流受限电荷恢复的目标电压</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="27"/>
        <source>V</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="48"/>
        <source>Charge Recovery Current Limit</source>
        <translation>电荷恢复电流限制</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="54"/>
        <source>Current-Limited Charge Recovery Circuit</source>
        <translation>限流电荷恢复电路</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="55"/>
        <source>Charge Recovery Switch</source>
        <translation>充电恢复开关</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="62"/>
        <source>Charge Recovery Mode</source>
        <translation>电荷恢复模式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="67"/>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="91"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="68"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/chargerecoverydialog.cpp" line="81"/>
        <source>Select Charge Recovery Parameters</source>
        <translation>选择电荷恢复参数</translation>
    </message>
</context>
<context>
    <name>ControlPanel</name>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="28"/>
        <source>Selection Properties</source>
        <translation>选择属性</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="32"/>
        <source>Hide Control Panel</source>
        <translation>隐藏控制面板</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="40"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="126"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="144"/>
        <source>BW</source>
        <translation>频带宽度</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="41"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="128"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="146"/>
        <source>Impedance</source>
        <translation>阻抗</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="42"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="130"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="148"/>
        <source>Audio/Analog</source>
        <translation>音频/模拟</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="43"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="132"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="150"/>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="44"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="134"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="152"/>
        <source>Trigger</source>
        <translation>触发器</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="160"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="166"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="167"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="168"/>
        <location filename="GUI/Widgets/controlpanel.cpp" line="170"/>
        <source>no selection</source>
        <translation>没有选定</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="173"/>
        <source>Rename</source>
        <translation>重命名</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="177"/>
        <source>Set Ref</source>
        <translation>设置参考</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="182"/>
        <source>Set Stim</source>
        <translation>设置刺激</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="188"/>
        <source>Name:</source>
        <translation>名称：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="190"/>
        <source>Reference:</source>
        <translation>参考：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="192"/>
        <source>Impedance:</source>
        <translation>阻抗：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="195"/>
        <source>Stim Trigger:</source>
        <translation>刺激触发器：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="210"/>
        <source>Color</source>
        <translation>颜色</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="227"/>
        <source>Clip Waves</source>
        <translation>剪裁波形</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="233"/>
        <source>Time Scale</source>
        <translation>时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="296"/>
        <source>WIDE</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="297"/>
        <source>LOW</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="298"/>
        <source>HIGH</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="300"/>
        <source>DC</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="302"/>
        <source>AUX</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanel.cpp" line="304"/>
        <source>ANALOG</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>ControlPanelAudioAnalogTab</name>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="58"/>
        <source>Electrode to ANALOG OUT Gain</source>
        <translation>电极至模拟输出增益</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="59"/>
        <source>Noise Slicer (ANALOG OUT 1,2)</source>
        <translation>噪声切片器（模拟输出1,2）</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="87"/>
        <source>Enable ANALOG OUT High Pass Filter</source>
        <translation>启用模拟输出高通滤波器</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="98"/>
        <source>Lock to Selected</source>
        <translation>锁定到选定项</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="100"/>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="101"/>
        <source>off</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="102"/>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="103"/>
        <source>Set to Selected</source>
        <translation>设置为选定</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="104"/>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="106"/>
        <source>Disable</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="108"/>
        <source>Advanced Configuration</source>
        <translation>高级配置</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="116"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="127"/>
        <source>Volume</source>
        <translation>音量</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="137"/>
        <source>Noise Slicer</source>
        <translation>噪声切片器</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="189"/>
        <source>Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="193"/>
        <source>ANALOG OUT 1 (Audio L):</source>
        <translation>模拟输出1（音频L）：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="204"/>
        <source>ANALOG OUT 2 (Audio R):</source>
        <translation>模拟输出2（音频R）：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="245"/>
        <source>Hardware Analog Out/Audio</source>
        <translation>硬件模拟输出/音频</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelaudioanalogtab.cpp" line="268"/>
        <source>PC Audio</source>
        <translation>电脑音频</translation>
    </message>
</context>
<context>
    <name>ControlPanelBandwidthTab</name>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="30"/>
        <source>Change Bandwidth</source>
        <translation>更改带宽</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="31"/>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="46"/>
        <source>Hardware Bandwidth</source>
        <translation>硬件带宽</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="54"/>
        <source>Notch Filter</source>
        <translation>陷波滤波器</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="62"/>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="97"/>
        <source>Order</source>
        <translation>顺序</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="86"/>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="113"/>
        <source>Cutoff</source>
        <translation>截止</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="88"/>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="115"/>
        <source>Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="90"/>
        <source>Low Pass Filter (LFP Band)</source>
        <translation>低通滤波器（LFP频带）</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="117"/>
        <source>High Pass Filter (Spike Band)</source>
        <translation>高通滤波器（尖峰带）</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="120"/>
        <source>View Frequency Response</source>
        <translation>查看频率响应</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="133"/>
        <source>Software Filtering</source>
        <translation>软件滤波</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="157"/>
        <source> kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="159"/>
        <source> Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="164"/>
        <source>Amplifier Bandwidth: </source>
        <translation>放大器带宽：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelbandwidthtab.cpp" line="165"/>
        <source> Hz - </source>
        <translation></translation>
    </message>
</context>
<context>
    <name>ControlPanelConfigureTab</name>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="39"/>
        <source>Rescan Ports</source>
        <translation>重新扫描端口</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="40"/>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="128"/>
        <source>Manual</source>
        <translation>手动</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="49"/>
        <source>Connected Amplifiers</source>
        <translation>连接的放大器</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="70"/>
        <source>Note 1:</source>
        <translation>注1：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="73"/>
        <source>Note 2:</source>
        <translation>注2：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="76"/>
        <source>Note 3:</source>
        <translation>注3：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="80"/>
        <source>The following text will be appended to saved data files</source>
        <translation>以下文本将附加到保存的数据文件中</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="86"/>
        <source>Notes</source>
        <translation>注释</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="90"/>
        <source>The following text will be appended to the live notes file</source>
        <translation>以下文本将附加到实时标注文件中</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="95"/>
        <source>Add Live Note</source>
        <translation>添加实时标注</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="105"/>
        <source>Live Notes</source>
        <translation>实时标注</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="115"/>
        <source>Configure</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="120"/>
        <source>Auxout Pins</source>
        <translation>辅助输出引脚</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="130"/>
        <source>Realtime Control</source>
        <translation>实时控制</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="134"/>
        <source>DIGITAL IN </source>
        <translation>数字输入 </translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="152"/>
        <source>Amplifier Fast Settle (Blanking)</source>
        <translation>放大器快速稳定（消隐）</translation>
    </message>
</context>
<context>
    <name>ControlPanelImpedanceTab</name>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="21"/>
        <source>Select Impedance Test Frequency</source>
        <translation>选择阻抗测试频率</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="26"/>
        <source>Run Impedance Measurement</source>
        <translation>运行阻抗测量</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="27"/>
        <source>Save Impedance Measurements in CSV Format</source>
        <translation>以CSV格式保存阻抗测量值</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="47"/>
        <source>(Impedance measurements are also saved with data)</source>
        <translation>（阻抗测量值也与数据一起保存）</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="70"/>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="125"/>
        <source>Desired Impedance Test Frequency: </source>
        <translation>所需阻抗测试频率：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="71"/>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="73"/>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="126"/>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="144"/>
        <source> Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="72"/>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="144"/>
        <source>Actual Impedance Test Frequency: </source>
        <translation>实际阻抗测试频率：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="96"/>
        <source>Save Impedance Data As</source>
        <translation>将阻抗数据另存为</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="97"/>
        <source>CSV (Comma delimited) (*.csv)</source>
        <translation>CSV（逗号分隔）（*.CSV）</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="139"/>
        <source>Desired Impedance Test Frequency: -</source>
        <translation>所需阻抗测试频率：-</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelimpedancetab.cpp" line="146"/>
        <source>Actual Impedance Test Frequency: -</source>
        <translation>实际阻抗测试频率：-</translation>
    </message>
</context>
<context>
    <name>ControlPanelTriggerTab</name>
    <message>
        <location filename="GUI/Widgets/controlpaneltriggertab.cpp" line="14"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpaneltriggertab.cpp" line="30"/>
        <source>Trigger Source</source>
        <translation>触发源</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpaneltriggertab.cpp" line="35"/>
        <source>Trigger Polarity</source>
        <translation>触发器极性</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpaneltriggertab.cpp" line="40"/>
        <source>Trigger Position</source>
        <translation>触发位置</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpaneltriggertab.cpp" line="50"/>
        <source>Display Trigger</source>
        <translation>显示触发</translation>
    </message>
</context>
<context>
    <name>ControlWindow</name>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="143"/>
        <source>Show Control Panel</source>
        <translation>显示控制面板</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="268"/>
        <source>Start</source>
        <translation>开 始</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="271"/>
        <source>Analysis</source>
        <translation>分 析</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="274"/>
        <source>Report</source>
        <translation>报 告</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="277"/>
        <source>Share</source>
        <translation>共 享</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="280"/>
        <source>Settings</source>
        <translation>设 置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="298"/>
        <source>Xmind </source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="300"/>
        <source>USB Interface Board</source>
        <translation>USB接口板</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="302"/>
        <source>Recording Controller</source>
        <translation>记录控制器</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="304"/>
        <source>Stimulation/Recording Controller</source>
        <translation>刺激/记录控制器</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="308"/>
        <source> - Demonstration Mode</source>
        <translation> - 演示模式</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="310"/>
        <source> - Playback Mode: </source>
        <translation> - 回放模式：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="429"/>
        <source>Load Settings</source>
        <translation>加载设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="430"/>
        <source>Ctrl+O</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="433"/>
        <source>Set Default Settings</source>
        <translation>设置默认模式</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="436"/>
        <source>Save Settings</source>
        <translation>保存设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="437"/>
        <source>Ctrl+S</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="440"/>
        <source>Exit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="441"/>
        <source>Ctrl+Q</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="445"/>
        <source>Zoom In Time Scale</source>
        <translation>放大时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="446"/>
        <source>&lt;</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="446"/>
        <source>,</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="449"/>
        <source>Zoom Out Time Scale</source>
        <translation>缩小时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="450"/>
        <source>&gt;</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="450"/>
        <source>.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="453"/>
        <source>Toggle Roll/Sweep</source>
        <translation>切换滚动/扫描</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="454"/>
        <source>/</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="454"/>
        <source>?</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="457"/>
        <source>Zoom In Voltage Scale</source>
        <translation>放大电压刻度</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="458"/>
        <source>+</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="458"/>
        <source>=</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="461"/>
        <source>Zoom Out Voltage Scale</source>
        <translation>缩小电压刻度</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="462"/>
        <source>-</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="462"/>
        <source>_</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="465"/>
        <source>Display Custom Channel Name</source>
        <translation>显示自定义通道名称</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="466"/>
        <source>Ctrl+1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="470"/>
        <source>Display Native Channel Name</source>
        <translation>显示本地通道名称</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="471"/>
        <source>Ctrl+2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="475"/>
        <source>Display Impedance Magnitude</source>
        <translation>显示阻抗幅值</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="476"/>
        <source>Ctrl+3</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="480"/>
        <source>Display Impedance Phase</source>
        <translation>显示阻抗相位</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="481"/>
        <source>Ctrl+4</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="485"/>
        <source>Display Reference</source>
        <translation>显示参考</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="486"/>
        <source>Ctrl+5</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="490"/>
        <source>Cycle Display Text</source>
        <translation>循环显示文本</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="491"/>
        <source>Ctrl+T</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="494"/>
        <source>Change Background Color</source>
        <translation>更改背景颜色</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="498"/>
        <source>Show Aux Inputs</source>
        <translation>显示辅助输入</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="503"/>
        <source>Show Supply Voltages</source>
        <translation>显示电源电压</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="518"/>
        <source>Undo</source>
        <translation>撤销</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="519"/>
        <source>Ctrl+Z</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="522"/>
        <source>Redo</source>
        <translation>恢复</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="523"/>
        <source>Ctrl+Y</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="526"/>
        <source>Group</source>
        <translation>分组</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="527"/>
        <source>Ctrl+G</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="530"/>
        <source>Ungroup</source>
        <translation>取消分组</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="531"/>
        <source>Ctrl+Shift+G</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="534"/>
        <source>Rename Channel</source>
        <translation>重命名通道</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="535"/>
        <source>Ctrl+R</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="538"/>
        <source>Set Reference</source>
        <translation>设置参考</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="541"/>
        <source>Set Spike Detection Thresholds</source>
        <translation>设置尖峰检测阈值</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="544"/>
        <source>Color Amplifier Channels</source>
        <translation>设置放大器通道颜色</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="547"/>
        <source>Group Amplifier Channels</source>
        <translation>分组放大器通道</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="550"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="2095"/>
        <source>Ungroup All Channels</source>
        <translation>取消放大器通道分组</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="553"/>
        <source>Restore Original Order</source>
        <translation>恢复原始命令</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="556"/>
        <source>Alphabetize Channels</source>
        <translation>按字母顺序排列通道</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="561"/>
        <source>Load Stimulation Settings</source>
        <translation>载入刺激设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="564"/>
        <source>Save Stimulation Settings</source>
        <translation>保存刺激设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="567"/>
        <source>Copy Stimulation Parameters</source>
        <translation>复制刺激参数</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="571"/>
        <source>Paste Stimulation Parameters</source>
        <translation>粘贴刺激参数</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="575"/>
        <source>Amplifier Settle Settings</source>
        <translation>放大器沉降设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="578"/>
        <source>Charge Recovery Settings</source>
        <translation>电荷恢复设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="583"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1886"/>
        <source>Remote TCP Control</source>
        <translation>远程TCP控制</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="587"/>
        <source>Keyboard Shortcuts...</source>
        <translation>键盘快捷键</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="588"/>
        <source>F12</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="592"/>
        <source>Generate Log File for Debug</source>
        <translation>生成用于调试的日志文件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="598"/>
        <source>Visit Intan Website...</source>
        <translation>访问Intan网站</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="601"/>
        <source>About Intan RHX Software...</source>
        <translation>关于Intan RHX软件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="605"/>
        <source>ISI</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="608"/>
        <source>Probe Map</source>
        <translation>探针图</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="611"/>
        <source>Performance Optimization</source>
        <translation>性能优化</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="614"/>
        <source>PSTH</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="617"/>
        <source>Spectrogram</source>
        <translation>光谱图</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="620"/>
        <source>Spike Scope</source>
        <translation>尖峰图</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="625"/>
        <source>Rewind</source>
        <translation>倒带</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="629"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="637"/>
        <source>Fast Forward</source>
        <translation>快进</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="634"/>
        <source>Run</source>
        <translation>运行</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="646"/>
        <source>Jump to End</source>
        <translation>跳转到末尾</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="649"/>
        <source>Jump to Start</source>
        <translation>跳转到开始</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="652"/>
        <source>Jump Back 1s</source>
        <translation>倒退1s</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="655"/>
        <source>Jump Back 10s</source>
        <translation>倒退10S</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="658"/>
        <source>Jump to Position</source>
        <translation>跳转到位置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="662"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="861"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="881"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="999"/>
        <source>Record (no valid filename)</source>
        <translation>记录（没有有效的文件名）</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="673"/>
        <source>Select Filename</source>
        <translation>选择文件名</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="676"/>
        <source>Choose File Format</source>
        <translation>选择文件格式</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="679"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="862"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="887"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1006"/>
        <source>Triggered Recording (no valid filename)</source>
        <translation>触发录制（没有有效的文件名）</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="688"/>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="697"/>
        <source>Display</source>
        <translation>显示</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="704"/>
        <source>Labels</source>
        <translation>标签</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="720"/>
        <source>Channels</source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="740"/>
        <source>Stimulation</source>
        <translation>刺激</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="753"/>
        <source>Tools</source>
        <translation>工具</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="761"/>
        <source>Network</source>
        <translation>网络</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="766"/>
        <source>Performance</source>
        <translation>性能</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="772"/>
        <source>Help</source>
        <translation>帮助</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="858"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="997"/>
        <source>Record to </source>
        <translation>录制到</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="859"/>
        <source>Triggered Record to </source>
        <translation>触发录制到</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="879"/>
        <source>Record (must not be running)</source>
        <translation>记录（不得运行）</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="885"/>
        <source>Triggered Recording (must not be running)</source>
        <translation>触发录制（不得运行）</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1004"/>
        <source>Triggered Recording to </source>
        <translation>已触发录制到 </translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1050"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1058"/>
        <source>Ready to run with synthesized data.</source>
        <translation>准备使用合成数据运行。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1060"/>
        <source>Ready to play back data file.</source>
        <translation>准备播放数据文件。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1063"/>
        <source>Ready.</source>
        <translation>已准备</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1070"/>
        <source>Running with synthesized data.</source>
        <translation>使用合成数据运行。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1072"/>
        <source>Data playback running.</source>
        <translation>数据播放正在运行。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1074"/>
        <source>Running.</source>
        <translation>正在运行</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1081"/>
        <source>Loading...</source>
        <translation>加载中...</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1158"/>
        <source>Select Log File Name and Directory</source>
        <translation>选择日志文件名和目录</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1159"/>
        <source>Please select a name and directory for the log file (for Intan debugging purposes only).  This log file will be overwritten every time the software starts.  The file name and location will be retained across software sessions, and logging will persist until disabled through the Help menu.</source>
        <translation>请为日志文件选择一个名称和目录（仅用于Intan调试目的）。每次软件启动时，都会覆盖此日志文件。文件名和位置将在软件会话中保留，日志记录将一直保留到通过“帮助”菜单禁用为止。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1166"/>
        <source>Save Log File As</source>
        <translation>将日志文件另存为</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1198"/>
        <source>About Intan RHX Software</source>
        <translation>关于Intan RHX软件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1199"/>
        <source>&lt;h2&gt;Intan RHX Data Acquisition Software&lt;/h2&gt;&lt;p&gt;Version </source>
        <translation>Intan RHX数据采集软件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1201"/>
        <source>&lt;p&gt;Copyright </source>
        <translation>版权</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1201"/>
        <source> Intan Technologies&lt;p&gt;This application controls the RHD USB Interface Board, RHD Recording Controllers, and RHS Stimulation/Recording Controller from Intan Technologies.  The C++/Qt source code for this application is freely available from Intan Technologies. For more information visit &lt;i&gt;www.intantech.com&lt;/i&gt;.&lt;p&gt;This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.&lt;p&gt;This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.</source>
        <translation>Intan科技

此应用程序控制Intan Technologies的RHD USB接口板、RHD记录控制器和RHS刺激/记录控制器。此应用程序的C++/Qt源代码可从Intan Technologies免费获得。欲了解更多信息，请访问www.intatech.com。

此程序是自由软件：您可以根据自由软件基金会发布的GNU通用公共许可证的条款、许可证的第3版或（根据您的选择）任何更高版本对其进行重新分发和/或修改。

分发此程序是希望它有用，但没有任何保证；甚至没有对适销性或特定用途适用性的隐含保证。有关更多详细信息，请参阅GNU通用公共许可证。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1300"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1305"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1314"/>
        <source>Select Base Filename</source>
        <translation>选择基础文件名</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1300"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1305"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1314"/>
        <source>Intan Data Files (*</source>
        <translation>Intan数据文件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1308"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1317"/>
        <source>Select Existing Directory</source>
        <translation>选择现有目录</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1639"/>
        <source>Error: Could not load settings file </source>
        <translation>错误：无法加载设置文件 </translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1642"/>
        <source>Warning: Problem loading settings file </source>
        <translation>警告：加载设置文件时出现问题 </translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1665"/>
        <source>Set Default Settings File</source>
        <translation>设置默认设置文件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1666"/>
        <source>Please select a default settings file.  This file will load automatically every time the software starts with an </source>
        <translation>请选择一个默认设置文件。每次软件使用</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1668"/>
        <source>.  You can cancel this action by unchecking the appropriate box when the software starts.</source>
        <translation>。您可以在软件启动时取消选中相应的框来取消此操作。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1761"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1773"/>
        <source>Error: Loading from XML</source>
        <translation>错误：从XML加载</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="1764"/>
        <location filename="GUI/Windows/controlwindow.cpp" line="1776"/>
        <source>Warning: Loading from XML</source>
        <translation>警告：从XML加载</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2095"/>
        <source>Ungroup all grouped amplifier channels?</source>
        <translation>取消所有通道分组</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2130"/>
        <source>Warning: Duplicate Names Not Allowed</source>
        <translation>警告：不允许重复名称</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2130"/>
        <source>The name </source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2131"/>
        <source> is already used by another channel.</source>
        <translation>已被另一个通道使用。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2177"/>
        <source>Warning: Stimulation Parameters Overwrite</source>
        <translation>警告：刺激参数覆盖</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2178"/>
        <source>Stimulation parameters have been changed by the user.  Loading a settings file with new stimulation parameters will overwrite these changes.  Continue?</source>
        <translation>刺激参数已由用户更改。加载具有新刺激参数的设置文件将覆盖这些更改。 继续？</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2197"/>
        <source>Warning: Possible Data File Overwrite</source>
        <translation>警告：可能覆盖数据文件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2198"/>
        <source>Saving data in this file format will overwrite pre-existing data files in the directory </source>
        <translation>以这种文件格式保存数据将覆盖目录中预先存在的数据文件。 是否要继续？</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2214"/>
        <source>&lt;b&gt;USB Buffer Overrun Error&lt;/b&gt;&lt;p&gt;Recording was stopped because the USB buffer on the Intan controller reached maximum capacity.  This happens when the host computer cannot keep up with the data streaming over the USB cable.&lt;p&gt;Try running with a lower sample rate or closing other applications to reduce CPU load.</source>
        <translation>USB缓冲区溢出错误
由于Intan控制器上的USB缓冲区达到最大容量，录制已停止。当主机无法跟上通过USB电缆传输的数据时，就会发生这种情况。尝试以较低的采样率运行或关闭其他应用程序以减少CPU负载。</translation>
    </message>
    <message>
        <location filename="GUI/Windows/controlwindow.cpp" line="2228"/>
        <source>&lt;b&gt;Software Buffer Overrun Error&lt;/b&gt;&lt;p&gt;Recording was stopped because the software waveform buffer reached maximum capacity.  This happens when the host computer cannot process the waveform data quickly enough.&lt;p&gt;Try running with a lower sample rate or closing other applications to reduce CPU load.&lt;p&gt;In the Performance menu there is an option to enable the high-efficiency method of plotting. If the workload of plotting (for example, with multiple high-resolution monitors) was the cause of this buffer overrun, we recommend trying this mode. Performance will likely be significantly improved.</source>
        <translation>软件缓冲区溢出错误
由于软件波形缓冲区达到最大容量，录制已停止。当主计算机不能足够快地处理波形数据时，就会发生这种情况。尝试以较低的采样率运行或关闭其他应用程序以减少CPU负载。在“性能”菜单中，有一个选项可以启用高效绘图方法。如果绘图的工作量（例如，使用多个高分辨率监视器）是导致缓冲区溢出的原因，我们建议尝试此模式。性能可能会显著提高。&quot;</translation>
    </message>
</context>
<context>
    <name>ControllerInterface</name>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="144"/>
        <source>Out of Memory Error</source>
        <translation>内存不足错误</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="144"/>
        <source>Software was unable to allocate </source>
        <translation>软件无法分配 </translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="146"/>
        <source> GB of memory.  Try running with fewer amplifier channels or a lower sample rate, or use a computer with more RAM.</source>
        <translation> GB内存。尝试使用更少的放大器通道或更低的采样率运行，
或者使用具有更多RAM的计算机。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="267"/>
        <location filename="Engine/Processing/controllerinterface.cpp" line="272"/>
        <source>Capacity of RHD USB Interface Exceeded</source>
        <translation>超出RHD USB接口容量</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="268"/>
        <source>This RHD USB interface board can support only 256 amplifier channels.&lt;p&gt;More than 256 total amplifier channels are currently connected.&lt;p&gt;Amplifier chips exceeding this limit will not appear in the GUI.</source>
        <translation>此RHD USB接口板只能支持256个放大器通道。目前连接
的放大器通道总数超过256个。超过此限制的放大器芯片
将不会出现在GUI中。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="273"/>
        <source>This RHD USB interface board can support only 256 amplifier channels.&lt;p&gt;More than 256 total amplifier channels are currently connected.  (Each RHD2216 chip counts as 32 channels.)&lt;p&gt;Amplifier chips exceeding this limit will not appear in the GUI.</source>
        <translation>此RHD USB接口板只能支持256个放大器通道。目前连接的放大器通道总数超过256个。
（每个RHD2216芯片计为32个通道。）超过此限制的放大器芯片将不会出现在GUI中。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="503"/>
        <source>Configuration File Error: Software Aborting</source>
        <translation>配置文件错误：软件中止</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="504"/>
        <source>Cannot upload configuration file: </source>
        <translation>无法上传配置文件：</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="505"/>
        <source>.  Make sure file is in the same directory as the executable file.</source>
        <translation>。请确保文件与可执行文件位于同一目录中。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="801"/>
        <source>Waiting for trigger...</source>
        <translation>正在等待触发器...</translation>
    </message>
</context>
<context>
    <name>DataFileReader</name>
    <message>
        <location filename="Engine/Processing/DataFileReaders/datafilereader.cpp" line="714"/>
        <source>Playback of file </source>
        <translation>播放文件</translation>
    </message>
    <message>
        <location filename="Engine/Processing/DataFileReaders/datafilereader.cpp" line="717"/>
        <source>Live note at </source>
        <translation>实时留言在 </translation>
    </message>
    <message>
        <location filename="Engine/Processing/DataFileReaders/datafilereader.cpp" line="724"/>
        <source>End of file </source>
        <translation>文件结束 </translation>
    </message>
</context>
<context>
    <name>DemoDialog</name>
    <message>
        <location filename="GUI/Dialogs/demodialog.cpp" line="16"/>
        <source>No Intan controllers have been detected. Ensure devices are powered on and connected to this machine.
You may also run this software in demonstration mode or play back a saved data file.</source>
        <translation>未检测到Intan控制器。确保设备已通电并连接到此机器。您也可以在演示模式下运行此软件或播放保存的数据文件。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/demodialog.cpp" line="19"/>
        <source>RHD USB Interface Board Demo</source>
        <translation>RHD USB接口板演示</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/demodialog.cpp" line="20"/>
        <source>RHD Recording Controller Demo</source>
        <translation>RHD录音控制器演示</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/demodialog.cpp" line="21"/>
        <source>RHS Stim/Record Controller Demo</source>
        <translation>RHS 刺激/记录控制器演示</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/demodialog.cpp" line="22"/>
        <source>Data File Playback</source>
        <translation>数据文件播放</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/demodialog.cpp" line="24"/>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/demodialog.cpp" line="57"/>
        <source>No Intan Controllers Detected</source>
        <translation>未检测到Intan控制器</translation>
    </message>
</context>
<context>
    <name>DigOutDialog</name>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="18"/>
        <source>Trigger</source>
        <translation>触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="20"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="22"/>
        <source>Trigger Source:</source>
        <translation>触发源：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="34"/>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="40"/>
        <source> </source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="37"/>
        <source>Edge Triggered</source>
        <translation>边缘触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="37"/>
        <source>Level Triggered</source>
        <translation>电平触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="43"/>
        <source>Trigger on High</source>
        <translation>触发器处于高位</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="43"/>
        <source>Trigger on Low</source>
        <translation>触发器处于低位</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="48"/>
        <source>Post Trigger Delay:</source>
        <translation>触发后延迟：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="50"/>
        <source>Pulse</source>
        <translation>脉冲</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="54"/>
        <source>Pulse Duration (D1):</source>
        <translation>脉冲持续时间（D1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="58"/>
        <source>Single Pulse</source>
        <translation>单脉冲</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="58"/>
        <source>Pulse Train</source>
        <translation>脉冲串</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="60"/>
        <source>Pulse Repetition:</source>
        <translation>脉冲重复：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="64"/>
        <source>Number of Pulses:</source>
        <translation>脉冲数：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="68"/>
        <source>Pulse Train Period:</source>
        <translation>脉冲串周期：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="70"/>
        <source>Pulse Train Frequency: -- Hz</source>
        <translation>脉冲串频率：--Hz</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="74"/>
        <source>Refractory Period:</source>
        <translation>不应期：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="77"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="78"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/digoutdialog.cpp" line="282"/>
        <source>Pulse Train Frequency: </source>
        <translation>脉冲串频率：</translation>
    </message>
</context>
<context>
    <name>FilterDisplaySelector</name>
    <message>
        <location filename="GUI/Widgets/filterdisplayselector.cpp" line="191"/>
        <source>Show Disabled Channels</source>
        <translation>显示禁用的频道</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/filterdisplayselector.cpp" line="212"/>
        <source>Filter Display Selector</source>
        <translation>过滤器显示选择器</translation>
    </message>
</context>
<context>
    <name>FilterPlot</name>
    <message>
        <location filename="GUI/Widgets/filterplot.cpp" line="409"/>
        <source>  LOW Pass Response</source>
        <translation> 低通响应</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/filterplot.cpp" line="410"/>
        <source>  WIDE Band Response</source>
        <translation> 宽带响应</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/filterplot.cpp" line="411"/>
        <source>  HIGH Pass Response</source>
        <translation> 高通响应</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/filterplot.cpp" line="537"/>
        <location filename="GUI/Widgets/filterplot.cpp" line="551"/>
        <source>bessel</source>
        <translation>贝赛尔</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/filterplot.cpp" line="539"/>
        <location filename="GUI/Widgets/filterplot.cpp" line="553"/>
        <source>butterworth</source>
        <translation>巴特沃斯</translation>
    </message>
</context>
<context>
    <name>GPUInterface</name>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="344"/>
        <source>Error finding OpenCL platforms.</source>
        <translation>查找OpenCL平台时出错。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="394"/>
        <source>Error getting OpenCL devices</source>
        <translation>获取OpenCL设备时出错</translation>
    </message>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="507"/>
        <source>Error creating OpenCL context.</source>
        <translation>创建OpenCL上下文时出错。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="531"/>
        <source>Cannot load kernel file to read. Is kernel.cl present?</source>
        <translation>无法加载要读取的内核文件。kernel.cl存在吗？</translation>
    </message>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="546"/>
        <source>Error creating OpenCL program.</source>
        <translation>创建OpenCL程序时出错。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="565"/>
        <source>Error building OpenCL program... build log inaccessible</source>
        <translation>生成OpenCL程序时出错。 生成日志不可访问</translation>
    </message>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="579"/>
        <source>Error creating OpenCL kernel.</source>
        <translation>创建OpenCL内核时出错。</translation>
    </message>
    <message>
        <location filename="Engine/Processing/XPUInterfaces/gpuinterface.cpp" line="586"/>
        <source>OpenCL Error</source>
        <translation>OpenCL错误</translation>
    </message>
</context>
<context>
    <name>HelpDialogCheckInputWave</name>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="8"/>
        <source>Check Input Wave</source>
        <translation>检查输入波形</translation>
    </message>
</context>
<context>
    <name>HelpDialogTestChip</name>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="33"/>
        <source>Test Chip</source>
        <translation>测试芯片</translation>
    </message>
</context>
<context>
    <name>HelpDialogUploadTestStimParameters</name>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="68"/>
        <source>Upload Test Stim Parameters</source>
        <translation>上传测试刺激参数</translation>
    </message>
</context>
<context>
    <name>ISIDialog</name>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="15"/>
        <source>Lock Plot to Selected</source>
        <translation>将绘图锁定到选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="18"/>
        <source>Set to Selected</source>
        <translation>设置为选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="30"/>
        <source>Linear Scale</source>
        <translation>线性标度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="31"/>
        <source>Log Scale</source>
        <translation>对数刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="39"/>
        <source>Y Axis</source>
        <translation>Y 轴</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="43"/>
        <source>Clear ISI Plot</source>
        <translation>清除ISI图</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="46"/>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="49"/>
        <source>Save Data</source>
        <translation>保存数据</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="68"/>
        <source>Channel</source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="72"/>
        <source>Time Span</source>
        <translation>时间跨度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="77"/>
        <source>Bin Size</source>
        <translation>容器尺寸</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="84"/>
        <source>Time Scale</source>
        <translation>时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="143"/>
        <source>N/A</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="227"/>
        <source>Save Data As</source>
        <translation>数据另存为</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="251"/>
        <source>Inter-Spike Interval Histogram</source>
        <translation>尖峰间隔直方图</translation>
    </message>
</context>
<context>
    <name>ISISaveConfigDialog</name>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="259"/>
        <source>Select the file types to be created when data is saved.  Multiple file types may be selected.</source>
        <translation>选择保存数据时要创建的文件类型。可以选择多种文件类型。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="262"/>
        <source>MATLAB MAT-File Data File (can be read into Python using scipy.io.loadmat)</source>
        <translation>MATLAB MAT文件数据文件（可以使用scipy.io.loadmat读取到Python中）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="263"/>
        <source>CSV Text File (can be read into spreadsheet software)</source>
        <translation>CSV文本文件（可读入电子表格软件）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="264"/>
        <source>PNG Screen Capture</source>
        <translation>PNG屏幕捕获</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="271"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="272"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/isidialog.cpp" line="288"/>
        <source>ISI Save Data Configuration</source>
        <translation>ISI保存数据配置</translation>
    </message>
</context>
<context>
    <name>ImpedanceFreqDialog</name>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="41"/>
        <source>The sampling rate of </source>
        <translation>采样率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="43"/>
        <source> Hz restricts this range to </source>
        <translation> Hz将此范围限制为 </translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="45"/>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="56"/>
        <source> Hz to </source>
        <translation> Hz至 </translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="47"/>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="58"/>
        <source> Hz.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="50"/>
        <source>For acceptable accuracy, the frequency should lie within the amplifier bandwidth by a factor of 1.5.</source>
        <translation>为了获得可接受的精度，频率应在放大器带宽内1.5倍。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="54"/>
        <source>This restricts the measurement frequency range to </source>
        <translation>将测量频率范围限制为 </translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="62"/>
        <source>Electrode Impedance Measurement Frequency</source>
        <translation>电极阻抗测量频率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="64"/>
        <source>Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="68"/>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="108"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="69"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/impedancefreqdialog.cpp" line="82"/>
        <source>Select Electrode Impedance Measurement Frequency</source>
        <translation>选择电极阻抗测量频率</translation>
    </message>
</context>
<context>
    <name>ImpedanceGradient</name>
    <message>
        <location filename="GUI/Widgets/impedancegradient.cpp" line="60"/>
        <source>Electrode Impedance</source>
        <translation>电极阻抗</translation>
    </message>
</context>
<context>
    <name>KeyboardShortcutDialog</name>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="10"/>
        <source>Keyboard Shortcuts</source>
        <translation>键盘快捷键</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="14"/>
        <source>&lt;b&gt;Ctrl+O:&lt;/b&gt; Load settings</source>
        <translation>Ctrl+O：加载设置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="15"/>
        <source>&lt;b&gt;Ctrl+S:&lt;/b&gt; Save settings</source>
        <translation>Ctrl+S：保存设置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="16"/>
        <source>&lt;b&gt;Ctrl+Q:&lt;/b&gt; Exit</source>
        <translation>Ctrl+Q：退出</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="17"/>
        <source>&lt;b&gt;Ctrl+R:&lt;/b&gt; Rename selected channel(s)</source>
        <translation>Ctrl+R：重命名所选通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="18"/>
        <source>&lt;b&gt;Ctrl+C:&lt;/b&gt; Copy selected channel stimulation parameters</source>
        <translation>Ctrl+C:复制选定的通道刺激参数</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="19"/>
        <source>&lt;b&gt;Ctrl+V:&lt;/b&gt; Paste stimulation parameters to selected channel(s)</source>
        <translation>Ctrl+V：将刺激参数粘贴到所选通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="20"/>
        <source>&lt;b&gt;F12:&lt;/b&gt; Open/close keyboard shortcuts dialog</source>
        <translation>F12：打开/关闭键盘快捷键对话框</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="30"/>
        <source>&lt;b&gt;/ or ? Key:&lt;/b&gt; Toggle roll/sweep mode</source>
        <translation>/或?键：切换滚动/扫描模式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="31"/>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="62"/>
        <source>&lt;b&gt;&amp;lt; or , Key:&lt;/b&gt; Zoom in on time scale</source>
        <translation>&lt;或,键：时间刻度放大</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="32"/>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="63"/>
        <source>&lt;b&gt;&amp;gt; or . Key:&lt;/b&gt; Zoom out on time scale</source>
        <translation>&gt;或.键：时间刻度缩小</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="33"/>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="64"/>
        <source>&lt;b&gt;+ or = Key:&lt;/b&gt; Zoom in on voltage scale</source>
        <translation>+或=键：放大电压刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="34"/>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="65"/>
        <source>&lt;b&gt;- or _ Key:&lt;/b&gt; Zoom out on voltage scale</source>
        <translation>-或_键：缩小电压刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="35"/>
        <source>&lt;b&gt;Ctrl+P:&lt;/b&gt; Pin selected channels</source>
        <translation>Ctrl+P：固定选定通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="36"/>
        <source>&lt;b&gt;Ctrl+U:&lt;/b&gt; Unpin selected channels</source>
        <translation>Ctrl+U：取消固定选定通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="37"/>
        <source>&lt;b&gt;Mouse Wheel:&lt;/b&gt; Scroll through channels</source>
        <translation>鼠标滚轮：滚动通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="38"/>
        <source>&lt;b&gt;Ctrl+Mouse Wheel:&lt;/b&gt; Adjust vertical spacing of channels</source>
        <translation>Ctrl+鼠标滚轮：调整通道的垂直间距</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="39"/>
        <source>&lt;b&gt;Cursor Keys:&lt;/b&gt; Step through channels</source>
        <translation>光标键：逐步通过通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="40"/>
        <source>&lt;b&gt;Page Up/Down Keys:&lt;/b&gt; Scroll through channels</source>
        <translation>向上/向下翻页键：滚动通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="41"/>
        <source>&lt;b&gt;Home Key:&lt;/b&gt; Scroll to first channel</source>
        <translation>主页键：滚动到第一个通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="42"/>
        <source>&lt;b&gt;End Key:&lt;/b&gt; Scroll to last channel</source>
        <translation>结束键：滚动到最后一个通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="43"/>
        <source>&lt;b&gt;Spacebar:&lt;/b&gt; Enable/disable channels</source>
        <translation>空格键：启用/禁用通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="44"/>
        <source>&lt;b&gt;Ctrl+G:&lt;/b&gt; Group selected channels</source>
        <translation>Ctrl+G：将所选通道分组</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="45"/>
        <source>&lt;b&gt;Ctrl+Shift+G:&lt;/b&gt; Ungroup selected channels</source>
        <translation>Ctrl+Shift+G:取消对选定通道的分组</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="46"/>
        <source>&lt;b&gt;Ctrl+1:&lt;/b&gt; Display custom channel name</source>
        <translation>Ctrl+1：显示自定义频道名称</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="47"/>
        <source>&lt;b&gt;Ctrl+2:&lt;/b&gt; Display native channel name</source>
        <translation>Ctrl+2：显示本机通道名称</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="48"/>
        <source>&lt;b&gt;Ctrl+3:&lt;/b&gt; Display impedance magnitude</source>
        <translation>Ctrl+3：显示阻抗大小</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="49"/>
        <source>&lt;b&gt;Ctrl+4:&lt;/b&gt; Display impedance phase</source>
        <translation>Ctrl+4：显示阻抗相位</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="50"/>
        <source>&lt;b&gt;Ctrl+5:&lt;/b&gt; Display reference</source>
        <translation>Ctrl+5：显示参考</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="51"/>
        <source>&lt;b&gt;Ctrl+T:&lt;/b&gt; Cycle through waveform display labels</source>
        <translation>Ctrl+T：在波形显示标签之间循环</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="52"/>
        <source>&lt;b&gt;Ctrl+Z:&lt;/b&gt; Undo</source>
        <translation>Ctrl+Z:撤消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="53"/>
        <source>&lt;b&gt;Ctrl+Y:&lt;/b&gt; Redo</source>
        <translation>Ctrl+Y:恢复</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="66"/>
        <source>&lt;b&gt;Mouse Wheel:&lt;/b&gt; Zoom through voltage scale</source>
        <translation>鼠标滚轮：缩放电压刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="67"/>
        <source>&lt;b&gt;Shift+Mouse Wheel:&lt;/b&gt; Zoom through time scale</source>
        <translation>Shift+鼠标滚轮：缩放时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="76"/>
        <source>&lt;b&gt;Mouse Wheel Up or Shift+Up or Ctrl+Up Arrow or +:&lt;/b&gt; Zoom in</source>
        <translation>鼠标滚轮向上或Shift+向上或Ctrl+向上箭头或+：放大</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="77"/>
        <source>&lt;b&gt;Mouse Wheel Down or Shift+Down or Ctrl+Down Arrow or -:&lt;/b&gt; Zoom out</source>
        <translation>鼠标滚轮向下或Shift+向下或Ctrl+向下箭头或-：缩小</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="78"/>
        <source>&lt;b&gt;Shift+Mouse Wheel Up or Up Arrow or Page Up:&lt;/b&gt; Scroll up</source>
        <translation>Shift+鼠标滚轮向上或向上箭头或向上翻页：向上滚动</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="79"/>
        <source>&lt;b&gt;Shift+Mouse Wheel Down or Down Arrow or Page Down:&lt;/b&gt; Scroll down</source>
        <translation>Shift+鼠标滚轮向下或向下箭头或向下翻页：向下滚动</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="80"/>
        <source>&lt;b&gt;Ctrl+Mouse Wheel Up or Left Arrow:&lt;/b&gt; Scroll left</source>
        <translation>Ctrl+鼠标滚轮向上或向左箭头：向左滚动</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/keyboardshortcutdialog.cpp" line="81"/>
        <source>&lt;b&gt;Ctrl+Mouse Wheel Down or Right Arrow:&lt;/b&gt; Scroll right</source>
        <translation>Ctrl+鼠标滚轮向下或向右箭头：向右滚动</translation>
    </message>
</context>
<context>
    <name>MultiColumnDisplay</name>
    <message>
        <location filename="GUI/Widgets/multicolumndisplay.cpp" line="90"/>
        <source>Delete Column</source>
        <translation>删除列</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/multicolumndisplay.cpp" line="90"/>
        <source>Delete this display column?</source>
        <translation>是否删除此显示列？</translation>
    </message>
</context>
<context>
    <name>MultiWaveformPlot</name>
    <message>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="243"/>
        <source>Z = </source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="247"/>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="1352"/>
        <source>REF: </source>
        <translation>参考：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="251"/>
        <source>Stim Trigger: </source>
        <translation>刺激触发器：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="1261"/>
        <source> ms</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="1338"/>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="1345"/>
        <source>n/a</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/multiwaveformplot.cpp" line="1354"/>
        <source>R:</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>PSTHDialog</name>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="15"/>
        <source>Lock Plot to Selected</source>
        <translation>将绘图锁定到选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="18"/>
        <source>Set to Selected</source>
        <translation>设置为选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="37"/>
        <source>Clear Last Trial</source>
        <translation>清除上次试验</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="40"/>
        <source>Clear All Trials</source>
        <translation>清除所有试验</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="51"/>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="54"/>
        <source>Save Data</source>
        <translation>保存数据</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="73"/>
        <source>Channel</source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="77"/>
        <source>Stimulus Marker</source>
        <translation>刺激标记</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="82"/>
        <source>Trigger Polarity</source>
        <translation>触发器极性</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="89"/>
        <source>Trigger Settings</source>
        <translation>触发设置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="93"/>
        <source>Pre-Trigger Span</source>
        <translation>预触发范围</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="98"/>
        <source>Post-Trigger Span</source>
        <translation>触发后跨度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="103"/>
        <source>Bin Size</source>
        <translation>容器尺寸</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="111"/>
        <source>Time Scale</source>
        <translation>时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="115"/>
        <source>Max Number of Trials</source>
        <translation>最大试验次数</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="123"/>
        <source>Trials</source>
        <translation>试验</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="182"/>
        <source>N/A</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="278"/>
        <source>Save Data As</source>
        <translation>数据另存为</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="302"/>
        <source>Per-Stimulus Time Histogram</source>
        <translation>每刺激时间柱状图</translation>
    </message>
</context>
<context>
    <name>PSTHSaveConfigDialog</name>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="310"/>
        <source>Select the file types to be created when data is saved.  Multiple file types may be selected.</source>
        <translation>选择保存数据时要创建的文件类型。可以选择多种文件类型。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="313"/>
        <source>MATLAB MAT-File Data File (can be read into Python using scipy.io.loadmat)</source>
        <translation>MATLAB MAT文件数据文件（可以使用scipy.io.loadmat读取到Python中）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="314"/>
        <source>CSV Text File (can be read into spreadsheet software)</source>
        <translation>CSV文本文件（可读入电子表格软件）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="315"/>
        <source>PNG Screen Capture</source>
        <translation>PNG屏幕捕获</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="322"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="323"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/psthdialog.cpp" line="339"/>
        <source>PSTH Save Data Configuration</source>
        <translation>PSTH保存数据配置</translation>
    </message>
</context>
<context>
    <name>PerformanceOptimizationDialog</name>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="10"/>
        <source>Performance Optimization</source>
        <translation>性能优化</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="15"/>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="22"/>
        <source> (recommended)</source>
        <translation>（推荐）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="35"/>
        <source>Selected XPU:</source>
        <translation>所选XPU：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="39"/>
        <source>Write Latency:</source>
        <translation>写入延迟：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="43"/>
        <source>Plotting Mode:</source>
        <translation>绘图模式：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="47"/>
        <source>This software can use any connected XPU (CPU or GPU) to accelerate filtering
and spike detection. Upon startup, a diganostic is run and the fastest XPU is
detected to be used by default. However, the user can override this choice by
selecting the XPU to use manually.</source>
        <translation>该软件可以使用任何连接的XPU（CPU或GPU）来加速过滤和尖峰检测。
启动后，运行诊断，并检测到默认情况下使用最快的XPU。
但是，用户可以通过选择要手动使用的XPU来覆盖此选择。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="54"/>
        <source>By reducing the write-to-disk latency, it is possible to eliminate some of the
lag between data being acquired and being written to disk. This can be useful
if another application needs to access the data immediately as it is written.
However, every block of data that is written incurs some overhead, so this
comes at the cost of less efficient writing, and may limit data writing rates.
When saving large amounts of data, the highest latency is recommended.</source>
        <translation>通过减少磁盘写入延迟，可以消除获取数据和写入磁盘之间的一些滞后。
如果另一个应用程序需要在写入数据时立即访问数据，则这一点非常有用。
然而，写入的每个数据块都会产生一些开销，因此这是以写入效率较低为代价的，
并且可能会限制数据写入速率。当保存大量数据时，建议使用最高延迟。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="63"/>
        <source>For large resolution monitors, the Original method of plotting may be too
slow to keep up in real time. High Efficiency plotting mode significantly
improves performance by only plotting the most recently acquired sections
of the waveforms. This feature works only for sweep mode.</source>
        <translation>对于大分辨率监视器，原始打印方法可能太慢，无法实时跟上。
高效绘制模式通过仅绘制波形的最新采集部分，显著提高了性能。
此功能仅适用于扫描模式。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="69"/>
        <source>XPU</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="72"/>
        <source>Write to Disk Latency</source>
        <translation>写入磁盘延迟</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="75"/>
        <source>Plotting Mode</source>
        <translation>绘图模式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="79"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/performanceoptimizationdialog.cpp" line="80"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
</context>
<context>
    <name>PlaybackFilePositionDialog</name>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="33"/>
        <source>Run Immediately After Jump</source>
        <translation>跳过后立即运行</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="36"/>
        <source>Jump To Position</source>
        <translation>跳转到位置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="39"/>
        <source>The playback file contains data from </source>
        <translation>播放文件包含来自的数据</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="39"/>
        <source> to </source>
        <translation> 至 </translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="40"/>
        <source>.</source>
        <translation>。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="42"/>
        <source>(Use Jump to Start button to access times before 00:00:00.)</source>
        <translation>（使用“跳转到开始”按钮可访问00:00:00之前的时间。）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="47"/>
        <source>Jump to</source>
        <translation>跳转到</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="55"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/playbackfilepositiondialog.cpp" line="56"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
</context>
<context>
    <name>ProbeMapWindow</name>
    <message>
        <location filename="GUI/Windows/probemapwindow.cpp" line="18"/>
        <location filename="GUI/Windows/probemapwindow.cpp" line="572"/>
        <source>Probe Map</source>
        <translation>探针图</translation>
    </message>
    <message>
        <location filename="GUI/Windows/probemapwindow.cpp" line="20"/>
        <source>Load Probe Description File</source>
        <translation>加载探测器描述文件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/probemapwindow.cpp" line="22"/>
        <source>&amp;File</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="GUI/Windows/probemapwindow.cpp" line="135"/>
        <source>Display decay time:</source>
        <translation>显示延迟时间：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/probemapwindow.cpp" line="226"/>
        <source>Error: Loading from XML</source>
        <translation>错误：从XML加载</translation>
    </message>
    <message>
        <location filename="GUI/Windows/probemapwindow.cpp" line="229"/>
        <location filename="GUI/Windows/probemapwindow.cpp" line="549"/>
        <source>Warning: Loading from XML</source>
        <translation>警告：从XML加载</translation>
    </message>
    <message>
        <location filename="GUI/Windows/probemapwindow.cpp" line="546"/>
        <source>Error: Loading From XML</source>
        <translation>错误：从XML加载</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="921"/>
        <location filename="Engine/Processing/impedancereader.cpp" line="62"/>
        <location filename="Engine/Processing/impedancereader.cpp" line="556"/>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="261"/>
        <source>Progress</source>
        <translation>进程</translation>
    </message>
    <message>
        <location filename="Engine/Processing/controllerinterface.cpp" line="1026"/>
        <source>Measuring Noise Floor to Calculate Thresholds</source>
        <translation>测量噪声下限以计算阈值</translation>
    </message>
    <message>
        <location filename="Engine/Processing/impedancereader.cpp" line="61"/>
        <location filename="Engine/Processing/impedancereader.cpp" line="555"/>
        <source>Measuring Electrode Impedances</source>
        <translation>测量电极阻抗</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="151"/>
        <source>Configuration File Error: Software Aborting</source>
        <translation>配置文件错误：软件中止</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="152"/>
        <source>Cannot upload configuration file: </source>
        <translation>无法加载配置文件：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/boardselectdialog.cpp" line="153"/>
        <source>.  Make sure file is in the same directory as the executable file.</source>
        <translation>。请确保文件与可执行文件位于同一目录中。</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/controlpanelconfiguretab.cpp" line="260"/>
        <source>Scanning Ports</source>
        <translation>正在扫描端口</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="603"/>
        <source>Checking Input Wave</source>
        <translation>检查输入波形</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="1811"/>
        <source>Testing Chip</source>
        <translation>测试芯片</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="2627"/>
        <source>Uploading Stim Parameters</source>
        <translation>加载刺激参数</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="2640"/>
        <source>Clearing Stim Parameters</source>
        <translation>清除刺激参数</translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="271"/>
        <source>minimum step size (imprecise)</source>
        <translation>最小步长（非精确）</translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="272"/>
        <source> range(10 nA step size)</source>
        <translation> 范围（10nA步长）</translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="273"/>
        <source> range (20 nA step size)</source>
        <translation> 范围（20nA步长）</translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="274"/>
        <source> range (50 nA step size)</source>
        <translation> 范围（50nA步长）</translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="275"/>
        <source> range (0.1 </source>
        <translation> 范围（0.1 </translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="275"/>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="276"/>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="277"/>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="278"/>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="279"/>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="280"/>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="281"/>
        <source> step size)</source>
        <translation> 步长）</translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="276"/>
        <source> range (0.2 </source>
        <translation> 范围（0.2 </translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="277"/>
        <source> range (0.5 </source>
        <translation> 范围（0.5 </translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="278"/>
        <source> range (1 </source>
        <translation> 范围（1 </translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="279"/>
        <source> range (2 </source>
        <translation> 范围（2 </translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="280"/>
        <source>1.275 mA range (5 </source>
        <translation>1.275 mA范围（5 </translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="281"/>
        <source>2.550 mA range (10 </source>
        <translation>2.550 mA范围（10 </translation>
    </message>
    <message>
        <location filename="Engine/API/Hardware/rhxglobals.h" line="282"/>
        <source>maximum step size (imprecise)</source>
        <translation>最大步长（非精确）</translation>
    </message>
</context>
<context>
    <name>ReferenceSelectDialog</name>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="13"/>
        <source>Hardware Reference</source>
        <translation>硬件参考</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="14"/>
        <source>Software Reference: All Enabled Channels on Port</source>
        <translation>软件参考：端口上的所有已启用通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="15"/>
        <source>Software Reference: Custom Channel List</source>
        <translation>软件参考：自定义通道列表</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="66"/>
        <source>Select Reference</source>
        <translation>选择参考</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="70"/>
        <source>Use REF input on headstage as reference.</source>
        <translation>使用headstage的REF输入作为参考。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="72"/>
        <source>Use average of all enabled channels on a headstage port as reference.</source>
        <translation>使用headstage端口上所有已启用通道的平均值作为参考。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="80"/>
        <source>Use single channel or average of multiple channels as reference.  Use Shift and Ctrl to select multiple channels.  Designated channels will be used even if disabled.</source>
        <translation>使用单个通道或多个通道的平均值作为参考。使用Shift和Ctrl键可以选择多个通道。
即使禁用，也将使用指定的通道。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="97"/>
        <source>Use median instead of average for all reference calculations.</source>
        <translation>对所有参考计算使用中值而不是平均值。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="104"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/referenceselectdialog.cpp" line="105"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
</context>
<context>
    <name>RenameChannelDialog</name>
    <message>
        <location filename="GUI/Dialogs/renamechanneldialog.cpp" line="11"/>
        <source>Old channel name: </source>
        <translation>旧通道名称：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/renamechanneldialog.cpp" line="21"/>
        <source>New channel name:</source>
        <translation>新通道名称：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/renamechanneldialog.cpp" line="23"/>
        <source>(16 characters max)</source>
        <translation>（最多16个字符）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/renamechanneldialog.cpp" line="28"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/renamechanneldialog.cpp" line="29"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/renamechanneldialog.cpp" line="41"/>
        <source>Rename Channel</source>
        <translation>重命名通道</translation>
    </message>
</context>
<context>
    <name>SaveToDiskThread</name>
    <message>
        <location filename="Engine/Threads/savetodiskthread.cpp" line="374"/>
        <source>Saving data to </source>
        <translation>将数据保存到</translation>
    </message>
    <message>
        <location filename="Engine/Threads/savetodiskthread.cpp" line="376"/>
        <source> MB/minute.  File size may be reduced by disabling unused inputs.)  Total data saved: </source>
        <translation>MB/分钟。可以通过禁用未使用的输入来减小文件大小。）保存的总数据：</translation>
    </message>
    <message>
        <location filename="Engine/Threads/savetodiskthread.cpp" line="378"/>
        <source> MB.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="Engine/Threads/savetodiskthread.cpp" line="385"/>
        <source>Waiting for logic </source>
        <translation>正在等待逻辑</translation>
    </message>
    <message>
        <location filename="Engine/Threads/savetodiskthread.cpp" line="385"/>
        <source> trigger on </source>
        <translation>触发</translation>
    </message>
</context>
<context>
    <name>ScrollableMessageBoxDialog</name>
    <message>
        <location filename="GUI/Dialogs/scrollablemessageboxdialog.cpp" line="13"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
</context>
<context>
    <name>SetFileFormatDialog</name>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="12"/>
        <source>Select Saved Data File Format</source>
        <translation>选择保存的数据文件格式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="14"/>
        <source>Traditional Intan File Format</source>
        <translation>传统Intan文件格式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="15"/>
        <source>&quot;One File Per Signal Type&quot; Format</source>
        <translation>“每种信号类型一个文件”格式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="16"/>
        <source>&quot;One File Per Channel&quot; Format</source>
        <translation>“每个通道一个文件”格式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="29"/>
        <source>Create new save directory with timestamp for each recording (recommended)</source>
        <translation>为每个录制创建带有时间戳的新保存目录（推荐）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="32"/>
        <source>Save Auxiliary Inputs (Accelerometers) in Wideband Amplifier Data File</source>
        <translation>将辅助输入（加速度计）保存在宽带放大器数据文件中</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="34"/>
        <source>Save Wideband Amplifier Waveforms</source>
        <translation>保存宽带放大器波形</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="35"/>
        <source>Save Lowpass Amplifier Waveforms</source>
        <translation>保存低通放大器波形</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="36"/>
        <source>Save Highpass Amplifier Waveforms</source>
        <translation>保存高通放大器波形</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="37"/>
        <source>Save Spike Events</source>
        <translation>保存尖峰活动</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="38"/>
        <source>Save Snapshots</source>
        <translation>保存快照</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="46"/>
        <source>from</source>
        <translation>来自</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="47"/>
        <source>to</source>
        <translation>到</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="50"/>
        <source>Save DC Amplifier Waveforms</source>
        <translation>保存直流放大器波形</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="62"/>
        <source>Downsample:</source>
        <translation>下采样：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="66"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="67"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="72"/>
        <source>Start new file every</source>
        <translation>每隔启动一个新文件</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="74"/>
        <source>minutes</source>
        <translation>分钟</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="79"/>
        <source>This option saves all waveforms in one file, along with records of sampling rate,
amplifier bandwidth, channel names, etc.  To keep individual file size reasonable, a
new file is created every N minutes.  These *.</source>
        <translation>此选项将所有波形以及采样率、放大器带宽、通道名称等记录保存在一个文件中。
为了保持单个文件的大小合理，每N分钟创建一个新文件。这些*.</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="82"/>
        <source> data files may be read into
MATLAB or Python using code provided on the Intan web site.</source>
        <translation>可以使用Intan网站上提供的代码将数据文件读取到MATLAB或Python中。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="85"/>
        <source>&lt;b&gt;Note:&lt;/b&gt; This file format does not support saving lowpass, highpass, or  spike data.</source>
        <translation>注意：此文件格式不支持保存低通、高通或尖峰数据。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="90"/>
        <source>This option creates a subdirectory and saves raw data files for each signal type:
amplifiers and controller analog and digital I/O. For example, the amplifier.dat file
contains waveform data from all enabled amplifier channels.  The time.dat file
contains the timestamp vector, and an info.rhs file contains records of sampling
rate, amplifier bandwidth, channel names, etc.</source>
        <translation>“此选项创建一个子目录并保存每种信号类型的原始数据文件：放大器和控制器模拟和数字I/O。
例如，amplifier.dat文件包含所有启用放大器通道的波形数据。
time.dat文件包括时间戳矢量，info.rhs文件包含采样率、放大器带宽、通道名称等记录。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="96"/>
        <source>This option creates a subdirectory and saves raw data files for each signal type:
amplifiers, auxiliary inputs, supply voltages, and controller analog and digital
inputs. For example, the amplifier.dat file contains waveform data from all enabled
amplifier channels.  The time.dat file contains the timestamp vector, and an
info.rhd file contains records of sampling rate, amplifier bandwidth, channel names,
etc.</source>
        <translation>此选项创建一个子目录并保存每种信号类型的原始数据文件：放大器、辅助输入、电源电压以及控制器模拟和数字输入。
例如，amplifier.dat文件包含来自所有启用放大器通道的波形数据。
time.dat文件包含时间戳矢量，info.rhd文件包含采样率、放大器带宽、通道名称等记录。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="103"/>
        <source>These raw data files are compatible with the NeuroScope software package.</source>
        <translation>这些原始数据文件与NeuroScope软件包兼容。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="105"/>
        <source>This option creates a subdirectory and saves each enabled waveform in its own
raw data file.  The subdirectory also contains a time.dat file containing a timestamp
vector, and an info.</source>
        <translation>此选项创建一个子目录，并将每个启用的波形保存在其自己的原始数据文件中。
该子目录还包含一个time.dat文件，该文件包含一个时间戳矢量和一个信息。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="107"/>
        <source> file containing records of sampling rate, amplifier
bandwidth, channel names, etc.</source>
        <translation>包含采样率、放大器带宽、通道名称等记录的文件。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="151"/>
        <source>To minimize the disk space required for data files, disable all unused channels.</source>
        <translation>要最大限度地减少数据文件所需的磁盘空间，请禁用所有未使用的通道。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="154"/>
        <source>For detailed information on file formats, see &lt;b&gt;</source>
        <translation>有关文件格式的详细信息，请参阅</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setfileformatdialog.cpp" line="155"/>
        <source> data file formats&lt;/b&gt;, available at &lt;br&gt; &lt;i&gt;www.intantech.com/downloads&lt;/i&gt;</source>
        <translation>数据文件格式，可在www.intatech.com/downloads上获得</translation>
    </message>
</context>
<context>
    <name>SetThresholdsDialog</name>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="9"/>
        <source>Absolute Threshold</source>
        <translation>绝对阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="10"/>
        <source>Relative Threshold</source>
        <translation>相对阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="28"/>
        <source>Positive</source>
        <translation>阳性的</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="29"/>
        <source>Negative</source>
        <translation>阴性的</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="41"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="42"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="52"/>
        <source>Set all spike detection thresholds to a specified level.</source>
        <translation>将所有尖峰检测阈值设置为指定级别。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="62"/>
        <source>Set spike detection thresholds to a multiple of the RMS level on each channel.</source>
        <translation>在每个通道上将尖峰检测阈值设置为RMS电平的倍数。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="75"/>
        <source>Disabled channels will be unaffected.  This operation cannot be undone.</source>
        <translation>禁用的通道将不受影响。此操作无法撤消。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/setthresholdsdialog.cpp" line="79"/>
        <source>Set Spike Detection Thresholds</source>
        <translation>设置尖峰检测阈值</translation>
    </message>
</context>
<context>
    <name>SimpleBandwidthDialog</name>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="12"/>
        <source>Low Frequency Bandwidth</source>
        <translation>低频带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="13"/>
        <source>High Frequency Bandwidth</source>
        <translation>高频带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="21"/>
        <source>Lower Bandwidth Range: 0.1 Hz to 500 Hz.</source>
        <translation>较低带宽范围：0.1 Hz至500 Hz。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="22"/>
        <source>Upper Bandwidth Range: 100 Hz to 20 kHz.</source>
        <translation>上限带宽范围：100 HZ至20 kHZ。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="26"/>
        <source>Warning: Nyquist frequency violation (sample rate = </source>
        <translation>警告：违反奈奎斯特频率（采样率=</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="46"/>
        <source>Amplifier Lower Bandwidth</source>
        <translation>放大器较低带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="48"/>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="53"/>
        <source>Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="51"/>
        <source>Amplifier Upper Bandwidth</source>
        <translation>放大器上限带宽</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="66"/>
        <source>Headstage filter parameters will be set to the closest achievable values.</source>
        <translation>headstage滤波器参数将设置为最接近的可实现值。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="70"/>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="92"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="71"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/bandwidthdialog.cpp" line="83"/>
        <source>Select Amplifier Bandwidth</source>
        <translation>选择放大器带宽</translation>
    </message>
</context>
<context>
    <name>SpectrogramDialog</name>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="15"/>
        <source>Lock Plot to Selected</source>
        <translation>将绘图锁定到选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="18"/>
        <source>Set to Selected</source>
        <translation>设置为选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="28"/>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="336"/>
        <source> ms</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="29"/>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="337"/>
        <source> Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="43"/>
        <source>Marker</source>
        <translation>标记</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="50"/>
        <source>Show Marker</source>
        <translation>显示标记</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="53"/>
        <source>Show</source>
        <translation>显示</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="54"/>
        <source>Harmonics</source>
        <translation>谐波</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="59"/>
        <source>Time Scale</source>
        <translation>时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="68"/>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="71"/>
        <source>Save Data</source>
        <translation>保存数据</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="90"/>
        <source>Channel</source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="93"/>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="406"/>
        <source>Spectrogram</source>
        <translation>光谱图</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="94"/>
        <source>Spectrum</source>
        <translation>谱</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="104"/>
        <source>Display Mode</source>
        <translation>显示模式</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="109"/>
        <source>t:</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="112"/>
        <source>f:</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="116"/>
        <source>Max Freq</source>
        <translation>最大频率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="121"/>
        <source>Min Freq</source>
        <translation>最小频率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="144"/>
        <source>Time/Frequency Resolution</source>
        <translation>时间/频率分辨率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="153"/>
        <source>Frequency Scale</source>
        <translation>频率刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="159"/>
        <source>Digital Signal Display</source>
        <translation>数字信号显示器</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="222"/>
        <source>N/A</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="382"/>
        <source>Save Data As</source>
        <translation>数据另存为</translation>
    </message>
</context>
<context>
    <name>SpectrogramSaveConfigDialog</name>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="414"/>
        <source>Select the file types to be created when data is saved.  Multiple file types may be selected.</source>
        <translation>选择保存数据时要创建的文件类型。可以选择多种文件类型。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="417"/>
        <source>MATLAB MAT-File Data File (can be read into Python using scipy.io.loadmat)</source>
        <translation>MATLAB MAT文件数据文件（可以使用scipy.io.loadmat读取到Python中）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="418"/>
        <source>CSV Text File (can be read into spreadsheet software)</source>
        <translation>CSV文本文件（可读入电子表格软件）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="419"/>
        <source>PNG Screen Capture</source>
        <translation>PNG屏幕捕获</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="426"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="427"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spectrogramdialog.cpp" line="443"/>
        <source>Spectrogram Save Data Configuration</source>
        <translation>光谱图保存数据配置</translation>
    </message>
</context>
<context>
    <name>SpikeGradient</name>
    <message>
        <location filename="GUI/Widgets/spikegradient.cpp" line="75"/>
        <source>Time Since Last Spike</source>
        <translation>自上次峰值以来的时间</translation>
    </message>
</context>
<context>
    <name>SpikeSortingDialog</name>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="16"/>
        <source>Lock Plot to Selected</source>
        <translation>将绘图锁定到选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="19"/>
        <source>Set to Selected</source>
        <translation>设置为选定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="38"/>
        <source>Clear Scope</source>
        <translation>清除范围</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="41"/>
        <source>Take Snapshot</source>
        <translation>获取快照</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="44"/>
        <source>Clear Snapshot</source>
        <translation>清除快照</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="47"/>
        <source>Artifact Suppression</source>
        <translation>伪影抑制</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="49"/>
        <source>Enable Suppression</source>
        <translation>启用抑制</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="52"/>
        <source>Show Artifacts</source>
        <translation>显示伪影</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="55"/>
        <source>Artifact Threshold</source>
        <translation>伪影阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="127"/>
        <source>Load Detection Parameters</source>
        <translation>负载检测参数</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="130"/>
        <source>Save Detection Parameters</source>
        <translation>保存检测参数</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="149"/>
        <source>Channel</source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="153"/>
        <source>Detection Threshold</source>
        <translation>检测阈值</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="159"/>
        <source>Spike Detection Settings</source>
        <translation>尖峰检测设置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="163"/>
        <source>Voltage Scale</source>
        <translation>电压刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="168"/>
        <source>Time Scale</source>
        <translation>时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="173"/>
        <source>Show</source>
        <translation>显示</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="175"/>
        <source>spikes</source>
        <translation>尖刺</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="188"/>
        <source>Display Settings</source>
        <translation>显示设置</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="253"/>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="370"/>
        <source>Error: Loading from XML</source>
        <translation>错误：从XML加载</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="256"/>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="373"/>
        <source>Warning: Loading from XML</source>
        <translation>警告：从XML加载</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="280"/>
        <source>N/A</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/spikesortingdialog.cpp" line="413"/>
        <source>Spike Scope</source>
        <translation>尖峰范围</translation>
    </message>
</context>
<context>
    <name>StartupDialog</name>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="18"/>
        <source>Sample Rate / Stimulation Time Resolution</source>
        <translation>采样率/刺激时间分辨率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="19"/>
        <source>20 kHz sample rate (50 </source>
        <translation>20 kHz采样率（50</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="19"/>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="20"/>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="21"/>
        <source> stimulation time resolution)</source>
        <translation>刺激时间分辨率）</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="20"/>
        <source>25 kHz sample rate (40 </source>
        <translation>25 kHz采样率（40</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="21"/>
        <source>30 kHz sample rate (33.3 </source>
        <translation>30 kHz采样率（33.3</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="24"/>
        <source>1.00 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="25"/>
        <source>1.25 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="26"/>
        <source>1.50 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="27"/>
        <source>2.00 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="28"/>
        <source>2.50 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="29"/>
        <source>3.00 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="30"/>
        <source>3.33 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="31"/>
        <source>4.00 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="32"/>
        <source>5.00 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="33"/>
        <source>6.25 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="34"/>
        <source>8.00 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="35"/>
        <source>10.0 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="36"/>
        <source>12.5 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="37"/>
        <source>15.0 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="38"/>
        <source>20.0 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="39"/>
        <source>25.0 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="40"/>
        <source>30.0 kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="45"/>
        <source>Sample Rate</source>
        <translation>采样率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="55"/>
        <source>Stimulation Range / Step Size</source>
        <translation>刺激范围/步长</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="70"/>
        <source>Stimulation Range</source>
        <translation>刺激范围</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="81"/>
        <source>Always use these settings with </source>
        <translation>始终将这些设置与一起使用</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="83"/>
        <source>Always use this sample rate with </source>
        <translation>始终使用此采样率</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="88"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/startupdialog.cpp" line="104"/>
        <source>Select Sample Rate</source>
        <translation>选择采样率</translation>
    </message>
</context>
<context>
    <name>StimParamDialog</name>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="17"/>
        <source>Stimulation Waveform</source>
        <translation>刺激波形</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="19"/>
        <source>Stimulation Shape:</source>
        <translation>刺激形状：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="22"/>
        <source>Biphasic</source>
        <translation>双相的</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="22"/>
        <source>Biphasic with Delay</source>
        <translation>具有延迟的双相</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="22"/>
        <source>Triphasic</source>
        <translation>Triphasic</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="25"/>
        <source>Stimulation Polarity:</source>
        <translation>刺激极性：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="28"/>
        <source>Cathodic Current First</source>
        <translation>阴极电流优先</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="28"/>
        <source>Anodic Current First</source>
        <translation>阳极电流优先</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="31"/>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="646"/>
        <source>First Phase Duration (D1):</source>
        <translation>第一阶段持续时间（D1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="36"/>
        <source>Second Phase Duration (D2):</source>
        <translation>第二阶段持续时间（D2）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="40"/>
        <source>Interphase Delay (DP):</source>
        <translation>相间延迟（DP）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="44"/>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="647"/>
        <source>First Phase Amplitude (A1):</source>
        <translation>第一相位振幅（A1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="48"/>
        <source>Second Phase Amplitude (A2):</source>
        <translation>第二相振幅（A2）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="54"/>
        <source>Charge Balance Placeholder</source>
        <translation>电荷平衡占位符</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="58"/>
        <source>Trigger</source>
        <translation>触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="60"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="62"/>
        <source>Trigger Source:</source>
        <translation>触发源：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="74"/>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="80"/>
        <source> </source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="77"/>
        <source>Edge Triggered</source>
        <translation>边缘触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="77"/>
        <source>Level Triggered</source>
        <translation>电平触发</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="83"/>
        <source>Trigger on High</source>
        <translation>触发器处于高位</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="83"/>
        <source>Trigger on Low</source>
        <translation>触发器处于低位</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="86"/>
        <source>Post Trigger Delay:</source>
        <translation>触发后延迟：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="91"/>
        <source>Pulse Train</source>
        <translation>脉冲串</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="93"/>
        <source>Pulse Repetition:</source>
        <translation>脉冲重复：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="96"/>
        <source>Single Stim Pulse</source>
        <translation>单次刺激脉冲</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="96"/>
        <source>Stim Pulse Train</source>
        <translation>刺激脉冲序列</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="99"/>
        <source>Number of Stim Pulses</source>
        <translation>刺激脉冲数</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="104"/>
        <source>Pulse Train Period:</source>
        <translation>脉冲串周期：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="110"/>
        <source>Post-Stim Refractory Period:</source>
        <translation>刺激后不应期：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="115"/>
        <source>Amp Settle</source>
        <translation>电流沉降</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="117"/>
        <source>Pre Stim Amp Settle:</source>
        <translation>预刺激放大器设置：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="121"/>
        <source>Post Stim Amp Settle:</source>
        <translation>刺激后放大器设置：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="125"/>
        <source>Maintain amp settle during pulse train</source>
        <translation>在脉冲串期间保持电流稳定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="127"/>
        <source>Enable Amp Settle</source>
        <translation>启用电流沉降</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="130"/>
        <source>Charge Recovery</source>
        <translation>电荷恢复</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="132"/>
        <source>Post Stim Charge Recovery On:</source>
        <translation>刺激后电荷恢复开启：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="136"/>
        <source>Post Stim Charge Recovery Off:</source>
        <translation>刺激后充电恢复关闭：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="140"/>
        <source>Enable Charge Recovery</source>
        <translation>启用电荷恢复</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="143"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="144"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="649"/>
        <source>First/Third Phase Duration (D1):</source>
        <translation>第一/第三阶段持续时间（D1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="650"/>
        <source>First/Third Phase Amplitude (A1):</source>
        <translation>第一/第三相位振幅（A1）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="692"/>
        <source>Total positive charge injected per pulse: </source>
        <translation>每个脉冲注入的总正电荷：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="693"/>
        <source>Total negative charge injected per pulse: </source>
        <translation>每个脉冲注入的总负电荷：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/stimparamdialog.cpp" line="714"/>
        <source>Pulse Train Frequency: </source>
        <translation>脉冲串频率：</translation>
    </message>
</context>
<context>
    <name>SystemState</name>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="123"/>
        <source>Highest</source>
        <translation>最高</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="124"/>
        <source>High</source>
        <translation>高</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="125"/>
        <source>Medium</source>
        <translation>中等</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="126"/>
        <source>Low</source>
        <translation>低</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="127"/>
        <source>Lowest</source>
        <translation>最低</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="320"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="384"/>
        <source>Arrange by Channel</source>
        <translation>按通道排列</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="385"/>
        <source>Arrange by Filter</source>
        <translation>按过滤器排列</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="395"/>
        <source>Original</source>
        <translation>原始的</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="396"/>
        <source>High Efficiency</source>
        <translation>高效率</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="523"/>
        <source>Custom Name</source>
        <translation>自定义名称</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="524"/>
        <source>Native Name</source>
        <translation>本地名称</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="525"/>
        <source>Impedance Magnitude</source>
        <translation>阻抗幅值</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="526"/>
        <source>Impedance Phase</source>
        <translation>阻抗相位</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="527"/>
        <source>Reference</source>
        <translation>参考</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="531"/>
        <source>Hide Tags</source>
        <translation>隐藏标记</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="532"/>
        <source>Narrow Tags</source>
        <translation>窄标签</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="533"/>
        <source>Wide Tags</source>
        <translation>宽标签</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="620"/>
        <source>Rising Edge</source>
        <translation>上升沿触发</translation>
    </message>
    <message>
        <location filename="Engine/Processing/systemstate.cpp" line="621"/>
        <source>Falling Edge</source>
        <translation>下降沿触发</translation>
    </message>
</context>
<context>
    <name>TCPDisplay</name>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="47"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="50"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="53"/>
        <source>Connect</source>
        <translation>连接</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="64"/>
        <source>Add Selected</source>
        <translation>添加选择的</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="68"/>
        <source>Add All</source>
        <translation>添加所有</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="71"/>
        <source>Type of data to stream
(Only applies to
amplifier channels)</source>
        <translation>要流式传输的数据类型
（仅适用于放大器通道）</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="84"/>
        <source>Remove Selected</source>
        <translation>移除选定对象</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="88"/>
        <source>Remove All</source>
        <translation>移除全部</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="99"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="102"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="105"/>
        <source>Disconnect</source>
        <translation>断开</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="108"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="110"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="343"/>
        <source>Disconnected</source>
        <translation>断开的</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="114"/>
        <source>Clear Commands</source>
        <translation>清除命令</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="119"/>
        <source>Clear Errors</source>
        <translation>清除错误</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="122"/>
        <source>DataRateStatus</source>
        <translation>DataRateStatus</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="125"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="131"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="142"/>
        <source>Host</source>
        <translation>主机</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="127"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="133"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="144"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="138"/>
        <source>Waveform Output</source>
        <translation>波形输出</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="149"/>
        <source>Spike Output</source>
        <translation>尖峰输出</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="155"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="160"/>
        <source>Status:</source>
        <translation>状态：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="177"/>
        <source>Received Commands:</source>
        <translation>收到的命令：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="182"/>
        <source>Errors:</source>
        <translation>错误：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="198"/>
        <source>Present Channels:</source>
        <translation>现有通道：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="214"/>
        <source>Channels To Stream:</source>
        <translation>要流式传输的通道：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="232"/>
        <source>Commands</source>
        <translation>命令</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="233"/>
        <source>Data Output</source>
        <translation>数据输出</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="333"/>
        <source>Connected</source>
        <translation>连接</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="338"/>
        <source>Pending</source>
        <translation>待定</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="356"/>
        <source>Both Ports Connected</source>
        <translation>两个端口都已连接</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="366"/>
        <source>Both Ports Disconnected</source>
        <translation>两个端口都已断开连接</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="376"/>
        <source>Both Ports Pending</source>
        <translation>两个端口都挂起</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="386"/>
        <source>Waveform Port Connected, Spike Port Disconnected</source>
        <translation>波形端口已连接，尖峰端口已断开</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="396"/>
        <source>Waveform Port Disconnected, Spike Port Connected</source>
        <translation>波形端口断开，尖峰端口连接</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="406"/>
        <source>Waveform Port Connected, Spike Port Pending</source>
        <translation>波形端口已连接，尖峰端口挂起</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="416"/>
        <source>Waveform Port Pending, Spike Port Connected</source>
        <translation>波形端口挂起，尖峰端口已连接</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="426"/>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="436"/>
        <source>Waveform Port Pending, Spike Port Disconnected</source>
        <translation>波形端口挂起，尖峰端口断开</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="451"/>
        <source>No TCP connection to stream data over</source>
        <translation>没有TCP连接通过</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="453"/>
        <source>Ready to stream data when board runs</source>
        <translation>板运行时准备好流式传输数据</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="456"/>
        <source> channels </source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="458"/>
        <source> channel </source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="459"/>
        <source>Streaming </source>
        <translation>数据流</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="459"/>
        <source> at </source>
        <translation>以</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/tcpdisplay.cpp" line="459"/>
        <source> kS/s</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>TestControlPanel</name>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="101"/>
        <source>Check Input Waveform</source>
        <translation>检查输入波形</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="126"/>
        <source>Measured Frequency:</source>
        <translation>测量频率：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="137"/>
        <source>Measured Amplitude:</source>
        <translation>测量振幅：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="156"/>
        <source>Test Chip</source>
        <translation>测试芯片</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="165"/>
        <source>Triangle Waveform RMS Error Threshold:</source>
        <translation>三角波形RMS误差阈值：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="202"/>
        <source>View Report</source>
        <translation>查看报告</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="206"/>
        <source>Save Report</source>
        <translation>保存报告</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="235"/>
        <source>Chip Testing</source>
        <translation>芯片测试</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="241"/>
        <source>Name:</source>
        <translation>名字：</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="242"/>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="443"/>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="445"/>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="448"/>
        <source>no selection</source>
        <translation>没有选定</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="244"/>
        <source>Upload Test Stim Parameters</source>
        <translation>上传测试刺激参数</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="262"/>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="372"/>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="435"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="452"/>
        <source>Rename</source>
        <translation>重命名</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="457"/>
        <source>Set Ref</source>
        <translation>设置参考</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="463"/>
        <source>Set Stim</source>
        <translation>设置刺激</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="497"/>
        <source>Clip Waves</source>
        <translation>剪裁波形</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="503"/>
        <source>Time Scale</source>
        <translation>时间刻度</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="530"/>
        <source>WIDE</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="533"/>
        <source>DC</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="604"/>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="1812"/>
        <source>Progress</source>
        <translation>进程</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="2587"/>
        <source>Save Report Data As</source>
        <translation>将报告数据另存为</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/testcontrolpanel.cpp" line="2588"/>
        <source>CSV (Comma delimited) (*.csv)</source>
        <translation>CSV（逗号分隔）（*.CSV）</translation>
    </message>
</context>
<context>
    <name>TriggerRecordDialog</name>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="12"/>
        <source>Episodic Triggered Recording Control</source>
        <translation>情节触发的录制控制</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="14"/>
        <source>Digital or analog inputs lines may be used to trigger recording.</source>
        <translation>数字或模拟输入线可用于触发记录。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="31"/>
        <source>Automatically Save Trigger Channel</source>
        <translation>自动保存触发通道</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="47"/>
        <source>Trigger Source</source>
        <translation>触发源</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="58"/>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="83"/>
        <source>seconds</source>
        <translation>秒</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="61"/>
        <source>If a pretrigger buffer size of N seconds is selected, slightly more than N seconds of pretrigger data will be saved to disk when a trigger is detected, assuming that data acquisition has been running for at least N seconds.</source>
        <translation>如果选择了N秒的预触发缓冲区大小，则假设数据采集已运行至少N秒，当检测到触发时，将略多于N秒的预先触发数据保存到磁盘。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="68"/>
        <source>Pretrigger data saved (range: 1-30 seconds):</source>
        <translation>预触发数据已保存（范围：1-30秒）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="72"/>
        <source>Pretrigger Buffer</source>
        <translation>预触发缓冲区</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="86"/>
        <source>If a posttrigger time of M seconds is selected, slightly more than M seconds of data will be saved to disk after the trigger is de-asserted.</source>
        <translation>如果选择了M秒的触发后时间，则在取消断言触发后，将略多于M秒的数据保存到磁盘。</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="92"/>
        <source>Posttrigger data saved (range: 1-9999 seconds):</source>
        <translation>保存触发后数据（范围：1-999秒）：</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="96"/>
        <source>Posttrigger Buffer</source>
        <translation>后触发缓冲区</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="103"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="104"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/triggerrecorddialog.cpp" line="108"/>
        <source>Press OK to start triggered recording with selected settings.  Waveforms will be displayed in real time, but recording will not start until the trigger is detected.  A tone will indicate when the trigger has been detected.  A different tone indicates that recording has stopped after a trigger has been de-asserted.  Successive trigger events will create new saved data files.  Press the Stop button to exit triggered recording mode.</source>
        <translation>按“确定”可使用所选设置开始触发录制。波形将实时显示，但在检测到触发之前不会开始记录。当检测到触发器时，将发出提示音。不同的音调表示在触发器被取消断言之后记录已经停止。连续的触发事件将创建新的已保存数据文件。按下停止按钮退出触发的录制模式。</translation>
    </message>
</context>
<context>
    <name>ViewFiltersWindow</name>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="10"/>
        <source>Logarithmic</source>
        <translation>对数的</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="11"/>
        <source>Linear</source>
        <translation>线性的</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="25"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="36"/>
        <source>Frequency Axis:</source>
        <translation>频率轴：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="43"/>
        <source>Hardware Filter Settings</source>
        <translation>硬件滤波器设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="47"/>
        <source>On-Chip DSP High Pass Cutoff:</source>
        <translation>片上DSP高通截止：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="52"/>
        <source>Analog Lower Cutoff:</source>
        <translation>模拟下限截止：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="57"/>
        <source>Analog Upper Cutoff:</source>
        <translation>模拟上限截止：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="67"/>
        <source>Software Filter Settings</source>
        <translation>软件滤波器设置</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="71"/>
        <source>Notch Filter:</source>
        <translation>陷波滤波器：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="76"/>
        <source>Low Pass Filter (LFP Band):</source>
        <translation>低通滤波器（LFP频带）：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="81"/>
        <source>High Pass Filter (Spike Band):</source>
        <translation>高通滤波器（尖峰频带）：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="102"/>
        <source>Normalized Frequency Response</source>
        <translation>归一化频率响应</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="130"/>
        <source> (enabled)</source>
        <translation>（已启用）</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="131"/>
        <source>disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="146"/>
        <source> kHz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="147"/>
        <source> kS/s</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="149"/>
        <source> Hz</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="150"/>
        <source> S/s</source>
        <translation></translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="163"/>
        <source>Frequency: </source>
        <translation>频率：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="164"/>
        <source>.  Wide Band Normalized Gain: </source>
        <translation>。宽带归一化增益：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="165"/>
        <source>.  Low Pass Normalized Gain: </source>
        <translation>。低通归一化增益：</translation>
    </message>
    <message>
        <location filename="GUI/Windows/viewfilterswindow.cpp" line="166"/>
        <source>.  High Pass Normalized Gain: </source>
        <translation>。高通归一化增益：</translation>
    </message>
</context>
<context>
    <name>WaveformDisplayColumn</name>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="33"/>
        <source>Hide Column</source>
        <translation>隐藏列</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="38"/>
        <source>Unhide Column</source>
        <translation>取消隐藏列</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="44"/>
        <source>Move Column Left</source>
        <translation>向左移动列</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="49"/>
        <source>Move Column Right</source>
        <translation>向右移动列</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="54"/>
        <source>Add Column</source>
        <translation>添加列</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="59"/>
        <source>Delete Column</source>
        <translation>删除列</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="68"/>
        <source>Add Pinned Waveform</source>
        <translation>添加固定波形</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="71"/>
        <source>show pinned</source>
        <translation>显示固定</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="78"/>
        <source>Less Spacing</source>
        <translation>更小间距</translation>
    </message>
    <message>
        <location filename="GUI/Widgets/waveformdisplaycolumn.cpp" line="83"/>
        <source>More Spacing</source>
        <translation>更多间距</translation>
    </message>
</context>
<context>
    <name>WaveformSelectDialog</name>
    <message>
        <location filename="GUI/Dialogs/waveformselectdialog.cpp" line="45"/>
        <source>Select Waveform</source>
        <translation>选择波形</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/waveformselectdialog.cpp" line="63"/>
        <source>Headstage Signals</source>
        <translation>headstage信号</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/waveformselectdialog.cpp" line="64"/>
        <source>Controller I/O</source>
        <translation>控制器I/O</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/waveformselectdialog.cpp" line="67"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="GUI/Dialogs/waveformselectdialog.cpp" line="68"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
</context>
</TS>
