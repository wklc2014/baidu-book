import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './detail.js';
import * as actionCate from '../../models/action-creators/action-cate.js';

function mapStateToProps(state) {
  return {
    list: state._cate.novelList,
    loading: state._cate.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCateDetail: actionCate.getCateDetail,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
