import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './GenderSelect.style';
import {IC_MALE, IC_FEMALE} from '../../assets';
import {Colors} from '../../themes';

interface Props {
  onChange: (isMale: boolean) => void;
  color: string;
  active_color: string;
  value: boolean;
}

const defaultProps = {
  onChange: () => null,
  color: Colors.white,
  active_color: Colors.accent_color,
  value: false,
};

const GenderSelect = (props: Props) => {
  const {onChange, color, active_color, value} = props;
  const [isMale, setMale] = useState(value);

  useEffect(() => {
    setMale(value);
  }, [value]);

  const _renderButton = (
    icon: ImageSourcePropType,
    name: string,
    onPress: () => void,
    isActive: boolean = false,
  ) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.wrapButton,
        {borderColor: isActive ? active_color : color},
      ]}>
      <View style={styles.button}>
        <Image
          resizeMode="contain"
          source={icon}
          style={[styles.icon, {tintColor: isActive ? active_color : color}]}
        />
        <Text style={[styles.name, {color: isActive ? active_color : color}]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const _onChangeMale = () => {
    setMale(true);
    onChange(true);
  };

  const _onChangeFeMale = () => {
    setMale(false);
    onChange(false);
  };

  return (
    <View style={styles.container}>
      {_renderButton(IC_MALE, 'Nam', _onChangeMale, isMale)}
      {_renderButton(IC_FEMALE, 'Nữ', _onChangeFeMale, !isMale)}
    </View>
  );
};
GenderSelect.defaultProps = defaultProps;
export default GenderSelect;
