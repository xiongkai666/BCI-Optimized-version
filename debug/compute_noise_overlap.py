from sklearn.neighbors import NearestNeighbors
import numpy as np


def compute_noise_overlap(recording, sorting, unit_ids):
    if unit_ids is None:
        unit_ids = sorting.get_unit_ids()
    # 获取神经元id
    max_num_events = 500
    clip_size = 50
    ret = []
    for unit in unit_ids:
        times = sorting.get_unit_spike_train(unit_id=unit)  # 获取单个神经元中所有的发放时间
        if len(times) > max_num_events:
            times = np.random.choice(times, size=max_num_events)
        Nc = len(times)  # 发放的个数
        min_time = np.min(times)  # 时间最小值
        max_time = np.max(times)  # 时间最大值
        times_control = np.random.choice(np.arange(min_time, max_time + 1), size=Nc)  # 在min到max中随机选取Nc个时间点
        clips = np.stack(recording.get_snippets(snippet_len=clip_size, reference_frames=times))# 根据发放时间截取片段

        clips_control = np.stack(recording.get_snippets(snippet_len=clip_size, reference_frames=times_control))# 根据抽取的时间截取片段
        template = np.mean(clips, axis=0)#对每个通道的波形求平均
        # 找到最大值坐标
        max_ind = np.unravel_index(np.argmax(np.abs(template)), template.shape)
        chmax = max_ind[0]
        tmax = max_ind[1]
        # 取最大值
        max_val = template[chmax, tmax]
        # nc x channel x datalen
        weighted_clips_control = np.zeros(clips_control.shape)
        # 对每个发放
        for j in range(Nc):
            clip0 = clips_control[j, :, :]#取出数据
            val0 = clip0[chmax, tmax]#找到最大值对应位置的点
            weight0 = val0 * max_val#相乘
            weighted_clips_control[j, :, :] = clip0 * weight0#对control中的数据全乘上weight0
        noise_template = np.sum(weighted_clips_control, axis=0)#对每个通道的波形求和
        noise_template = noise_template / np.sum(np.abs(noise_template)) * np.sum(np.abs(template))
        # noise_template的值等于所有随机波形加权求和后除以噪声均值求和，乘上模板均值求和，即：对随机事件乘上一个倍数，这个倍数是预计事件和随机事件的比值
        for j in range(Nc):
            clips[j, :, :] = subtract_clip_component(clips[j, :, :], noise_template)
            clips_control[j, :, :] = subtract_clip_component(clips_control[j, :, :], noise_template)
        # 拼接，提取特征
        all_clips = np.concatenate([clips, clips_control], axis=0)
        M0 = all_clips.shape[1]
        T0 = all_clips.shape[2]
        num_features = 10
        nknn = 6
        all_features = compute_pca_features(all_clips.reshape((Nc * 2, M0 * T0)), num_features)

        distances, indices = NearestNeighbors(n_neighbors=nknn + 1, algorithm='auto').fit(all_features.T).kneighbors()
        # 返回值indices：第0列元素为参考点的索引，后面是(n_neighbors - 1)个与之最近的点的索引
        # 返回值distances：第0列元素为与自身的距离(为0)，后面是(n_neighbors - 1)个与之最近的点与参考点的距离
        group_id = np.zeros((Nc * 2))
        group_id[0:Nc] = 1
        group_id[Nc:] = 2
        # 手动赋值，循环计算匹配程度，计算匹配的占总的比例
        num_match = 0
        total = 0
        for j in range(Nc * 2):
            for k in range(1, nknn + 1):
                ind = indices[j][k]
                if group_id[j] == group_id[ind]:
                    num_match = num_match + 1
                total = total + 1
        pct_match = num_match / total
        noise_overlap = 1 - pct_match
        ret.append(noise_overlap)
    return ret


def compute_pca_features(X, num_components):
    u, s, vt = np.linalg.svd(X)
    return u[:, :num_components].T


def subtract_clip_component(clip1, component):
    V1 = clip1.flatten()
    V2 = component.flatten()
    V1 = V1 - np.mean(V1)
    V2 = V2 - np.mean(V2)
    V1 = V1 - V2 * np.dot(V1, V2) / np.dot(V2, V2)
    return V1.reshape(clip1.shape)
