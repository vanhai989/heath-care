import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './AccountScreen.style';
import {IC_PEOPLE, ICON_SETTING, IC_LOGOUT} from '../../../assets';
import AvatarItem from '../../../components/AvatarItem';
import {Setting} from '../../../constants/AccountScreen';
import AccountScreenItem from '../../../components/AccountScreenItem';
import {WelComeModel, UserModel} from '../../../models';
import checkMuscle from '../../../utils/checkMuscle';
import physicalState from '../../../utils/physicalState';
import {ACCOUNT_SCREEN_LIST} from '../../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {setLogin} from '../../../redux/actions/auth';
import {clearUser} from '../../../redux/actions/User';
import {clearWelcome} from '../../../redux/actions/welcome';
import {clearTimeExercise} from '../../../redux/actions/exercise';

interface Props {
  navigation: any;
}
const AccountScreen = (props: Props) => {
  const {navigation} = props;
  //redux
  const dispatch = useDispatch();
  const welcome: WelComeModel = useSelector((state: any) => state.welcome);
  const user: UserModel = useSelector((state: any) => state.user);
  const personals = [
    {
      id: 1,
      title: 'Chỉnh Sửa Thông tin cá nhân',
      status: '',
      code: ACCOUNT_SCREEN_LIST.ACCOUNT,
    },
    {
      id: 2,
      title: 'Thể trạng',
      status: physicalState.check(welcome.physicalState.key),
      code: ACCOUNT_SCREEN_LIST.PHYSICAL_STATE,
    },
    {
      id: 3,
      title: 'Vùng cần giảm',
      status: checkMuscle.boolToString(welcome).title,
      code: ACCOUNT_SCREEN_LIST.MUSCLE,
    },
    {
      id: 4,
      title: 'Lịch tập luyện',
      status: '',
      code: ACCOUNT_SCREEN_LIST.EXERCISE_SCHEDULE,
    },
  ];

  const _onPressItem = (item: {
    title: string;
    code: string;
    status?: string;
  }) => {
    switch (item.code) {
      case ACCOUNT_SCREEN_LIST.MUSCLE:
        return navigation.navigate('WelcomeMuscleGroupScreen', {
          code: true,
        });
      case ACCOUNT_SCREEN_LIST.PHYSICAL_STATE:
        return navigation.navigate('WelcomePhysicalStateScreen', {
          code: true,
        });
      case ACCOUNT_SCREEN_LIST.EXERCISE_SCHEDULE:
        return navigation.navigate('ExerciseScheduleScreen');
      case ACCOUNT_SCREEN_LIST.ACCOUNT:
        return navigation.navigate('EditAccountScreen');
      case ACCOUNT_SCREEN_LIST.LIST_EXERCISE:
        return navigation.navigate('ListWorkOutScreen');
      default:
        return null;
    }
  };

  const _onChangePassword = () => {
    navigation.navigate('ChangePasswordScreen');
  };

  const _renderHeader = () => (
    <View style={styles.wrapHeader}>
      <View>
        <Text style={styles.titleHeader}>Thông tin cá nhân</Text>
        <View style={styles.line} />
      </View>
    </View>
  );

  const _renderAvatar = () => {
    return (
      <View style={styles.avatarContainer}>
        <AvatarItem source={user.avatar} disabled />
        <Text style={styles.name}>{user.full_name}</Text>
      </View>
    );
  };

  const _renderPersonal = () => (
    <View style={styles.personal}>
      <View style={styles.title}>
        <Image
          source={IC_PEOPLE}
          resizeMode="cover"
          style={styles.peopleIcon}
        />
        <Text style={styles.titleText}>Cá nhân</Text>
      </View>
      <View style={styles.contentContainer}>
        {personals.map((val) => {
          return <AccountScreenItem onPressItem={_onPressItem} data={val} />;
        })}
      </View>
    </View>
  );

  const _renderSetting = () => (
    <View style={styles.personal}>
      <View style={styles.title}>
        <Image
          source={ICON_SETTING}
          resizeMode="cover"
          style={styles.peopleIcon}
        />
        <Text style={styles.titleText}>Cài đặt và thông tin chung</Text>
      </View>
      <View style={styles.contentContainer}>
        {Setting.map((val) => (
          <AccountScreenItem
            onChangePassword={_onChangePassword}
            onPressItem={_onPressItem}
            data={val}
          />
        ))}
      </View>
    </View>
  );

  const _onPressLogout = async () => {
    await dispatch(setLogin(true));
    dispatch(clearUser());
    dispatch(clearWelcome());
    dispatch(clearTimeExercise());
    navigation.reset({
      index: 0,
      routes: [{name: 'AuthStack'}],
    });
  };

  const _renderSignOut = () => (
    <TouchableOpacity onPress={_onPressLogout} style={styles.signOut}>
      <Image source={IC_LOGOUT} resizeMode="cover" style={styles.logoutIcon} />
      <Text style={styles.titleText}>Đăng xuất</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <ScrollView style={styles.body}>
        {_renderAvatar()}
        {_renderPersonal()}
        {_renderSetting()}
        {_renderSignOut()}
      </ScrollView>
    </View>
  );
};
export default AccountScreen;
