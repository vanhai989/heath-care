import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import styles from './PlayVideo.style';
import Video, {OnLoadData} from 'react-native-video';
import {IC_PRE, IC_NEXT, IC_PLAY, IC_PAUSE} from '../../assets';
import * as Progress from 'react-native-progress';
import {Colors} from '../../themes';
import moment from 'moment';
import {ExerciseDetailType} from '../ExerciseDetailItem';
import {ExerciseModel} from '../../models';
import {useSelector} from 'react-redux';
interface Props {
  onPressPre: () => void;
  onPressNext: (isEnd: boolean) => void;
  data: ExerciseDetailType;
  isLast: boolean;
  isFirst: boolean;
}
let pr = 10;
var intervals: any[] = [];
const PlayVideo = (props: Props) => {
  const {onPressPre, onPressNext, data, isLast, isFirst} = props;
  //redux
  const exercise: ExerciseModel = useSelector((state: any) => state.exercise);
  //state
  const [isPaused, setPaused] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isReady, setReady] = useState(true);
  useEffect(() => {
    pr = exercise.timeExercise;
    _startReady();
    return () => intervals.forEach(clearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _startReady = () => {
    var inv = setInterval(() => {
      pr = pr - 1;
      setProgress(Math.abs(pr - exercise.timeExercise) / exercise.timeExercise);
      if (pr === 0) {
        clearInterval(inv);
        pr = exercise.timeExercise;
        setProgress(0);
        setReady(false);
        setPaused(false);
      }
    }, 1000);
    intervals.push(inv);
  };

  const _onBuffer = () => {
    console.log('_onBuffer');
  };

  const _videoError = () => {
    console.log('_videoError');
  };

  const _onLoad = (loadData: OnLoadData) => {
    console.log('_onLoad', loadData);
    setDuration(loadData.duration);
    setCurrentTime(loadData.duration);
  };

  const _onProgress = (dataProgress: any) => {
    const time = dataProgress.currentTime / duration;
    setProgress(time);
    setCurrentTime(dataProgress.currentTime);
  };

  const _onEnd = () => {
    console.log('_onEnd');
    _onReset();
    onPressNext(true);
    _startReady();
  };

  const _onLoadStart = () => {
    console.log('_onLoadStart');
    setPaused(false);
    setTimeout(() => {
      setPaused(true);
    }, 500);
  };

  const _renderItemButtonControl = (
    icon: ImageSourcePropType,
    onPress: () => void = () => null,
    last: boolean = false,
  ) => {
    const marginLast = 0;
    const margin = 37;
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          resizeMode="contain"
          source={icon}
          style={[
            styles.iconButtonControl,
            {marginRight: last ? marginLast : margin},
          ]}
        />
      </TouchableOpacity>
    );
  };

  const _onReset = () => {
    setPaused(true);
    setProgress(0);
    setDuration(0);
    setCurrentTime(0);
    setReady(true);
    intervals.forEach(clearInterval);
    pr = exercise.timeExercise;
  };

  const _onPressPre = () => {
    _onReset();
    onPressPre();
    _startReady();
  };

  const _onPressPlay = () => {
    setPaused(!isPaused);
  };

  const _onPressNext = () => {
    _onReset();
    onPressNext(false);
    _startReady();
  };

  const _renderPre = () => {
    if (isFirst) {
      return <View style={styles.blank} />;
    }
    return _renderItemButtonControl(IC_PRE, _onPressPre);
  };

  const _renderNext = () => {
    if (isLast) {
      return <View style={styles.blankNext} />;
    }
    return _renderItemButtonControl(IC_NEXT, _onPressNext, true);
  };

  const _renderButtonControl = () => (
    <View style={styles.wrapButtonControl}>
      {_renderPre()}
      {_renderItemButtonControl(isPaused ? IC_PLAY : IC_PAUSE, _onPressPlay)}
      {_renderNext()}
    </View>
  );

  const _renderProgressBar = () => (
    <View style={styles.wrapProgress}>
      <View style={styles.progress}>
        <Progress.Circle
          progress={progress}
          unfilledColor={Colors.grey}
          color={Colors.accent_color}
          borderWidth={0}
          size={164}
          thickness={11}
        />
        <Text style={styles.time}>
          {!isReady && moment.unix(duration - currentTime).format('mm:ss')}
          {isReady && moment.unix(pr).format('mm:ss')}
        </Text>
      </View>
    </View>
  );

  const _renderReady = () => (
    <View style={styles.wrapReady}>
      <Text style={styles.ready}>Sẵn Sàng</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Video
        onLoad={_onLoad}
        paused={isPaused}
        resizeMode="cover"
        source={{
          uri: data.video,
        }}
        style={styles.backgroundVideo}
        onBuffer={_onBuffer}
        onError={_videoError}
        onProgress={_onProgress}
        onEnd={_onEnd}
        onLoadStart={_onLoadStart}
      />
      {_renderProgressBar()}
      {!isReady && _renderButtonControl()}
      {isReady && _renderReady()}
    </View>
  );
};
export default PlayVideo;
