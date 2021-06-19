import React, {memo} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './ModalExerciseScreen.style';
import {Colors} from '../../themes';

interface Props {
  modalVisible: boolean;
  onPressConfirm: () => void;
  onPressCancel: () => void;
}

const ModalExerciseScreen = (props: Props) => {
  const {modalVisible, onPressConfirm, onPressCancel} = props;

  const _renderBody = () => (
    <View>
      <Text style={styles.normalText}>
        Phần này có vẻ quá dẽ với bạn, bạn có muốn
      </Text>
      <Text style={styles.normalText}>
        tăng cường độ luyện tập để hiệu quả hơn
      </Text>
      <Text style={styles.normalText}>hay không?</Text>
    </View>
  );

  const _onPressConfirm = () => {
    onPressConfirm();
  };

  const _onPressCancel = () => {
    onPressCancel();
  };

  const _renderFooter = () => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={_onPressCancel}
        style={[styles.button, {backgroundColor: Colors.grey}]}>
        <Text>Không</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_onPressConfirm} style={styles.button}>
        <Text>OK</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {_renderBody()}
          {_renderFooter()}
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalExerciseScreen);
