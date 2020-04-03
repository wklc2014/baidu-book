import { combineReducers } from 'redux';
import reducer_cate from './reducer-cate.js';
import reducer_rank from './reducer-rank.js';
import reducer_bag from './reducer-bag.js';
import reducer_search from './reducer-search.js';
import reducer_pick from './reducer-pick.js';

const rootReducer = combineReducers({
    _cate: reducer_cate,
    _rank: reducer_rank,
    _bag: reducer_bag,
    _search: reducer_search,
    _pick: reducer_pick,
});

export default rootReducer;
