import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import styles from './NewsItem.style';
import FastImage from 'react-native-fast-image';
import {NewsModel} from '../../models';
import {IC_HEART, IC_HOLLOW_HEART, IC_MORE} from '../../assets';
import api from '../../api';
import {LikeRequest} from '../../api/news';
import HTML from 'react-native-render-html';
interface Props {
  data: NewsModel;
  onPress: (id: number, total_views: number) => void;
}

const NewsItem = (props: Props) => {
  const {data, onPress} = props;
  // state
  const [like, setLike] = useState(Boolean(+data.like_flag));
  const [numLike, setNumLike] = useState(+data.total_like);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLike(Boolean(+data.like_flag));
    setNumLike(+data.total_like);
  }, [data]);

  const _renderImageWidthFive = (imageList: string) => {
    const dataImage = imageList.split(',');
    const isGreaterThanFive = dataImage.length > 5;
    return (
      <View style={styles.wrapImage}>
        <View style={styles.imageTop}>
          <FastImage source={{uri: dataImage[0]}} style={styles.ImageTopLeft} />
          <FastImage
            source={{uri: dataImage[1]}}
            style={styles.ImageTopRight}
          />
        </View>
        <View style={styles.imageBottom}>
          <FastImage
            source={{uri: dataImage[2]}}
            style={styles.ImageBottomLeft}
          />
          <FastImage
            source={{uri: dataImage[3]}}
            style={styles.ImageBottomLeft}
          />
          <View style={styles.wrapImagelast}>
            <FastImage
              source={{uri: dataImage[4]}}
              style={styles.ImageBottomRight}
            />
            {isGreaterThanFive && (
              <View style={styles.wrapMore}>
                <Text style={styles.more}>+{dataImage.length - 5}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  const _renderImageWidthFour = (imageList: string) => {
    const dataImage = imageList.split(',');
    return (
      <View style={styles.wrapImage}>
        <View style={styles.imageTop}>
          <FastImage
            source={{uri: dataImage[0]}}
            style={styles.ImageBottomLeft}
          />
          <FastImage
            source={{uri: dataImage[1]}}
            style={styles.ImageBottomRight}
          />
        </View>
        <View style={styles.imageBottom}>
          <FastImage
            source={{uri: dataImage[2]}}
            style={styles.ImageBottomLeft}
          />
          <FastImage
            source={{uri: dataImage[3]}}
            style={styles.ImageBottomRight}
          />
        </View>
      </View>
    );
  };

  const _renderImageWidthThree = (imageList: string) => {
    const dataImage = imageList.split(',');
    return (
      <View style={styles.wrapImage}>
        <View style={styles.imageTop}>
          <FastImage
            source={{uri: dataImage[0]}}
            style={styles.ImageTopRight}
          />
        </View>
        <View style={styles.imageBottom}>
          <FastImage
            source={{uri: dataImage[1]}}
            style={styles.ImageBottomLeft}
          />
          <FastImage
            source={{uri: dataImage[2]}}
            style={styles.ImageBottomRight}
          />
        </View>
      </View>
    );
  };

  const _renderImageWidthTwo = (imageList: string) => {
    const dataImage = imageList.split(',');
    return (
      <View style={styles.wrapImage}>
        <View style={styles.imageTop}>
          <FastImage
            source={{uri: dataImage[0]}}
            style={styles.ImageTopRight}
          />
        </View>
        <View style={styles.imageBottom}>
          <FastImage
            source={{uri: dataImage[1]}}
            style={styles.ImageTopRight}
          />
        </View>
      </View>
    );
  };

  const _renderImageWidthOne = (imageList: string) => {
    const dataImage = imageList.split(',');
    return (
      <View style={styles.wrapImage}>
        <FastImage source={{uri: dataImage[0]}} style={styles.ImageOne} />
      </View>
    );
  };

  const _renderImage = () => {
    if (data.image_url_list) {
      switch (data.image_url_list.split(',').length) {
        case 0:
          return null;
        case 1:
          return _renderImageWidthOne(data.image_url_list);
        case 2:
          return _renderImageWidthTwo(data.image_url_list);
        case 3:
          return _renderImageWidthThree(data.image_url_list);
        case 4:
          return _renderImageWidthFour(data.image_url_list);
        default:
          return _renderImageWidthFive(data.image_url_list);
      }
    }
    return null;
  };

  const _renderHeart = () => (
    <View style={styles.heart}>
      <View style={styles.horizontal}>
        <Image
          resizeMode="contain"
          source={IC_HEART}
          style={styles.icon_heart}
        />
        <Text style={styles.title_heart}>{numLike}</Text>
      </View>
      <Text style={styles.count_view}>{data.total_views} lượt xem</Text>
    </View>
  );

  const _addLike = () => {
    setLike(!like);
    if (like) {
      setNumLike(Number(numLike) - 1);
    } else {
      setNumLike(Number(numLike) + 1);
    }
    const param: LikeRequest = {
      news_id: data.id,
      like: !like,
    };
    try {
      return api.news.likeNews(param);
    } catch (error) {
      Alert.alert('Không có kết nối mạng', 'Xin vui lòng thử lại');
    }
  };

  const _renderMore = () => (
    <View style={styles.wrapMoreView}>
      <TouchableOpacity style={styles.horizontal} onPress={_addLike}>
        <Image
          resizeMode="contain"
          source={like ? IC_HEART : IC_HOLLOW_HEART}
          style={[styles.icon_love, like && styles.liked]}
        />
        <Text style={[styles.title_love, like && styles.likeText]}>
          Yêu thích
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.horizontal}>
        <Image resizeMode="contain" source={IC_MORE} style={styles.icon_more} />
        <Text style={styles.title_love}>Xem chi tiết</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <TouchableOpacity
      onPress={() => onPress(data.id, data.total_views)}
      style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      {_renderImage()}
      <HTML
        html={data.description}
        imagesMaxWidth={Dimensions.get('window').width}
        containerStyle={styles.descriptionContainer}
      />
      {_renderHeart()}
      {_renderMore()}
    </TouchableOpacity>
  );
};
export default NewsItem;
