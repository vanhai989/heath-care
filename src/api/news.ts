import API from './configAPI';

export interface LikeRequest {
  news_id: number;
  like: boolean;
}

export interface ViewRequest {
  news_id: number;
}

export default {
  getNews(params: {page: number; limit: number}) {
    const url = '/news';
    return API.get(url, {
      params,
    });
  },

  likeNews(params: LikeRequest) {
    const url = '/news/like';
    return API.post(url, params);
  },

  viewNews(params: ViewRequest) {
    const url = '/news/view';
    return API.post(url, params);
  },

  getNewsDetail(newsId: number) {
    const url = `/news/${newsId}`;
    return API.get(url);
  },
};
