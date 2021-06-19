import React from 'react';
import {Image, Text, ImageSourcePropType, TouchableOpacity} from 'react-native';
import styles from './Input.style';
import {IC_CHECK} from '../../assets';

interface Props {
  style: any;
  value: string;
  icon: ImageSourcePropType;
  onPress: () => void;
  isCheck: boolean;
  styleTitle: any;
}

const defaultProps = {
  style: {},
  value: '',
  icon: IC_CHECK,
  onPress: () => null,
  isCheck: true,
  styleTitle: {},
};

const Input = (props: Props) => {
  const {style, value, icon, onPress, isCheck, styleTitle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Image resizeMode="contain" source={icon} style={styles.iconCheck} />
      <Text style={[styles.textInput, styleTitle]}>{value}</Text>
      {isCheck && (
        <Image
          resizeMode="contain"
          source={IC_CHECK}
          style={styles.iconCheck}
        />
      )}
    </TouchableOpacity>
  );
};

Input.defaultProps = defaultProps;

export default Input;
