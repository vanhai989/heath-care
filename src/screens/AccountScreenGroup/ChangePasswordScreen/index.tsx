import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import styles from './ChangePasswordScreen.style';
import {BACK} from '../../../assets';
import {changePasswordType} from '../../../api/user';
import api from '../../../api';
import LoaderIndicator from '../../../components/LoaderIndicator';
interface Props {
  navigation: any;
}
const ChangePasswordScreen = (props: Props) => {
  const {navigation} = props;
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const _setOldPassword = (password: string) => setOldPassword(password);
  const _setNewPassword = (password: string) => setNewPassword(password);
  const _setNewPasswordAgain = (password: string) =>
    setNewPasswordAgain(password);

  const _goBack = () => {
    navigation.goBack();
  };
  const _onSubmit = async () => {
    if (oldPassword === '') {
      Alert.alert('Bạn chưa nhập mật khẩu hiện tại');
      return;
    }

    if (newPassword === '') {
      Alert.alert('Bạn chưa nhập mật khẩu mới');
      return;
    }

    if (newPassword !== newPasswordAgain) {
      Alert.alert('Mật khẩu mới không khớp mật khẩu nhập lại');
      return;
    }

    const param: changePasswordType = {
      old_pass: oldPassword,
      new_pass: newPassword,
      confirm_pass: newPasswordAgain,
    };

    try {
      setIsLoading(true);
      await api.user.changePassword(param);
      Alert.alert('Bạn đã đổi mật khẩu thành công');
    } catch (error) {
      if (error.response.status === 401) {
        Alert.alert('Mật khẩu cũ không chính xác', 'xin vui lòng thử lại');
      } else {
        Alert.alert('Không có kết nỗi mạng', 'xin vui lòng thử lại');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.wrapper_goBack}>
        <Image style={styles.icon_back} source={BACK} resizeMode="contain" />
        <Text style={styles.back}>Quay lại</Text>
      </TouchableOpacity>
      <View style={styles.group_center_header}>
        <Text style={styles.titleHeader}>Đổi mật khẩu</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.cascaded} />
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
        secureTextEntry
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

  const _renderBody = () => (
    <View style={styles.body}>
      <ScrollView style={styles.wrapper_content}>
        {_renderCommonInput('Mật khẩu cũ', oldPassword, _setOldPassword)}
        {_renderCommonInput('Mật khẩu mới', newPassword, _setNewPassword)}
        {_renderCommonInput(
          'Nhập lại mật khẩu mới',
          newPasswordAgain,
          _setNewPasswordAgain,
        )}
        {_renderButton()}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      {_renderBody()}
      <LoaderIndicator isLoading={isLoading} />
    </View>
  );
};

export default ChangePasswordScreen;
