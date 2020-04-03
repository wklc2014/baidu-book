import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './input.js';
import * as actionSearch from '../../models/action-creators/action-search.js';

function mapStateToProps(state) {
  return {
    keywords: state._search.keywords,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateKeyWords: actionSearch.updateKeyWords,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
