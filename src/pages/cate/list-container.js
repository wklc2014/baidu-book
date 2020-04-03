import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './list.js';
import * as actionCate from '../../models/action-creators/action-cate.js';

function mapStateToProps(state) {
  return {
    list: state._cate.categoryData,
    loading: state._cate.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCateData: actionCate.getCateData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
