import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './WelcomeHeader.style';
import {QUESTION_MARK, IC_ARROW_BACK} from '../../assets';
import MyStatusBar from '../MyStatusBar';
import {useNavigation} from '@react-navigation/native';

interface Props {
  isBack: boolean;
  title: string;
  onContinue: () => void;
  rightText: string;
}

const defaultProps = {
  isBack: false,
  title: 'Thông tin của bạn',
  onContinue: () => null,
  rightText: 'Tiếp theo',
};

const Header = (props: Props) => {
  const navigation = useNavigation();
  const {isBack, title, onContinue, rightText} = props;
  const _onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <MyStatusBar />
      <TouchableOpacity
        disabled={!isBack}
        style={styles.wrapContinue}
        onPress={_onPressBack}>
        <Image
          resizeMode="contain"
          source={isBack ? IC_ARROW_BACK : QUESTION_MARK}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.wrapContinue} onPress={onContinue}>
        <Text style={styles.right}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};
Header.defaultProps = defaultProps;
export default Header;
