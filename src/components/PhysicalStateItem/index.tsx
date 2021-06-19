import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './PhysicalStateItem.style';
import {PhysicalStateType} from '../../screens/WelcomeScreenGroup/WelcomePhysicalStateScreen';
import {Colors} from '../../themes';

interface Props {
  data: PhysicalStateType;
  onPress: (data: PhysicalStateType) => void;
}

const PhysicalStateItem = (props: Props) => {
  const {data, onPress} = props;
  const _onPress = () => {
    onPress(data);
  };

  return (
    <TouchableOpacity
      onPress={_onPress}
      style={[
        styles.container,
        {backgroundColor: data.isActive ? Colors.accent_color : Colors.white},
      ]}>
      <Image
        resizeMode="contain"
        style={[
          styles.icon,
          {
            tintColor: data.isActive
              ? Colors.accent_black
              : Colors.accent_color,
          },
        ]}
        source={data.icon}
      />
      <View style={styles.wrapRight}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.content}>{data.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PhysicalStateItem;
