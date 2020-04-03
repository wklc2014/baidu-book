import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './detail.js';
import * as actionRank from '../../models/action-creators/action-rank.js';

function mapStateToProps(state) {
  return {
    list: state._rank.novelList,
    loading: state._rank.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getRankDetailData: actionRank.getRankDetailData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
