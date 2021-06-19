import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  Alert,
  RefreshControl,
  ScrollView,
} from 'react-native';
import styles from './NewsScreen.style';
import NewsItem from '../../../components/NewsItem';
import {NewsModel} from '../../../models';
import API from '../../../api/news';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreSpinner from '../../../components/LoadMoreIndicator';
import EmptyItem from '../../../components/EmptyItem';
import EventBus from '../../../services/EventBus';
import {REFRESH_NEWS} from '../../../constants';

interface Props {
  navigation: any;
}

const NewsScreen = (props: Props) => {
  const {navigation} = props;
  const initData: any = [];
  const [data, setData] = useState(initData);
  const [loading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  let page = 1;
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    _initData();
    const listener = async () => await _initData();
    EventBus.addListener(REFRESH_NEWS, listener);
    return () => EventBus.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _initData = async (loadMore: boolean = false) => {
    const params = {
      page,
      limit: 5,
    };
    try {
      loadMore && setIsLoadMore(true);
      !loadMore && setIsLoading(true);
      const res = await API.getNews(params);
      loadMore ? setData([...data, ...res.data.data]) : setData(res.data.data);
      setNextPage(res.data.nextPage);
    } catch (e) {
      Alert.alert('Chưa có bài viết nào mới', 'Xin vui lòng thử lại');
    } finally {
      setIsLoading(false);
      setIsLoadMore(false);
    }
  };

  const _renderItem = ({item}: {item: NewsModel}) => (
    <NewsItem onPress={_onPressItem} data={item} />
  );

  const _onPressItem = (news_id: number, total_views: number) => {
    navigation.navigate('NewsDetailScreen', {
      news_id,
      total_views,
    });
  };

  const _onRefresh = () => {
    page = 1;
    _initData();
  };

  const onLoadMore = () => {
    if (nextPage) {
      page = page + 1;
      _initData(true);
    }
  };

  const _renderListNews = () => {
    if (data.length) {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          data={data}
          refreshing={false}
          onRefresh={_onRefresh}
          onEndReached={onLoadMore}
          onEndReachedThreshold={0.2}
        />
      );
    } else {
      return (
        <ScrollView
          style={styles.scrollViewContainer}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={_onRefresh} />
          }>
          <EmptyItem />
        </ScrollView>
      );
    }
  };

  const _renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.titleHeader}>Kiến thức</Text>
      <View style={styles.line} />
    </View>
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.body}>{_renderListNews()}</View>
      <LoaderIndicator isLoading={loading} />
      <LoadMoreSpinner loadMore={isLoadMore} />
    </View>
  );
};
export default NewsScreen;
