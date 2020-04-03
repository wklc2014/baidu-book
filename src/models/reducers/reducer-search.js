import ACTION_TYPES from '../action-types/index.js';

function func_loading(state, { payload }) {
  return { ...state, loading: payload };
}

function func_data(state, { payload }) {
  return { ...state, ...payload };
}

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.SEARCH_LOADING:
      return func_loading(state, action);

    case ACTION_TYPES.SEARCH_DATA:
      return func_data(state, action);

    default:
      return state;
  }
}
