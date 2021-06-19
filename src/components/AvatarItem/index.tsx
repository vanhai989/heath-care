import React from 'react';
import styles from './AvatarItem.style';
import {View, Image, TouchableOpacity} from 'react-native';
import {IC_CAMERA} from '../../assets';
import FormatAvatar from '../../utils/FormatAvatar';
interface Props {
  disabled: boolean;
  onPress: () => void;
  source: string;
}
const defaultProps = {
  disabled: false,
  onPress: () => null,
  source: '',
};
const AvatarItem = (props: Props) => {
  const {disabled, onPress, source} = props;
  const _renderIconCamera = () => (
    <View style={styles.cameraContainer}>
      <Image source={IC_CAMERA} resizeMode="contain" style={styles.camera} />
    </View>
  );
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={disabled}
      style={styles.container}>
      <View style={styles.wrapImage}>
        <Image
          source={FormatAvatar.format(source)}
          style={styles.avatarContainer}
          resizeMode="cover"
        />
      </View>
      {!disabled && _renderIconCamera()}
    </TouchableOpacity>
  );
};
AvatarItem.defaultProps = defaultProps;
export default AvatarItem;
