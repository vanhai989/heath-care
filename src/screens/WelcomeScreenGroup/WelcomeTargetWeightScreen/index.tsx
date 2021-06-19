import React from 'react';
import {View, Text} from 'react-native';
import styles from './WelcomeTargetWeightScreen.style';
import WelcomeHeader from '../../../components/WelcomeHeader';
import ButtonModal from '../../../components/ButtonModal';
import {IC_TARGET} from '../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {setTargetWeight} from '../../../redux/actions/welcome';
import {WelComeModel} from '../../../models';
import {Colors} from '../../../themes';
import Picker from 'react-native-picker';

interface Props {
  navigation: any;
}

const WelcomeTargetWeightScreen = (props: Props) => {
  const {navigation} = props;
  //redux
  const dispatch = useDispatch();
  const welcome: WelComeModel = useSelector((state: any) => state.welcome);
  const isEmptyWeight = welcome.targetWeight === '0';

  const _onContinue = () => {
    navigation.navigate('WelcomePhysicalStateScreen');
  };

  const _onPickerConfirm = (itemPicker: string[]) => {
    dispatch(setTargetWeight(itemPicker[0]));
  };

  const _onPressWeight = () => {
    let dataPicker: number[] = [];
    for (let i = 0; i < 300; i++) {
      dataPicker.push(i);
    }
    const value = dataPicker.find(
      (item) => item === parseInt(welcome.targetWeight, 10),
    );
    Picker.init({
      pickerFontSize: 30,
      pickerData: dataPicker,
      selectedValue: [value],
      onPickerConfirm: (data: any) => _onPickerConfirm(data),
      pickerCancelBtnText: 'Huỷ',
      pickerConfirmBtnText: 'Chọn',
      pickerTitleText: 'Mục tiêu cân nặng(kg)',
    });
    Picker.show();
  };

  return (
    <View style={styles.container}>
      <WelcomeHeader
        isBack
        onContinue={_onContinue}
        title="Mục tiêu cân nặng"
      />
      <Text style={styles.title}>Mục tiêu cân nặng của bạn là bao nhiêu?</Text>
      <View style={styles.wrapInput}>
        <ButtonModal
          onPress={_onPressWeight}
          icon={IC_TARGET}
          value={isEmptyWeight ? 'Mục tiêu cân nặng' : welcome.targetWeight}
          styleTitle={{color: isEmptyWeight ? Colors.gray : Colors.black}}
        />
        <Text style={styles.input}>
          Dựa trên chiều cao của bạn, chúng tôi đề xuất mục tiêu trong khoảng:
          55 kg đến 60 kg.
        </Text>
      </View>
    </View>
  );
};
export default WelcomeTargetWeightScreen;
