import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
  Alert,
  Dimensions,
} from 'react-native';
import styles from './NewsDetailScreen.style';
import {BACK, IC_HOLLOW_HEART, IC_HEART} from '../../../assets';
import HTML from 'react-native-render-html';
import LoaderIndicator from '../../../components/LoaderIndicator';
import api from '../../../api';
import {NewsDetail} from '../../../models';
import {LikeRequest} from '../../../api/news';
import EventBus from '../../../services/EventBus';
import {REFRESH_NEWS} from '../../../constants';

interface Props {
  navigation: any;
  route: any;
}

const NewsDetailScreen = (props: Props) => {
  const {navigation, route} = props;
  //navigate Data
  const dataNavigation = route.params;
  //state
  const initData: NewsDetail = {
    description: '',
    id: 1,
    image_url_list: '',
    like_flag: '',
    title: '',
    total_like: '0',
    total_views: '0',
  };
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState(initData);
  const [totalLike, setTotalLike] = useState('0');
  const [like, setLike] = useState(false);
  const [PressLikeAction, setOnPressLike] = useState(false);
  const _goBack = () => {
    if (data.total_views > dataNavigation.total_views || PressLikeAction) {
      EventBus.fireEvent(REFRESH_NEWS, {});
    }
    navigation.goBack();
  };
  useEffect(() => {
    _initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _onLike = (likeStatus: boolean) => {
    if (likeStatus) {
      setTotalLike((+totalLike + 1).toString());
    } else {
      setTotalLike((+totalLike - 1).toString());
    }
    const param: LikeRequest = {
      news_id: dataNavigation.news_id,
      like: likeStatus,
    };
    try {
      return api.news.likeNews(param);
    } catch (error) {
      Alert.alert('Không có kết nối mạng', 'Xin vui lòng thử lại');
    }
  };

  const _initData = async () => {
    try {
      setIsLoading(true);
      const res = await api.news.getNewsDetail(dataNavigation.news_id);
      setData(res.data);
      setTotalLike(res.data.total_like);
      setLike(Boolean(+res.data.like_flag));
    } catch (error) {
      Alert.alert('Không có kết nối mạng', 'Xin vui lòng thử lại');
    } finally {
      setIsLoading(false);
    }
  };

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.wrapper_goBack}>
        <Image style={styles.icon_back} source={BACK} resizeMode="contain" />
        <Text style={styles.back}>Quay lại</Text>
      </TouchableOpacity>
      <View style={styles.group_center_header}>
        <Text style={styles.titleHeader}>Kiến thức</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.cascaded} />
    </View>
  );

  const _renderCommonGroupInfo = (img: ImageSourcePropType, text: string) => (
    <View style={styles.wrapper_item}>
      <Image style={styles.heart} source={img} />
      <Text style={styles.text_care}>{text}</Text>
    </View>
  );

  const _addLove = () => {
    setOnPressLike(true);
    setLike(!like);
    _onLike(!like);
  };

  const _renderLove = (text: string) => (
    <TouchableOpacity onPress={_addLove} style={styles.wrapper_item}>
      <Image
        style={[styles.heart, like && styles.liked]}
        source={like ? IC_HEART : IC_HOLLOW_HEART}
      />
      <Text style={[styles.text_care, like && styles.likeText]}>{text}</Text>
    </TouchableOpacity>
  );

  const _renderStatusPosts = () => (
    <View style={styles.wrapper_Status_posts}>
      {_renderLove('Yêu thích')}
      <View style={styles.wrapper_item_right}>
        {_renderCommonGroupInfo(IC_HEART, totalLike)}
        <Text style={styles.item_right}>{+data.total_views} Lượt xem</Text>
      </View>
    </View>
  );
  const _renderBody = () => (
    <View style={styles.body}>
      <View style={styles.wrapper_content}>
        <Text style={styles.titlePost}>{data.title}</Text>
        {_renderStatusPosts()}
        <ScrollView style={styles.paddingBottom}>
          <HTML
            html={data.description}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        </ScrollView>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      {_renderBody()}
      <LoaderIndicator isLoading={loading} />
    </View>
  );
};
export default NewsDetailScreen;
