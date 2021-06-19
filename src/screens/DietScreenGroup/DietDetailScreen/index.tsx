import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import styles from './DietDetailScreen.style';
import {useRoute} from '@react-navigation/native';
import {
  IC_ARROW_BACK,
  IC_KCAL,
  IC_STAR,
  IC_HEART,
  IC_CLOCK,
  IC_HOLLOW_HEART,
  IC_EMPTY_STAR,
} from '../../../assets';
import Header from '../../../components/Header';
import API from '../../../api/diets';
import LoaderIndicator from '../../../components/LoaderIndicator';
import {AirbnbRating} from 'react-native-ratings';
import EventBus from '../../../services/EventBus';
import {DIETS_TODAY} from '../../../constants/diets';

interface Props {
  navigation: any;
}

type DietDetail = {
  calo: number;
  description: string;
  heart: number;
  id: number;
  image: string;
  is_like: number;
  name: string;
  star_avg: number;
  user_star: number;
};

const defaultData = {
  calo: 0,
  description: '',
  heart: 0,
  id: 0,
  image: '',
  is_like: 0,
  name: '',
  star_avg: 0,
  user_star: 0,
};

const DietDetailScreen = (props: Props) => {
  const {navigation} = props;
  const route: any = useRoute();
  const food_id: number = route.params.food_id ? route.params.food_id : 1;
  const type: string = route.params.type ? route.params.type : DIETS_TODAY;
  const [data, setData] = useState<DietDetail>(defaultData);
  const [isLike, setIsLike] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isReload, setReload] = useState(false);
  const [isShowStar, setShowStar] = useState(false);
  const [heart, setHeart] = useState(0);

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const initData = async () => {
    const params = {
      food_id: food_id,
    };
    try {
      setIsLoading(true);
      const res = await API.dietDetail(params);
      setData(res.data);
      setIsLike(res.data.is_like ? res.data.is_like : 0);
      setShowStar(res.data.user_star > 0);
      setHeart(res.data.heart);
    } catch (error) {
      Alert.alert('Không có kết nối Internet', 'xin vui lòng thử lại');
    } finally {
      setIsLoading(false);
    }
  };

  const _renderStar = (key: number) => {
    switch (key) {
      case 1:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
          </View>
        );
      case 2:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
          </View>
        );
      case 3:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
          </View>
        );
      case 4:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
          </View>
        );
      case 5:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
          </View>
        );
      default:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
            <Image source={IC_STAR} style={styles.starHollowSum} />
          </View>
        );
    }
  };

  const dietLike = async () => {
    setReload(true);
    const params = {
      food_id: food_id,
      like_flag: isLike === 0 ? 1 : 0,
    };
    try {
      await API.dietsLike(params);
      if (isLike === 0) {
        setHeart(heart + 1);
        setIsLike(1);
      } else {
        setIsLike(0);
        setHeart(heart - 1);
      }
    } catch (error) {
      Alert.alert('Không có kết nối mạng', 'Xin vui lòng thử lại');
    }
  };

  const dietRating = async (_star: number) => {
    const params = {
      food_id: food_id,
      star: _star,
    };
    try {
      await API.dietRating(params);
      setShowStar(true);
    } catch (error) {}
  };

  const ratingCompleted = (rating: number) => {
    setReload(true);
    dietRating(rating);
    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  };

  const _setRate = () => {
    setModalVisible(true);
  };

  const _goBack = () => {
    if (isReload) {
      EventBus.fireEvent(type);
    }
    navigation.goBack();
  };

  const _renderHeaderLeft = () => (
    <TouchableOpacity onPress={_goBack} style={styles.horizontal}>
      <Image source={IC_ARROW_BACK} style={styles.iconBack} />
      <Text style={styles.back}>Quay lại</Text>
    </TouchableOpacity>
  );

  const _renderCenter = () => (
    <View style={styles.textContainer}>
      <Text style={styles.titleHeader}>Công thức</Text>
      <View style={styles.line} />
      <View style={styles.empty} />
    </View>
  );

  const _renderHeader = () => (
    <Header renderHeaderLeft={_renderHeaderLeft} renderCenter={_renderCenter} />
  );

  const _renderTitleLine = () => (
    <View style={styles.titleLine}>
      <View style={styles.wrape_rate}>
        <Image source={IC_KCAL} resizeMode="contain" style={styles.iconFire} />
        <Text style={styles.normalFont}> {data.calo} kcal </Text>
        {_renderStar(data.star_avg)}
      </View>
      <View style={styles.itemRight}>
        <Image
          source={IC_HEART}
          resizeMode="contain"
          style={styles.iconHeart}
        />
        <Text style={styles.heartText}>{heart}</Text>
      </View>
    </View>
  );

  const _renderTime = () => (
    <View style={styles.timelineContainer}>
      <View style={styles.clockContainer} />
      <View style={styles.itemContainer}>
        <Text style={styles.grayText}>Chế biến</Text>
        <View style={styles.centerText}>
          <Image
            source={IC_CLOCK}
            resizeMode="contain"
            style={styles.iconClock}
          />
        </View>
      </View>
      <TouchableOpacity onPress={dietLike} style={styles.itemContainer}>
        <Text style={styles.grayText}>Yêu thích</Text>
        <View style={styles.centerText}>
          {isLike === 1 ? (
            <Image
              source={IC_HEART}
              resizeMode="contain"
              style={styles.iconHeart}
            />
          ) : (
            <Image
              source={IC_HOLLOW_HEART}
              style={styles.iconHeart}
              resizeMode="contain"
            />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={_setRate} style={styles.itemContainer}>
        <Text style={styles.grayText}>Đánh giá</Text>
        <View style={styles.centerText}>
          <Image
            source={IC_EMPTY_STAR}
            style={[styles.iconStar, isShowStar && styles.reported]}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  const _renderDescription = () => (
    <View style={styles.descriptionContainer}>
      <Text style={styles.smallFont}>{data.description}</Text>
    </View>
  );

  const _renderModal = () => {
    return (
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={styles.wrap_modal}>
        <View style={styles.wrap_setStar}>
          <TouchableOpacity
            style={styles.wraper_close_modal}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.close_modal}>X</Text>
          </TouchableOpacity>
          <AirbnbRating
            count={5}
            defaultRating={data.user_star}
            size={30}
            showRating={false}
            onFinishRating={ratingCompleted}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <ScrollView style={styles.body}>
        <Text style={styles.nameDiet}>{data.name}</Text>
        {_renderTitleLine()}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: data.image}}
            resizeMode="stretch"
            style={styles.image}
          />
        </View>
        {_renderTime()}
        {_renderDescription()}
      </ScrollView>
      <LoaderIndicator isLoading={isLoading} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        {_renderModal()}
      </Modal>
    </View>
  );
};
export default DietDetailScreen;
