import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './SighUpActions';

import Component from './SIghUp';

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
