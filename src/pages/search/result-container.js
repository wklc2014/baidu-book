import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './result.js';
import * as actionSearch from '../../models/action-creators/action-search.js';

function mapStateToProps(state) {
  return {
    list: state._search.novelList,
    keywords: state._search.keywords,
    loading: state._search.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSearchResultData: actionSearch.getSearchResultData,
    updateKeyWords: actionSearch.updateKeyWords,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
