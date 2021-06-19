import React, {useState, useEffect} from 'react';
import {View, Modal, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from './DietCategoryModal.style';
import {SHOW_DIET_CATEGORY} from '../../constants';
import EventBus from '../../services/EventBus';
import {typeOfDish} from '../../mocks';
import {Colors} from '../../themes';

interface Props {
  onSelectCategory: (value: {id: number; title: string; key: string}) => void;
}
const DietCategoryModal = (props: Props) => {
  const {onSelectCategory} = props;
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(typeOfDish[0]);

  useEffect(() => {
    const listener = async (data: {
      visible: boolean;
      value: {
        id: number;
        title: string;
        key: string;
      };
    }) => {
      await setVisible(data.visible);
      await setValue(data.value);
    };
    EventBus.addListener(SHOW_DIET_CATEGORY, listener);
    return () => EventBus.removeListener(listener);
  }, []);

  const _onClose = () => {
    setVisible(false);
  };

  const _renderLine = () => (
    <View style={styles.wrapLine}>
      <View style={styles.line} />
    </View>
  );

  const _onPressItem = (item: {id: number; title: string; key: string}) => {
    onSelectCategory(item);
    _onClose();
  };

  const _renderItem = ({
    item,
    index,
  }: {
    item: {id: number; title: string; key: string};
    index: number;
  }) => (
    <TouchableOpacity
      onPress={() => _onPressItem(item)}
      style={[
        styles.item,
        {
          backgroundColor:
            value.id === item.id ? Colors.accent_color : Colors.white,
        },
      ]}
      key={index}>
      <Text style={styles.titleItem}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      hardwareAccelerated>
      <TouchableOpacity
        onPress={_onClose}
        activeOpacity={0.8}
        style={styles.container}>
        {_renderLine()}
        <View style={styles.body}>
          <FlatList
            data={typeOfDish}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DietCategoryModal;
