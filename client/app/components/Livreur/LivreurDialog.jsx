import React, {Component, PropTypes} from 'react';
import {TextField,RaisedButton} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {submitCode} from '../../actions/livraisonsActions';


export default class LivreurDialog extends Component {	

	constructor(props) {
		super(props);
	}

	render() {	

		return (
			<div>
			</div>
		);
	}
} 



export default connect()(LivreurDialog);