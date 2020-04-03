import * as services from '../services/index.js';
import ACTION_TYPES from '../action-types/index.js';

export function getRankData() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.RANK_LOADING,
      payload: true,
    })

    services.getRankData().then(resp => {

      dispatch({
        type: ACTION_TYPES.RANK_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data.rankData : [];

      dispatch({
        type: ACTION_TYPES.RANK_DATA,
        payload: {
          rankData: data,
        }
      })

    });

  }
}

export function getRankDetailData() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.RANK_LOADING,
      payload: true,
    })

    services.getRankDetailData().then(resp => {

      dispatch({
        type: ACTION_TYPES.RANK_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data.novelList : [];

      dispatch({
        type: ACTION_TYPES.RANK_DATA,
        payload: {
          novelList: data,
        }
      })

    });

  }
}
