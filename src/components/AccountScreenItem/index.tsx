import React, {memo, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ICON_ARROW_RIGHT} from '../../assets';
import styles from './AccountScreenItem.style';
import {Contacts} from '../../constants/AccountScreen';
import {ACCOUNT_SCREEN_LIST} from '../../constants';

interface Props {
  data: dataType;
  onPressItem: (data: dataType) => void;
  onChangePassword: () => void;
}

interface dataType {
  title: string;
  code: string;
  status?: string;
}

const defaultProps = {
  onPressItem: () => null,
  onChangePassword: () => null,
};

const AccountScreenItem = (props: Props) => {
  const {data, onPressItem, onChangePassword} = props;

  //state
  const [isShowContact, setIsShowContact] = useState(false);
  const [isShowSetting, setIsShowSetting] = useState(false);

  const _onPressItem = () => {
    switch (data.code) {
      case ACCOUNT_SCREEN_LIST.CONTACT:
        setIsShowContact(!isShowContact);
        break;
      case ACCOUNT_SCREEN_LIST.SETTING:
        setIsShowSetting(!isShowSetting);
        break;
      default:
        onPressItem(data);
        break;
    }
  };

  const _renderContact = () => {
    if (isShowContact) {
      return Contacts.map((val) => (
        <View style={styles.row}>
          <Image source={val.image} resizeMode="contain" style={styles.icon} />
          <Text>{val.content}</Text>
        </View>
      ));
    }
  };

  const _renderChangePassword = () => {
    if (isShowSetting) {
      return (
        <TouchableOpacity
          onPress={() => onChangePassword()}
          style={styles.changePassContainer}>
          <Text style={styles.boldText}>Đổi mật khẩu</Text>
        </TouchableOpacity>
      );
    }
  };
  const isShow = isShowContact || isShowSetting;
  return (
    <View>
      <TouchableOpacity style={styles.itemLine} onPress={_onPressItem}>
        <Text style={styles.normalText}>{data.title}</Text>
        <View style={styles.itemRight}>
          <Text style={styles.yellowText}>{data.status}</Text>
          <Image
            source={ICON_ARROW_RIGHT}
            style={[styles.iconArrow, isShow && styles.rotate]}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      {_renderContact()}
      {_renderChangePassword()}
    </View>
  );
};
AccountScreenItem.defaultProps = defaultProps;

export default memo(AccountScreenItem);
