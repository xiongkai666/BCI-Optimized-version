#!/usr/bin/env python3

import mountainsort4 as ms4
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
from mountainlab_pytools import mdaio
from read import read_data
from read_rhs import read_data_rhs
from compute_noise_overlap import compute_noise_overlap


def mountainsort4_curation(*, recording, sorting, noise_overlap_threshold=None):
    if noise_overlap_threshold is not None:
        units = sorting.get_unit_ids()
        noise_overlap_scores = compute_noise_overlap(recording=recording, sorting=sorting, unit_ids=units)
        inds = np.where(np.array(noise_overlap_scores) <= noise_overlap_threshold)[0]
        new_units = list(np.array(units)[inds])
        sorting = se.SubSortingExtractor(parent_sorting=sorting, unit_ids=new_units)
    return sorting


def main():
    # recording, sorting_true = se.example_datasets.toy_example()
    global timeseries, fre, data
    datapath = '/root/Desktop/test_data/'
    file_name = []
    flag = 2
    datanames = os.listdir(datapath)
    start=time.time()
    for datanames in datanames:
        if os.path.splitext(datanames)[1] == '.rhd':
            flag = 0
            finame = (datapath + '/' + str(datanames))
            file_name.append(finame)
        elif os.path.splitext(datanames)[1] == '.rhs':
            flag = 1
            finame = (datapath + '/' + str(datanames))
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
    mappath = '/home/ui_test/probe32.csv'
    csv_data = pd.read_csv(mappath, header=None)
    geom_4shank_128_long = np.array(csv_data.values.tolist())
    recording = se.NumpyRecordingExtractor(timeseries=timeseries, geom=geom_4shank_128_long, sampling_frequency=fre)
    bandpass_filter_recording = st.preprocessing.bandpass_filter(recording=recording, freq_min=600, freq_max=6000)

    output, c = ms4.mountainsort4(
        recording=bandpass_filter_recording,
        detect_sign=0,
        clip_size=54,
        adjacency_radius=100,
        detect_threshold=3.5,
        detect_interval=27,
        num_workers=None,
        verbose=True,
        use_recording_directly=False
    )
    curation = mountainsort4_curation(recording=bandpass_filter_recording, sorting=output, noise_overlap_threshold=0.3)
    end=time.time()
    print('######################')
    print(end-start)
    print(output.get_unit_ids())
    print(curation.get_unit_ids())


if __name__ == '__main__':
    main()
