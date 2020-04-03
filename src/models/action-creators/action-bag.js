import * as services from '../services/index.js';
import ACTION_TYPES from '../action-types/index.js';


export function getBagData() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.BAG_LOADING,
      payload: true,
    })

    services.getBagData().then(resp => {

      dispatch({
        type: ACTION_TYPES.BAG_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data.novelList : [];

      dispatch({
        type: ACTION_TYPES.BAG_DATA,
        payload: {
          novelList: data,
        }
      })

    });

  }
}
