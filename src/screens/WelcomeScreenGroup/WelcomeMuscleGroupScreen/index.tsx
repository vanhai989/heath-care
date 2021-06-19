import React, { useState } from 'react';
import {View, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './WelcomeMuscleGroupScreen.style';
import WelcomeHeader from '../../../components/WelcomeHeader';
import {WelComeModel} from '../../../models';
import {useDispatch, useSelector} from 'react-redux';
import Types from '../../../redux/types';
import {
  IC_HEAD_MAN,
  IC_BODY_MAN,
  IC_LEFT_HAND_MAN,
  IC_FOOT_MAN,
  IC_RIGHT_HAND_MAN,
  IC_HEAD_GIRL,
  IC_BODY_GIRL,
  IC_LEFT_HAND_GIRL,
  IC_FOOT_GIRL,
  IC_RIGHT_HAND_GIRL,
} from '../../../assets';
import {Colors} from '../../../themes';
import {setStomach, setHand, setFoot} from '../../../redux/actions/welcome';
import API from '../../../api';
import checkMuscle from '../../../utils/checkMuscle';
import LoaderIndicator from '../../../components/LoaderIndicator';

interface Props {
  navigation: any;
  route: any;
}

const WelcomeMuscleGroupScreen = (props: Props) => {
  const {navigation, route} = props;
  const code = route.params ? route.params.code : false;
  //redux
  const dispatch = useDispatch();
  const welcome: WelComeModel = useSelector((state: any) => state.welcome);
  const [isStomach, _setStomach] = useState(welcome.isStomach);
  const [isFoot, _setFoot] = useState(welcome.isFoot);
  const [isHand, _setHand] = useState(welcome.isHand);
  const [isLoading, setLoading] = useState(false);

  const _saveMuscle = () => {
    dispatch(setStomach(isStomach));
    dispatch(setFoot(isFoot));
    dispatch(setHand(isHand));
  };

  const _onContinue = () => {
    if (code) {
      _changeMuscle();
    } else {
      _saveMuscle();
      navigation.navigate('AuthStack');
    }
  };

  const _changeMuscle = async () => {
    const data = {
      isStomach,
      isFoot,
      isHand,
    };
    const params = {
      muscles: checkMuscle.boolToString(data).code,
    };
    try {
      setLoading(true);
      await API.exercise.changeMuscle(params);
      _saveMuscle();
      return navigation.goBack();
    } catch (error) {
      Alert.alert('Không có kết nối mạng', 'Xin vui lòng thử lại');
    } finally {
      setLoading(false);
    }
  };

  const _onChange = (key: string) => {
    switch (key) {
      case Types.BODY:
        return _setStomach(!isStomach);
      case Types.HAND:
        return _setHand(!isHand);
      case Types.FOOT:
        return _setFoot(!isFoot);
      default:
    }
  };

  const _renderMan = () => (
    <View style={styles.people}>
      <TouchableOpacity style={styles.wrapHead}>
        <Image source={IC_HEAD_MAN} style={styles.headIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.BODY)}
        style={styles.wrapBody}>
        <Image
          source={IC_BODY_MAN}
          style={[
            styles.bodyIcon,
            {tintColor: isStomach ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.HAND)}
        style={styles.warpLeftHand}>
        <Image
          source={IC_LEFT_HAND_MAN}
          style={[
            styles.leftHandIcon,
            {tintColor: isHand ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.HAND)}
        style={styles.warpRightHand}>
        <Image
          source={IC_RIGHT_HAND_MAN}
          style={[
            styles.leftHandIcon,
            {tintColor: isHand ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.FOOT)}
        style={styles.warpFoot}>
        <Image
          source={IC_FOOT_MAN}
          style={[
            styles.footIcon,
            {tintColor: isFoot ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
    </View>
  );

  const _renderGirl = () => (
    <View style={styles.people}>
      <TouchableOpacity style={styles.wrapHead}>
        <Image source={IC_HEAD_GIRL} style={styles.headIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.BODY)}
        style={styles.wrapBodyGirl}>
        <Image
          source={IC_BODY_GIRL}
          style={[
            styles.bodyIconGirl,
            {tintColor: isStomach ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.HAND)}
        style={styles.warpLeftHandGirl}>
        <Image
          source={IC_LEFT_HAND_GIRL}
          style={[
            styles.leftHandIconGirl,
            {tintColor: isHand ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.HAND)}
        style={styles.warpRightHandGirl}>
        <Image
          source={IC_RIGHT_HAND_GIRL}
          style={[
            styles.rightHandIconGirl,
            {tintColor: isHand ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => _onChange(Types.FOOT)}
        style={styles.warpFootGirl}>
        <Image
          source={IC_FOOT_GIRL}
          style={[
            styles.footIconGirl,
            {tintColor: isFoot ? Colors.red : Colors.grey},
          ]}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <WelcomeHeader
        isBack
        onContinue={_onContinue}
        title="Chọn nhóm cơ muốn giảm"
        rightText={code ? 'Hoàn thành' : 'Tiếp theo'}
      />
      <View style={styles.wrapPeople}>
        {!welcome.isMale && _renderGirl()}
        {welcome.isMale && _renderMan()}
      </View>
      <LoaderIndicator isLoading={isLoading} />
    </View>
  );
};
export default WelcomeMuscleGroupScreen;
