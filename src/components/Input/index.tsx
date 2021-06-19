import React from 'react';
import {
  View,
  Image,
  TextInput,
  ImageSourcePropType,
  KeyboardType,
} from 'react-native';
import styles from './Input.style';
import {IC_CHECK} from '../../assets';

interface Props {
  style: any;
  placeholder: string;
  icon: ImageSourcePropType;
  onChangeText: (text: string) => void;
  keyboardType: KeyboardType;
  isCheck: boolean;
  secureTextEntry: boolean;
  value: string;
}

const defaultProps = {
  style: {},
  placeholder: '',
  icon: IC_CHECK,
  onChangeText: () => null,
  keyboardType: 'default',
  isCheck: true,
  secureTextEntry: false,
  value: '',
};

const Input = (props: Props) => {
  const {
    style,
    placeholder,
    icon,
    onChangeText,
    keyboardType,
    isCheck,
    secureTextEntry,
    value,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <Image resizeMode="contain" source={icon} style={styles.iconCheck} />
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        value={value}
      />
      {isCheck && (
        <Image
          resizeMode="contain"
          source={IC_CHECK}
          style={styles.iconCheck}
        />
      )}
    </View>
  );
};

Input.defaultProps = defaultProps;

export default Input;
