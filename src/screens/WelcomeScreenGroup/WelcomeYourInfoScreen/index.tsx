import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './WelcomeYourInfoScreen.style';
import WelcomeHeader from '../../../components/WelcomeHeader';
import GenderSelect from '../../../components/GenderSelect';
import Input from '../../../components/Input';
import ButtonModal from '../../../components/ButtonModal';
import {IC_PEOPLE, IC_CALENDAR} from '../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setDob, setGender} from '../../../redux/actions/welcome';
import {setSplash} from '../../../redux/actions/auth';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {WelComeModel} from '../../../models';
import {Colors} from '../../../themes';
import moment from 'moment';

interface Props {
  navigation: any;
}

const WelcomeYourInfoScreen = (props: Props) => {
  const {navigation} = props;
  //state
  const [isDateVisible, setDateVisible] = useState(false);
  //redux
  const dispatch = useDispatch();
  const data: WelComeModel = useSelector((state: any) => state.welcome);
  const isEmptyDob = data.dob === '';

  useEffect(() => {
    _removeStack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _removeStack = async () => {
    // loại bỏ màn splash khỏi stack
    await dispatch(setSplash(false));
  };

  const _onContinue = () => {
    if (data.name === '') {
      return Alert.alert('Bạn vui lòng nhập tên của bạn');
    }
    if (isEmptyDob) {
      return Alert.alert('Bạn vui lòng chọn ngày sinh của bạn');
    }
    navigation.navigate('WelcomeWeightHeightScreen');
  };

  const _onChangeGender = (isMale: boolean) => {
    dispatch(setGender(isMale));
  };

  const _onPressModalDob = () => {
    setDateVisible(true);
  };

  const _handleConfirm = (date: Date) => {
    dispatch(setDob(moment(date).format('YYYY-MM-DD')));
    _hideDatePicker();
  };

  const _hideDatePicker = () => {
    setDateVisible(false);
  };

  return (
    <View style={styles.container}>
      <WelcomeHeader onContinue={_onContinue} />
      <Text style={styles.title}>
        Đầu tiên, để tính toán lượng calo phù hợp, chúng tôi cần những thông tin
        này của bạn
      </Text>
      <GenderSelect onChange={_onChangeGender} />
      <View style={styles.wrapInput}>
        <Input
          onChangeText={(text: string) => dispatch(setName(text))}
          icon={IC_PEOPLE}
          placeholder="Tên của bạn"
          value={data.name}
        />
        <ButtonModal
          onPress={_onPressModalDob}
          icon={IC_CALENDAR}
          value={
            isEmptyDob ? 'Sinh nhật' : moment(data.dob).format('DD/MM/YYYY')
          }
          style={styles.input}
          styleTitle={{color: isEmptyDob ? Colors.gray : Colors.black}}
        />
        <DateTimePickerModal
          isVisible={isDateVisible}
          mode="date"
          onConfirm={_handleConfirm}
          onCancel={_hideDatePicker}
          date={isEmptyDob ? new Date() : new Date(data.dob)}
          timePickerModeAndroid="spinner"
        />
      </View>
    </View>
  );
};
export default WelcomeYourInfoScreen;
