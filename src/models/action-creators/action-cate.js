import * as services from '../services/index.js';
import ACTION_TYPES from '../action-types/index.js';

export function getCateData() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.CATE_LOADING,
      payload: true,
    })

    services.getCateData().then(resp => {

      dispatch({
        type: ACTION_TYPES.CATE_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data.categoryData : [];

      dispatch({
        type: ACTION_TYPES.CATE_DATA,
        payload: {
          categoryData: data,
        }
      })

    });

  }
}

export function getCateDetail() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.CATE_LOADING,
      payload: true,
    })

    services.getCateDetail().then(resp => {

      dispatch({
        type: ACTION_TYPES.CATE_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data.novelList : [];

      dispatch({
        type: ACTION_TYPES.CATE_DATA,
        payload: {
          novelList: data,
        }
      })

    });

  }
}
