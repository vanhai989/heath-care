import API from './configAPI';

export default {
  exerciseRegimesArea(params: {area: string; page: number; limit: number}) {
    const url = '/exercise-regimes/area';
    return API.get(url, {
      params,
    });
  },
  exerciseRegimes(params: {date: string; page: number; page_size: number}) {
    const url = '/exercise-regimes';
    return API.get(url, {
      params,
    });
  },
  exerciseRegimesDetail(params: {
    exercise_id: number;
    date: string;
    page: number;
    page_size: number;
  }) {
    const url = `/exercise-regimes/${params.exercise_id}`;
    return API.get(url, {
      params: {
        page: params.page,
        page_size: params.page_size,
        date: params.date,
      },
    });
  },
  changeMuscle(params: {muscles: string[]}) {
    const url = '/exercise-regimes/muscle';
    return API.put(url, params);
  },
  finishedExercise(params: {exercise_id: number}) {
    const url = '/exercise-regimes/finish';
    return API.put(url, params);
  },
  finishedVideo(params: {exercise_id: number; video_id: number}) {
    const url = '/exercise-regimes/finish-video';
    return API.put(url, params);
  },
};
