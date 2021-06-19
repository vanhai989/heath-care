import API from './configAPI';

export default {
  createFood(params: FormData) {
    const url = 'diets/food';
    return API.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  DietSearch(params: {
    search_text: string;
    category: string;
    limit: number;
    page: number;
  }) {
    const url = '/diets/search/';
    return API.get(url, {
      params: {
        search_text: params.search_text,
        category: params.category,
        limit: params.limit,
        page: params.page,
      },
    });
  },
  todayDietsFoods(params: {
    date: string;
    menu: string;
    limit: number;
    page: number;
  }) {
    const url = '/diets/foods/';
    return API.get(url, {
      params: {
        date: params.date,
        menu: params.menu,
        limit: params.limit,
        page: params.page,
      },
    });
  },
  otherDiet(params: {category: string; limit: number; page: number}) {
    const url = '/diets/other-food';
    return API.get(url, {
      params: {
        category: params.category,
        limit: params.limit,
        page: params.page,
      },
    });
  },
  dietDetail(params: {food_id: number}) {
    const url = `/diets/${params.food_id}`;
    return API.get(url);
  },
  dietsLike(params: {food_id: number; like_flag: number}) {
    const url = '/diets/like/';
    return API.post(url, params);
  },
  dietRating(params: {food_id: number; star: number}) {
    const url = '/diets/rating/';
    return API.post(url, params);
  },
  finishedEating(params: {menu_code: string; dow: string}) {
    const url = '/diets/finished-eating';
    return API.post(url, params);
  },
  changeDiets(params: {
    food_delete_ids: number[];
    food_add_ids: number[];
    dow: string;
    menu_code: string;
  }) {
    const url = '/diets/change-food';
    return API.post(url, params);
  },
};
