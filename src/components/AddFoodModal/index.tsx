/* eslint-disable radix */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Platform,
  ImageBackground,
} from 'react-native';
import styles from './AddFoodModal.style';
import {CAMERA} from '../../assets';
import ImagePicker from 'react-native-image-picker';
import API from '../../api/diets';
import LoaderIndicator from '../LoaderIndicator';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onRefresh: () => void;
}

const options = {
  title: 'Select diet Food',
  storageOptions: {
    skipBackup: true,
    path: 'images',
    maxWidth: 512,
    maxHeight: 512,
  },
};

const AddFoodModal = (props: Props) => {
  const {visible, onCancel, onRefresh} = props;
  const [foodName, setFoodName] = useState('');
  const [calo, setCalo] = useState(0);
  const [descriptions, setDescriptions] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const _cancel = () => {
    onCancel();
  };
  const _save = async () => {
    if (image === '') {
      return Alert.alert('Hình ảnh món ăn không được trống');
    }
    if (foodName === '') {
      return Alert.alert('Tên món ăn không được trống');
    }
    if (calo === 0) {
      return Alert.alert('Calo không được trống');
    }
    const formData = new FormData();
    formData.append('name', foodName);
    formData.append('calo', calo);
    formData.append('description', descriptions);
    if (image !== '') {
      formData.append('image', {
        name: `${foodName}`,
        type: 'image/jpeg',
        uri: Platform.OS === 'android' ? image : image.replace('file://', ''),
      });
    }
    try {
      setIsLoading(true);
      const res = await API.createFood(formData);
      console.log('res', res);
      Alert.alert('Món ăn đã được cập nhật');
      onRefresh();
    } catch (error) {
      Alert.alert('Không có kết nối Internet', 'xin vui lòng thử lại');
    } finally {
      setIsLoading(false);
      setImage('');
      setFoodName('');
      setDescriptions('');
      setCalo(0);
      onCancel();
    }
  };

  const _onPressAvatarItem = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        setImage(response.uri);
      }
    });
  };

  const _handleNameFood = (text: string) => {
    setFoodName(text);
  };

  const _handleCalo = (calo: string) => {
    setCalo(parseInt(calo));
  };
  const _handleDescriptions = (text: string) => {
    setDescriptions(text);
  };
  const _renderHeader = () => <View style={styles.header} />;

  const _renderTitle = () => (
    <View style={styles.group_header}>
      <TouchableOpacity onPress={_cancel} style={styles.back}>
        <Text style={styles.cancel}>Hủy</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Thêm món ăn</Text>
      <TouchableOpacity onPress={_save} style={styles.save}>
        <Text style={styles.text_save}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );

  const _renderAddImageFood = () => (
    <TouchableOpacity style={styles.wraper_image} onPress={_onPressAvatarItem}>
      <ImageBackground source={{uri: image}} style={styles.wrapper_add_camera}>
        <Image style={styles.img_camera} source={CAMERA} resizeMode="contain" />
        <Text style={styles.text_add_img}>Thêm hình ảnh minh họa</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  const _renderCommonInput = (
    title: string,
    onChangeInput: (text: string) => void,
  ) => (
    <View style={styles.wrapper_textInput}>
      <Text style={styles.title_TextInput}>{title}</Text>
      <TextInput
        style={styles.style_textInput}
        onChangeText={(text: string) => onChangeInput(text)}
      />
    </View>
  );

  const _renderGroupInput = () => (
    <View>
      {_renderCommonInput('Tên món ăn', _handleNameFood)}
      {_renderCommonInput('Lượng calo', _handleCalo)}
      <Text style={styles.title_TextInput}>
        Mô tả <Text style={styles.no_requirement}>( không bắt buộc )</Text>
      </Text>
      <TextInput
        numberOfLines={6}
        style={styles.textarea}
        multiline
        onChangeText={(text: string) => _handleDescriptions(text)}
        editable
        textAlignVertical="top"
      />
    </View>
  );

  const _renderBody = () => (
    <View style={styles.body}>
      {_renderTitle()}
      <ScrollView style={styles.padding_body}>
        {_renderAddImageFood()}
        {_renderGroupInput()}
      </ScrollView>
    </View>
  );

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      hardwareAccelerated>
      <View style={styles.container}>
        {_renderHeader()}
        {_renderBody()}
      </View>
      <LoaderIndicator isLoading={isLoading} />
    </Modal>
  );
};
export default AddFoodModal;
