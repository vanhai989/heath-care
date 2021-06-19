import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HowYouFeelScreen.style';
import Header from '../../../components/Header';
import {IC_ARROW_BACK, IMG_BODY} from '../../../assets';
import {ExerciseStatus} from '../../../constants/ExerciseScreen';
import {Colors} from '../../../themes';
import ModalExerciseScreen from '../../../components/ModalExerciseScreen';
import API from '../../../api';
import EventBus from '../../../services/EventBus';
import {REFRESH_EXERCISE, REFRESH_HOME} from '../../../constants';
import {useDispatch} from 'react-redux';
import {addTimeExercise} from '../../../redux/actions/exercise';

interface Props {
  navigation: any;
  route: any;
}
const HowYouFeelScreen = (props: Props) => {
  const {navigation, route} = props;
  const {
    exerciseId,
    target,
  }: {
    exerciseId: number;
    target: string;
  } = route.params;
  //redux
  const dispatch = useDispatch();
  // State
  const [isCheckItem, setIsCheckItem] = useState(-1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const _goBack = () => {
    navigation.goBack();
  };

  const _renderHeaderLeft = () => (
    <TouchableOpacity onPress={_goBack} style={styles.horizontal}>
      <Image source={IC_ARROW_BACK} style={styles.iconBack} />
    </TouchableOpacity>
  );

  const _renderCenter = () => (
    <View style={styles.textContainer}>
      <Text style={styles.titleHeader}>Có được cơ bụng khoẻ hơn</Text>
    </View>
  );

  const _renderHeader = () => (
    <Header
      style={styles.Header}
      renderHeaderLeft={_renderHeaderLeft}
      renderCenter={_renderCenter}
    />
  );

  const _onPressItem = async (index: number) => {
    setIsCheckItem(index);
    if (index === 3) {
      setIsModalVisible(!isModalVisible);
    } else {
      await dispatch(addTimeExercise(ExerciseStatus[index].time));
      _finishExercise();
    }
  };

  const _finishExercise = () => {
    const targetScreen = target ? target : '';
    if (targetScreen === 'ExerciseScreen') {
      _finish();
    } else {
      navigation.navigate(targetScreen);
    }
  };

  const _onPressConfirm = async () => {
    await dispatch(addTimeExercise(ExerciseStatus[3].time));
    _finishExercise();
  };

  const _finish = async () => {
    const params = {
      exercise_id: exerciseId,
    };
    const targetScreen = target ? target : '';
    try {
      await API.exercise.finishedExercise(params);
      EventBus.fireEvent(REFRESH_EXERCISE);
      EventBus.fireEvent(REFRESH_HOME);
      navigation.navigate(targetScreen);
    } catch (error) {
      navigation.navigate(targetScreen);
      console.log('error', error);
    }
  };

  const _renderModal = () => (
    <ModalExerciseScreen
      onPressCancel={_onPressClose}
      onPressConfirm={_onPressConfirm}
      modalVisible={isModalVisible}
    />
  );

  const _renderBody = () => (
    <View style={styles.bodyContainer}>
      <Text style={styles.boldText}>Bạn cảm thấy thế nào ?</Text>
      <View style={styles.contentContainer}>
        <View style={styles.itemRight}>
          {ExerciseStatus.map((val, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.boxContainer,
                  index === isCheckItem && {
                    backgroundColor: Colors.accent_color,
                  },
                ]}
                onPress={() => _onPressItem(index)}>
                <Image
                  source={val.icon}
                  resizeMode="contain"
                  style={styles.iconFace}
                />
                <Text>{val.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Image source={IMG_BODY} />
      </View>
    </View>
  );

  const _onPressClose = () => {
    setIsModalVisible(false);
    _finishExercise();
  };

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.body}>
        {_renderBody()}
        {_renderModal()}
      </View>
    </View>
  );
};
export default HowYouFeelScreen;
