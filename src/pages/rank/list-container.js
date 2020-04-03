import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './list.js';
import * as actionRank from '../../models/action-creators/action-rank.js';

function mapStateToProps(state) {
  return {
    list: state._rank.rankData,
    loading: state._rank.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getRankData: actionRank.getRankData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
