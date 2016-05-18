import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import SignupForm from './SignupForm.jsx';

class Signup extends Component {

	handleSubmit(data) {
		console.log('Submission received!', data);
		this.props.dispatch(initialize('signupForm', {})); // clear form todo
	}

	render() {
		return (
			<SignupForm  submitParent={this.handleSubmit.bind(this)}/>
		);
	}

}

export default connect()(Signup);