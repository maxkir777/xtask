import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { history } from '../../store/configureStore'

class Logout extends Component {

    componentWillMount() {
        localStorage.removeItem('token')
        history.push('/')
    }

    render() {
        return null
    }
}


export default Logout
