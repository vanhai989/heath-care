import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import styles from './EditAccountScreen.style';
import {BACK, IC_CALENDAR} from '../../../assets';
import AvatarItem from '../../../components/AvatarItem';
import ImagePicker from 'react-native-image-picker';
import API from '../../../api';
import {useSelector, useDispatch} from 'react-redux';
import {UserModel} from '../../../models';
import {loginSuccess} from '../../../redux/actions/User';
import LoaderIndicator from '../../../components/LoaderIndicator';
import ButtonModal from '../../../components/ButtonModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GenderSelect from '../../../components/GenderSelect';
import moment from 'moment';
import {FEMALE, MALE} from '../../../constants';
import {Colors} from '../../../themes';
import {
  setWeight,
  setHeight,
  setGender,
  setPhysicalState,
  setName,
  setTargetWeight,
  setDob,
  setHand,
  setFoot,
  setStomach,
} from '../../../redux/actions/welcome';
import {PhysicalState} from '../../../mocks';
import checkMuscle from '../../../utils/checkMuscle';
interface Props {
  navigation: any;
}

const EditAccountScreen = (props: Props) => {
  const {navigation} = props;
  //redux
  const user: UserModel = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const _goBack = () => {
    navigation.goBack();
  };
  const [name, setFullName] = useState(user.full_name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [avatar, setAvatar] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [gender, updateGender] = useState(user.gender === MALE);
  const [isDateVisible, setDateVisible] = useState(false);
  const [dob, updateDob] = useState(user.dob);

  const _onChangeName = (text: string) => setFullName(text);
  const _onChangeEmail = (text: string) => setEmail(text);
  const _onChangeAddress = (text: string) => setAddress(text);

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
      maxWidth: 256,
      maxHeight: 256,
    },
  };

  const _updateWelcome = (data: UserModel) => {
    dispatch(setHeight(data.height));
    dispatch(setWeight(data.weight));
    dispatch(setGender(data.gender === MALE));
    dispatch(setName(data.full_name));
    dispatch(setTargetWeight(data.target_weight));
    dispatch(setDob(data.dob));
    const item = PhysicalState.find((e) => e.key === data.physical);
    if (item) {
      dispatch(setPhysicalState(item));
    }
    if (Array.isArray(data.muscle)) {
      data.muscle.forEach((element) => {
        const val = checkMuscle.stringToBool(element);
        dispatch(setHand(val.isHand));
        dispatch(setFoot(val.isFoot));
        dispatch(setStomach(val.isStomach));
      });
    }
  };

  const _onSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('dob', dob);
    formData.append('gender', gender ? MALE : FEMALE);
    if (avatar !== '') {
      formData.append('avatar', {
        name: `avatar${Math.random()}`,
        type: 'image/jpeg',
        uri: Platform.OS === 'android' ? avatar : avatar.replace('file://', ''),
      });
    }
    try {
      setLoading(true);
      const res = await API.user.editAccount(formData);
      await dispatch(loginSuccess(res.data));
      _updateWelcome(res.data);
      Alert.alert('Thông tin đã được cập nhật');
      _goBack();
    } catch (error) {
      Alert.alert('Không có kết nối Internet', 'xin vui lòng thử lại');
    } finally {
      setLoading(false);
    }
  };

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.wrapper_goback}>
        <Image style={styles.icon_back} source={BACK} resizeMode="contain" />
        <Text style={styles.back}>Quay lại</Text>
      </TouchableOpacity>
      <View style={styles.group_center_header}>
        <Text style={styles.titleHeader}>Thông tin cá nhân</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.cascader} />
    </View>
  );

  const _renderCommonInput = (
    title: string,
    value: string,
    onChangeInput: (text: string) => void,
  ) => (
    <View style={styles.wrapper_textInput}>
      <Text style={styles.title_TextInput}>{title}</Text>
      <TextInput
        style={styles.style_textInput}
        value={value}
        onChangeText={(text: string) => onChangeInput(text)}
      />
    </View>
  );

  const _renderButton = () => (
    <View style={styles.wrapper_submit}>
      <TouchableOpacity onPress={_onSubmit} style={styles.submit}>
        <Text style={styles.text_submit}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );

  const _onPressModalDob = () => {
    setDateVisible(true);
  };

  const _handleConfirm = (date: Date) => {
    updateDob(moment(date).format('YYYY-MM-DD'));
    _hideDatePicker();
  };

  const _hideDatePicker = () => {
    setDateVisible(false);
  };

  const _renderDOB = () => (
    <View>
      <Text style={styles.title_TextInput}>Ngày sinh:</Text>
      <ButtonModal
        styleTitle={styles.dob_title}
        style={styles.style_textInput}
        value={moment(dob).format('DD/MM/YYYY')}
        onPress={_onPressModalDob}
        icon={IC_CALENDAR}
        isCheck={false}
      />
    </View>
  );

  const _onChangeGender = (isMale: boolean) => {
    updateGender(isMale);
  };

  const _renderInputInfo = () => (
    <View style={styles.enter_info}>
      {_renderCommonInput('Họ và tên:', name, _onChangeName)}
      {_renderCommonInput('Email:', email, _onChangeEmail)}
      {_renderCommonInput('Địa chỉ:', address, _onChangeAddress)}
      {_renderDOB()}
      <GenderSelect
        color={Colors.main_color}
        onChange={_onChangeGender}
        value={gender}
      />
      {_renderButton()}
    </View>
  );

  const _onPressAvatarItem = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response);
        setAvatar(response.uri);
      }
    });
  };
  const source = avatar === '' ? user.avatar : avatar;
  const _renderAvatar = () => (
    <View style={styles.wrapAvatar}>
      <AvatarItem source={source} onPress={_onPressAvatarItem} />
    </View>
  );

  const _renderBody = () => (
    <View style={styles.body}>
      <ScrollView style={styles.wrapper_content}>
        {_renderAvatar()}
        {_renderInputInfo()}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      {_renderBody()}
      <LoaderIndicator isLoading={isLoading} />
      <DateTimePickerModal
        isVisible={isDateVisible}
        mode="date"
        onConfirm={_handleConfirm}
        onCancel={_hideDatePicker}
        date={new Date(dob)}
        timePickerModeAndroid="spinner"
      />
    </View>
  );
};

export default EditAccountScreen;
