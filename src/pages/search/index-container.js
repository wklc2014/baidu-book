import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './index.js';
import * as actionSearch from '../../models/action-creators/action-search.js';

function mapStateToProps(state) {
  return {
    list: state._search.wordList,
    keywords: state._search.keywords,
    loading: state._search.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSearchData: actionSearch.getSearchData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
