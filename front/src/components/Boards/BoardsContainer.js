import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './BoardsActions';

import Component from './Boards';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
