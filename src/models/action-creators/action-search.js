import * as services from '../services/index.js';
import ACTION_TYPES from '../action-types/index.js';

export function getSearchData() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.SEARCH_LOADING,
      payload: true,
    })

    services.getSearchData().then(resp => {

      dispatch({
        type: ACTION_TYPES.SEARCH_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data.wordList : [];

      dispatch({
        type: ACTION_TYPES.SEARCH_DATA,
        payload: {
          wordList: data,
        }
      })

    });

  }
}
export function getSearchResultData() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.SEARCH_LOADING,
      payload: true,
    })

    services.getSearchResultData().then(resp => {

      dispatch({
        type: ACTION_TYPES.SEARCH_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data.novelList : [];

      dispatch({
        type: ACTION_TYPES.SEARCH_DATA,
        payload: {
          novelList: data,
        }
      })

    });

  }
}

export function updateKeyWords(text) {
  return {
    type: ACTION_TYPES.SEARCH_DATA,
    payload: {
      keywords: text,
    }
  }
}
