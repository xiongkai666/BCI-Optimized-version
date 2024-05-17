
#include "viewfilterswindow.h"

ViewFiltersWindow::ViewFiltersWindow(SystemState* state_, QWidget *parent) :
    QMainWindow(parent),
    state(state_)
{    
    filterPlot = new FilterPlot(state, this);

    logarithmicButton = new QRadioButton(tr("Logarithmic"), this);
    linearButton = new QRadioButton(tr("Linear"), this);
    logarithmicButton->setChecked(true);

    hardwareLowCutoffLabel = new QLabel("", this);
    hardwareHighCutoffLabel = new QLabel("", this);
    hardwareDSPLabel = new QLabel("", this);

    softwareNotchLabel = new QLabel("", this);
    softwareLowPassLabel = new QLabel("", this);
    softwareHighPassLabel = new QLabel("", this);

    updateFilterParameterText();

    buttonBox = new QDialogButtonBox(QDialogButtonBox::Close);
    buttonBox->button(QDialogButtonBox::Cancel)->setText(tr("Close"));
    connect(buttonBox, SIGNAL(rejected()), this, SLOT(close()));

    statusBarLabel = new QLabel(tr(""), this);
    statusBar()->addWidget(statusBarLabel, 1);
    statusBar()->setSizeGripEnabled(false);

    QVBoxLayout *mainLayout = new QVBoxLayout;
    mainLayout->addWidget(filterPlot);

    QHBoxLayout *plotViewRow = new QHBoxLayout;
    plotViewRow->addWidget(new QLabel(tr("Frequency Axis:"), this));
    plotViewRow->addWidget(logarithmicButton);
    plotViewRow->addWidget(linearButton);
    plotViewRow->addStretch();

    mainLayout->addLayout(plotViewRow);

    QGroupBox *hardwareBandwidthSettings = new QGroupBox(tr("Hardware Filter Settings"), this);
    QVBoxLayout *globalFilterLayout = new QVBoxLayout;

    QHBoxLayout *hardwareDSPRow = new QHBoxLayout;
    hardwareDSPRow->addWidget(new QLabel(tr("On-Chip DSP High Pass Cutoff:"), this));
    hardwareDSPRow->addWidget(hardwareDSPLabel);
    hardwareDSPRow->addStretch(1);

    QHBoxLayout *hardwareLowCutoffRow = new QHBoxLayout;
    hardwareLowCutoffRow->addWidget(new QLabel(tr("Analog Lower Cutoff:"), this));
    hardwareLowCutoffRow->addWidget(hardwareLowCutoffLabel);
    hardwareLowCutoffRow->addStretch(1);

    QHBoxLayout *hardwareHighCutoffRow = new QHBoxLayout;
    hardwareHighCutoffRow->addWidget(new QLabel(tr("Analog Upper Cutoff:"), this));
    hardwareHighCutoffRow->addWidget(hardwareHighCutoffLabel);
    hardwareHighCutoffRow->addStretch(1);

    globalFilterLayout->addLayout(hardwareDSPRow);
    globalFilterLayout->addLayout(hardwareLowCutoffRow);
    globalFilterLayout->addLayout(hardwareHighCutoffRow);
    globalFilterLayout->addStretch(1);
    hardwareBandwidthSettings->setLayout(globalFilterLayout);

    QGroupBox *softwareBandwidthSettings = new QGroupBox(tr("Software Filter Settings"), this);
    QVBoxLayout *softwareFilterLayout = new QVBoxLayout;

    QHBoxLayout *softwareNotchRow = new QHBoxLayout;
    softwareNotchRow->addWidget(new QLabel(tr("Notch Filter:"), this));
    softwareNotchRow->addWidget(softwareNotchLabel);
    softwareNotchRow->addStretch(1);

    QHBoxLayout *softwareLowPassRow = new QHBoxLayout;
    softwareLowPassRow->addWidget(new QLabel(tr("Low Pass Filter (LFP Band):"), this));
    softwareLowPassRow->addWidget(softwareLowPassLabel);
    softwareLowPassRow->addStretch(1);

    QHBoxLayout *softwareHighPassRow = new QHBoxLayout;
    softwareHighPassRow->addWidget(new QLabel(tr("High Pass Filter (Spike Band):"), this));
    softwareHighPassRow->addWidget(softwareHighPassLabel);
    softwareHighPassRow->addStretch(1);

    softwareFilterLayout->addLayout(softwareNotchRow);
    softwareFilterLayout->addLayout(softwareLowPassRow);
    softwareFilterLayout->addLayout(softwareHighPassRow);
    softwareFilterLayout->addStretch(1);
    softwareBandwidthSettings->setLayout(softwareFilterLayout);

    QHBoxLayout *bandwidthSettings = new QHBoxLayout;
    bandwidthSettings->addWidget(hardwareBandwidthSettings);
    bandwidthSettings->addWidget(softwareBandwidthSettings);

    mainLayout->addLayout(bandwidthSettings);
    mainLayout->addWidget(buttonBox);

    QWidget *mainWidget = new QWidget;
    mainWidget->setLayout(mainLayout);
    setCentralWidget(mainWidget);

    setWindowTitle(tr("Normalized Frequency Response"));

    connect(logarithmicButton, SIGNAL(toggled(bool)), this, SLOT(toggleLogarithmic(bool)));

    connect(filterPlot, SIGNAL(mouseMovedInPlot(double, double, double, double)),
            this, SLOT(updateStatusBar(double, double, double, double)));
    connect(filterPlot, SIGNAL(mouseLeftPlot()), this, SLOT(clearStatusBar()));
    connect(state, SIGNAL(stateChanged()), this, SLOT(updateFromState()));

    adjustSize();
    setFixedSize(sizeHint());
}

