import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './DetailBoardActions';

import Component from './DetailBoard';

function mapStateToProps(state) {
  const {
    boardInfo
  } = state;

  return {
    boardInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
