import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {logOutUser} from '../actions/logActions';

let Logout;

Logout= class extends React.Component {
    componentWillMount () {
        this.props.dispatch(logOutUser());        
    }

    render () {
        return null;
    }
};

export default connect()(Logout);