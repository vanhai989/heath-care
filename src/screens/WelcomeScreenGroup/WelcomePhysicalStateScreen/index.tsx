import React, {useState, useEffect} from 'react';
import {View, FlatList, ImageSourcePropType} from 'react-native';
import styles from './WelcomePhysicalStateScreen.style';
import WelcomeHeader from '../../../components/WelcomeHeader';
import PhysicalStateItem from '../../../components/PhysicalStateItem';
import {PhysicalState} from '../../../mocks';
import deepClone from '../../../utils/deepClone';
import {useDispatch, useSelector} from 'react-redux';
import {setPhysicalState} from '../../../redux/actions/welcome';
import {WelComeModel} from '../../../models';
import {loginSuccess} from '../../../redux/actions/User';
import API from '../../../api';

interface Props {
  navigation: any;
  route: any;
}
export interface PhysicalStateType {
  id: number;
  title: string;
  icon: ImageSourcePropType;
  content: string;
  isActive: boolean;
  key: string;
}

const WelcomePhysicalStateScreen = (props: Props) => {
  const {navigation, route} = props;
  const code = route.params ? route.params.code : false;
  //redux
  const dispatch = useDispatch();
  const data: WelComeModel = useSelector((state: any) => state.welcome);
  //state
  const [physicalStates, setPhysicalStates] = useState<PhysicalStateType[]>(
    deepClone(PhysicalState),
  );

  useEffect(() => {
    _initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _initData = () => {
    physicalStates.map((e) => {
      if (e.id === data.physicalState.id) {
        e.isActive = true;
      } else {
        e.isActive = false;
      }
    });
    setPhysicalStates([...physicalStates]);
  };

  const _onContinue = () => {
    if (code) {
      return navigation.goBack();
    }
    navigation.navigate('WelcomeMuscleGroupScreen');
  };

  const _onPressItem = (item: PhysicalStateType) => {
    if (item.id !== data.physicalState.id) {
      physicalStates.map((e) => {
        if (e.id === item.id) {
          e.isActive = true;
        } else {
          e.isActive = false;
        }
      });
      dispatch(setPhysicalState(item));
      _onSubmit(item);
      setPhysicalStates([...physicalStates]);
    }
  };

  const _onSubmit = async (item: PhysicalStateType) => {
    const formData = new FormData();
    formData.append('physical', item.key);
    try {
      const res = await API.user.editAccount(formData);
      await dispatch(loginSuccess(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const _renderItem = ({item}: {item: PhysicalStateType}) => (
    <PhysicalStateItem onPress={_onPressItem} data={item} />
  );
  return (
    <View style={styles.container}>
      <WelcomeHeader
        rightText={code ? 'Hoàn thành' : 'Tiếp theo'}
        onContinue={_onContinue}
        isBack
        title="Thể lực"
      />
      <FlatList data={physicalStates} renderItem={_renderItem} />
    </View>
  );
};
export default WelcomePhysicalStateScreen;
