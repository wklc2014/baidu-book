import * as services from '../services/index.js';
import ACTION_TYPES from '../action-types/index.js';

export function getChoiceData() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.PICK_LOADING,
      payload: true,
    })

    services.getChoiceData().then(resp => {

      dispatch({
        type: ACTION_TYPES.PICK_LOADING,
        payload: false,
      })

      const data = resp.success ? resp.data : [];

      dispatch({
        type: ACTION_TYPES.PICK_DATA,
        payload: {
          list: data,
        }
      })

    });

  }
}