ViewFiltersWindow::~ViewFiltersWindow()
{
    delete filterPlot;
}

void ViewFiltersWindow::updateFromState()
{
    updateFilterParameterText();
}

void ViewFiltersWindow::updateFilterParameterText()
{
    hardwareLowCutoffLabel->setText(freqAsString(state->actualLowerBandwidth->getValue()));
    hardwareHighCutoffLabel->setText(freqAsString(state->actualUpperBandwidth->getValue()));
    hardwareDSPLabel->setText(state->dspEnabled->getValue() ?
                                  freqAsString(state->actualDspCutoffFreq->getValue()) + tr(" (enabled)") :
                                  tr("disabled"));

    softwareNotchLabel->setText(state->notchFreq->getDisplayValueString());
    QString filterText;
    filterText = ordinalNumberString(state->lowOrder->getValue()) + "-order " + state->lowType->getDisplayValueString();
    filterText += " filter at " + freqAsString(state->lowSWCutoffFreq->getValue() , true);
    softwareLowPassLabel->setText(filterText);
    filterText = ordinalNumberString(state->highOrder->getValue()) + "-order " + state->highType->getDisplayValueString();
    filterText += " filter at " + freqAsString(state->highSWCutoffFreq->getValue() , true);
    softwareHighPassLabel->setText(filterText);
}

QString ViewFiltersWindow::freqAsString(double frequency, bool hz)
{
    if (frequency >= 1000) {
        if (hz) return (QString::number((frequency / 1000.0), 'f', 2)) + tr(" kHz");
        else return (QString::number((frequency / 1000.0), 'f', 2)) + tr(" kS/s");
    } else {
        if (hz) return (QString::number(frequency, 'f', 2)) + tr(" Hz");
        else return (QString::number(frequency, 'f', 2)) + tr(" S/s");
    }
}

// Toggle whether or not the composite filter should be drawn.
void ViewFiltersWindow::toggleLogarithmic(bool log)
{
    filterPlot->toggleLogarithmic(log);
}

// Update status bar message to display the given frequency and normalizedGain.
void ViewFiltersWindow::updateStatusBar(double frequency, double wideNormalizedGain, double lowNormalizedGain, double highNormalizedGain)
{
    statusBarLabel->setText(tr("Frequency: ") + freqAsString(frequency) +
                            tr(".  Wide Band Normalized Gain: ") + QString::number(wideNormalizedGain, 'g', 2) +
                            tr(".  Low Pass Normalized Gain: ") + QString::number(lowNormalizedGain, 'g', 2) +
                            tr(".  High Pass Normalized Gain: ") + QString::number(highNormalizedGain, 'g', 2));
}

void ViewFiltersWindow::clearStatusBar()
{
    statusBarLabel->setText("");
}

QString ViewFiltersWindow::ordinalNumberString(int number) const
{
    if (number == 1) return QString("1st");
    if (number == 2) return QString("2nd");
    if (number == 3) return QString("3rd");
    return QString::number(number) + QString("th");
}
