import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './list.js';
import * as actionBag from '../../models/action-creators/action-bag.js';

function mapStateToProps(state) {
  return {
    list: state._bag.novelList,
    loading: state._bag.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBagData: actionBag.getBagData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
