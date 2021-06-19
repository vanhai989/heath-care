import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  ImageBackground,
  ScrollView,
  processColor,
  RefreshControl,
} from 'react-native';
import styles from './HomeScreen.style';
import {
  IC_EAT,
  IC_FIRE,
  IC_HEART_CIRCLE,
  IC_RULE,
  IC_WEIGHT,
  IC_UP_DOWN,
  IC_CONSUME,
  IC_BMI,
  IC_BMI_BAR,
  IC_BMI_INDEX,
  IC_CHART_CIRCLE,
} from '../../assets';
import {
  IN,
  OUT,
  HEIGHT,
  WEIGHT,
  SHOW_WEIGHT_HEIGHT_MODAL,
} from '../../constants';
import {Colors} from '../../themes';
import {LineChart} from 'react-native-charts-wrapper';
import WeightHeightModal from '../../components/WeightHeightModal';
import {WelComeModel, UserModel} from '../../models';
import {useSelector, useDispatch} from 'react-redux';
import {setWeight, setHeight, clearWelcome} from '../../redux/actions/welcome';
import {setLogin, setSplash} from '../../redux/actions/auth';
import {clearUser} from '../../redux/actions/User';
import FormatAvatar from '../../utils/FormatAvatar';
import {loginSuccess} from '../../redux/actions/User';
import API from '../../api';
import moment from 'moment';
import LoaderIndicator from '../../components/LoaderIndicator';
import EventBus from '../../services/EventBus';
import {REFRESH_HOME} from '../../constants';
import {clearTimeExercise} from '../../redux/actions/exercise';

interface dayType {
  x: number;
  y: number;
}
interface Props {
  navigation: any;
}

const defaultData = {
  calo_in: 0,
  calo_out: 0,
  calo_total_week: [],
};

interface totalWeekType {
  calo_out: number;
}

interface dataType {
  calo_in: number;
  calo_out: number;
  calo_total_week: totalWeekType[];
}

