import React from 'react';
import {View, Text} from 'react-native';
import styles from './WelcomeWeightHeightScreen.style';
import WelcomeHeader from '../../../components/WelcomeHeader';
import ButtonModal from '../../../components/ButtonModal';
import {IC_RULE, IC_WEIGHT} from '../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {setWeight, setHeight} from '../../../redux/actions/welcome';
import {WelComeModel} from '../../../models';
import {Colors} from '../../../themes';
import Picker from 'react-native-picker';
import {HEIGHT, WEIGHT} from '../../../constants';

interface Props {
  navigation: any;
}

const WelcomeWeightHeightScreen = (props: Props) => {
  const {navigation} = props;
  //redux
  const dispatch = useDispatch();
  const welcome: WelComeModel = useSelector((state: any) => state.welcome);
  const isEmptyHeight = welcome.height === '0';
  const isEmptyWeight = welcome.weight === '0';

  const _onContinue = () => {
    navigation.navigate('WelcomeTargetWeightScreen');
  };

  const _onPressHeight = () => {
    _showPicker(HEIGHT);
  };

  const _onPressWeight = () => {
    _showPicker(WEIGHT);
  };

  const _onPickerConfirm = (key: string, itemPicker: string[]) => {
    switch (key) {
      case HEIGHT:
        return dispatch(setHeight(itemPicker[0]));
      case WEIGHT:
        return dispatch(setWeight(itemPicker[0]));
      default:
        return null;
    }
  };

  const _showPicker = (key: string) => {
    let dataPicker: number[] = [];
    for (let i = 0; i < 300; i++) {
      dataPicker.push(i);
    }
    const value = dataPicker.find((item) =>
      key === HEIGHT
        ? item === parseInt(welcome.height, 10)
        : item === parseInt(welcome.weight, 10),
    );
    Picker.init({
      pickerFontSize: 30,
      pickerData: dataPicker,
      selectedValue: [value],
      onPickerConfirm: (data: any) => _onPickerConfirm(key, data),
      pickerCancelBtnText: 'Huỷ',
      pickerConfirmBtnText: 'Chọn',
      pickerTitleText: key === HEIGHT ? 'Chiều cao(cm)' : 'Cân nặng(kg)',
    });
    Picker.show();
  };

  return (
    <View style={styles.container}>
      <WelcomeHeader isBack onContinue={_onContinue} />
      <Text style={styles.title}>
        Tiếp theo hãy cho chúng tôi biết chiều cao cân nặng hiện tại của bạn.
      </Text>
      <View style={styles.wrapInput}>
        <ButtonModal
          onPress={_onPressHeight}
          icon={IC_RULE}
          value={isEmptyHeight ? 'Chiều cao' : welcome.height}
          styleTitle={{color: isEmptyHeight ? Colors.gray : Colors.black}}
        />
        <ButtonModal
          onPress={_onPressWeight}
          icon={IC_WEIGHT}
          style={styles.input}
          value={isEmptyWeight ? 'Cân nặng' : welcome.weight}
          styleTitle={{color: isEmptyWeight ? Colors.gray : Colors.black}}
        />
      </View>
    </View>
  );
};
export default WelcomeWeightHeightScreen;
