import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './list.js';
import * as actionPick from '../../models/action-creators/action-pick.js';

function mapStateToProps(state) {
  return {
    list: state._pick.list,
    loading: state._pick.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getChoiceData: actionPick.getChoiceData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
