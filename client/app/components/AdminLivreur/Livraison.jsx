import React, {Component, PropTypes} from 'react';
import {Dialog,FlatButton} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {push} from 'react-router-redux';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

export default class Livraison extends Component {	

	handleClose() {
		this.props.dispatch(push('/'));
	}

	constructor(props) {
	    super(props);
	    this.state = {
	    	open: true,
 		};
	}
  	
	render() {		
	  const actions = [
	      <FlatButton
        	label="Valider"
        	primary={true}
        	onTouchTap={this.handleClose.bind(this)}
      	/>,
    	];
		return (
			 <Dialog
		          title="Votre référence de livraison a été enregistrée"
		          actions={actions}
		          actionsContainerStyle={{textAlign : 'center'}}
		          modal={true}
		          contentStyle={customContentStyle}
		          open={this.state.open}
		        >
		      	Le code à fournir au livreur est : <span style={{fontSize:'40px'}}>{this.props.params.code}</span>
		        </Dialog>
		);
	}
} 

export default connect()(Livraison);