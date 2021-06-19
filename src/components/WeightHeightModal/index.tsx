import React, {useState, useEffect} from 'react';
import {View, Modal, Text, TextInput, ScrollView} from 'react-native';
import styles from './WeightHeightModal.style';
import {HEIGHT, SHOW_WEIGHT_HEIGHT_MODAL} from '../../constants';
import EventBus from '../../services/EventBus';
interface Props {
  onUpdate: (type: string, value: string) => void;
}
const WeightHeightModal = (props: Props) => {
  const {onUpdate} = props;
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [type, setType] = useState(HEIGHT);

  useEffect(() => {
    const listener = async (data: {
      visible: boolean;
      type: string;
      value: string;
    }) => {
      await setType(data.type);
      await setVisible(data.visible);
      await setValue(data.value);
    };
    EventBus.addListener(SHOW_WEIGHT_HEIGHT_MODAL, listener);
    return () => EventBus.removeListener(listener);
  }, []);

  const _renderHeader = () => {
    const title = type === HEIGHT ? 'Chiều cao' : 'Cân nặng';

    const _onPressCancel = () => {
      setVisible(false);
    };

    const _onPressUpdate = () => {
      onUpdate(type, value);
      setVisible(false);
    };

    return (
      <View style={styles.header}>
        <Text onPress={_onPressCancel} style={styles.cancel}>
          Hủy
        </Text>
        <Text style={styles.title}>{title}</Text>
        <Text onPress={_onPressUpdate} style={styles.update}>
          Cập nhật
        </Text>
      </View>
    );
  };

  const _renderInput = () => {
    const unit = type === HEIGHT ? 'cm' : 'kg';
    return (
      <View style={styles.wrapInput}>
        <Text style={styles.unit}>{unit}</Text>
        <TextInput
          autoFocus={true}
          keyboardType="numeric"
          onChangeText={(text: string) => setValue(text)}
          value={`${value}`}
          style={styles.textInput}
        />
      </View>
    );
  };

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      hardwareAccelerated>
      <View style={styles.container}>
        <ScrollView style={styles.body}>
          {_renderHeader()}
          {_renderInput()}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default WeightHeightModal;