const HomeScreen = (props: Props) => {
  const {navigation} = props;
  //redux
  const dataWelCome: WelComeModel = useSelector((state: any) => state.welcome);
  const user: UserModel = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  //state
  const [charts, setChart] = useState<dayType[]>([]);
  const [data, setData] = useState(defaultData);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    _initData();
    _removeStack();
    const listener = async () => _initData();
    EventBus.addListener(REFRESH_HOME, listener);
    return () => EventBus.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _removeStack = async () => {
    // loại bỏ màn login, splash khỏi stack
    await dispatch(setLogin(false));
    await dispatch(setSplash(false));
  };

  const _checkDay = (val: dataType) => {
    let listDate: dayType[] = [];
    for (let index = 0; index < val.calo_total_week.length; index++) {
      listDate.push({
        x: index,
        y: val.calo_total_week[index].calo_out,
      });
    }
    setChart(listDate);
  };

  const _initData = async () => {
    const params = {
      from_date: moment().subtract(7, 'days').format('YYYY-MM-DD'),
      to_date: moment().format('YYYY-MM-DD'),
    };
    try {
      setLoading(true);
      const res = await API.user.home(params);
      setData(res.data);
      _checkDay(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const _renderAvatar = () => {
    return (
      <View style={styles.wrapAvatar}>
        <Image
          source={FormatAvatar.format(user.avatar)}
          style={styles.avatar}
        />
      </View>
    );
  };

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

  const _renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        {_renderAvatar()}
        <View style={styles.WapName}>
          <Text style={styles.hello}>Xin chào,</Text>
          <Text style={styles.name}>{user.full_name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={_onPressLogout} style={styles.headerRight}>
        <Text style={styles.logout}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );

  const _checkItemToday = (key: string) => {
    switch (key) {
      case IN:
        return {
          title: 'Nạp vào',
          icon: IC_EAT,
          color: Colors.blue2,
          content: data.calo_in ? data.calo_in : 0,
        };
      case OUT:
        return {
          title: 'Tiêu thụ',
          icon: IC_CONSUME,
          color: Colors.orange2,
          content: data.calo_out ? data.calo_out : 0,
        };
      default:
        return {
          title: 'Nạp vào',
          icon: IC_EAT,
          color: Colors.blue2,
          content: data.calo_in ? data.calo_in : 0,
        };
    }
  };

  const _renderTodayItem = (key: string) => {
    const Todays = _checkItemToday(key);
    return (
      <View style={[styles.todayItem, key === IN && styles.todayIn]}>
        <View style={styles.horizontal}>
          <Image
            resizeMode="contain"
            source={Todays.icon}
            style={[styles.iconTitleTodayItem, {tintColor: Todays.color}]}
          />
          <Text style={[styles.titleTodayItem, {color: Todays.color}]}>
            {Todays.title}
          </Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.contentToday}>{Todays.content}</Text>
          <Text style={styles.kcal}>Kcal</Text>
        </View>
      </View>
    );
  };

  const _renderTitleItem = (title: string, icon: ImageSourcePropType) => (
    <View style={styles.horizontal}>
      <Image source={icon} style={styles.iconFire} />
      <Text style={styles.titleToday}>{title}</Text>
    </View>
  );

  const _renderToday = () => (
    <View>
      {_renderTitleItem('Hôm nay', IC_FIRE)}
      <View style={styles.today}>
        {_renderTodayItem(IN)}
        {_renderTodayItem(OUT)}
      </View>
    </View>
  );

  const _onPressItemBodyIndex = (key: string) => {
    switch (key) {
      case HEIGHT:
        return EventBus.fireEvent(SHOW_WEIGHT_HEIGHT_MODAL, {
          visible: true,
          type: HEIGHT,
          value: dataWelCome.height,
        });
      case WEIGHT:
        return EventBus.fireEvent(SHOW_WEIGHT_HEIGHT_MODAL, {
          visible: true,
          type: WEIGHT,
          value: dataWelCome.weight,
        });
      default:
        return null;
    }
  };

  const _checkItemBodyIndex = (key: string) => {
    switch (key) {
      case HEIGHT:
        return {
          title: 'Chiều cao',
          icon: IC_RULE,
          color: Colors.accent_color,
          content: dataWelCome.height,
          unit: 'cm',
          onPress: () => _onPressItemBodyIndex(HEIGHT),
        };
      case WEIGHT:
        return {
          title: 'Cân nặng',
          icon: IC_WEIGHT,
          color: Colors.accent_color,
          content: dataWelCome.weight,
          unit: 'kg',
          onPress: () => _onPressItemBodyIndex(WEIGHT),
        };
      default:
        return {
          title: 'Cân nặng',
          icon: IC_WEIGHT,
          color: Colors.accent_color,
          content: dataWelCome.weight,
          unit: 'kg',
          onPress: () => null,
        };
    }
  };

  const _renderBodyIndexItem = (key: string) => {
    const BodyIndexs = _checkItemBodyIndex(key);
    return (
      <TouchableOpacity
        onPress={() => BodyIndexs.onPress()}
        style={[styles.todayItem, key === HEIGHT && styles.todayIn]}>
        <View style={styles.horizontal}>
          <Image
            resizeMode="contain"
            source={BodyIndexs.icon}
            style={[styles.iconTitleTodayItem, {tintColor: BodyIndexs.color}]}
          />
          <Text style={styles.titleBodyIndexItem}>{BodyIndexs.title}</Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.contentBodyIndexItem}>{BodyIndexs.content}</Text>
          <Text style={styles.unit}>{BodyIndexs.unit}</Text>
          <Image source={IC_UP_DOWN} style={styles.iconUpDown} />
        </View>
      </TouchableOpacity>
    );
  };

  const _renderBodyIndex = () => (
    <View style={styles.bodyIndex}>
      {_renderTitleItem('Chỉ số cơ thể', IC_HEART_CIRCLE)}
      <View style={styles.today}>
        {_renderBodyIndexItem(HEIGHT)}
        {_renderBodyIndexItem(WEIGHT)}
      </View>
      {_renderBMI()}
    </View>
  );

  const _renderLeftBmi = () => (
    <View style={styles.wrapLeftBmi}>
      <View style={styles.horizontal}>
        <Image source={IC_BMI} style={styles.iconBmi} />
        <Text style={styles.titleBmi}>BMI</Text>
      </View>
      <Text style={styles.contentBmi}>{_bmi()}</Text>
    </View>
  );

  const _checkBmi = (bmiKey: string | number) => {
    if (bmiKey < 18.5) {
      return {
        left: 10,
        title: 'Thiếu cân',
      };
    }
    if (bmiKey < 25) {
      return {
        left: 55,
        title: 'Bình thường',
      };
    }
    if (bmiKey < 30) {
      return {
        left: 100,
        title: 'Thừa cân',
      };
    }
    if (bmiKey <= 35) {
      return {
        left: 135,
        title: 'Béo phì',
      };
    }
    return {
      left: 170,
      title: 'Cực kỳ béo phì',
    };
  };

  const _renderBmiIndex = (contentBmi: {
    left: number | string;
    title: string;
  }) => (
    <ImageBackground
      resizeMode="contain"
      source={IC_BMI_INDEX}
      style={[styles.iconBmiIndex, {left: contentBmi.left}]}>
      <Text style={styles.contentBmiIndex}>{_bmi()}</Text>
    </ImageBackground>
  );

  const _bmi = () => {
    return parseFloat(
      (
        parseFloat(dataWelCome.weight) /
        Math.pow(parseFloat(dataWelCome.height) / 100, 2)
      ).toFixed(1),
    );
  };

  const _renderRightBmi = () => {
    const BMI = _checkBmi(_bmi());
    return (
      <View style={styles.wrapRightBmi}>
        <View style={styles.wrapBmiIndex}>{_renderBmiIndex(BMI)}</View>
        <Image
          resizeMode="contain"
          source={IC_BMI_BAR}
          style={styles.iconBmiBar}
        />
        <Text style={styles.normal}>{BMI.title}</Text>
      </View>
    );
  };

  const _renderBMI = () => (
    <View style={styles.bmi}>
      {_renderLeftBmi()}
      {_renderRightBmi()}
    </View>
  );

  const _onSelectPoint = () => {};

  const _renderChart = () => (
    <LineChart
      style={styles.chartLine}
      xAxis={{
        granularity: 10,
        drawLabels: false,
        position: 'BOTTOM',
        gridDashedLine: {
          lineLength: 0,
          spaceLength: 5,
        },
      }}
      yAxis={{
        left: {
          drawAxisLine: true,
          drawGridLines: false,
          axisMinimum: 0,
        },
        right: {enabled: false},
      }}
      pinchZoom={false}
      drawGridBackground={false}
      doubleTapToZoomEnabled={false}
      chartDescription={{text: ''}}
      autoScaleMinMaxEnabled={false}
      borderColor={processColor('white')}
      borderWidth={0}
      drawBorders={true}
      touchEnabled={true}
      dragEnabled={true}
      highlightPerTapEnabled={true}
      highlightPerDragEnabled={true}
      dragDecelerationEnabled={true}
      dragDecelerationFrictionCoef={0.99}
      keepPositionOnRotation={false}
      onSelect={_onSelectPoint}
      extraOffsets={{bottom: 10}}
      legend={{xEntrySpace: 10}}
      data={{
        dataSets: [
          {
            label: 'Lượng kcal giảm trong 7 ngày gần nhất',
            values: charts,
            config: {
              drawValues: false,
              color: processColor('#F2CB41'),
              fillColor: processColor('#F2CB41'),
              fillAlpha: 30,
              circleColor: processColor('#F2CB41'),
              drawFilled: true,
              drawHighlightIndicators: true,
              drawCircles: true,
              circleHoleColor: 10,
              circleRadius: 4,
              drawCubicIntensity: 12,
              drawCircleHole: true,
              xEntrySpace: 15,
            },
          },
        ],
      }}
    />
  );

  const _renderStatistical = () => (
    <View style={styles.statistical}>
      {_renderTitleItem('Thống kê', IC_CHART_CIRCLE)}
      <View style={styles.statisticalBody}>{_renderChart()}</View>
    </View>
  );

  const _onUpdate = (type: string, value: string) => {
    _onSubmit(type, value);
    switch (type) {
      case HEIGHT:
        return dispatch(setHeight(value));
      case WEIGHT:
        return dispatch(setWeight(value));
      default:
        return null;
    }
  };

  const _onSubmit = async (type: string, value: string) => {
    const formData = new FormData();
    switch (type) {
      case HEIGHT:
        formData.append('height', value);
        break;
      case WEIGHT:
        formData.append('weight', value);
        break;
      default:
        return null;
    }
    try {
      const res = await API.user.editAccount(formData);
      await dispatch(loginSuccess(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={_initData} />
        }
        style={styles.body}>
        {_renderToday()}
        {_renderBodyIndex()}
        {_renderStatistical()}
      </ScrollView>
      <WeightHeightModal onUpdate={_onUpdate} />
      <LoaderIndicator isLoading={isLoading} />
    </View>
  );
};
export default HomeScreen;
