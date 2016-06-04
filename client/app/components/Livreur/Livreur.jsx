import React, {Component, PropTypes} from 'react';
import {TextField,RaisedButton} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {submitCode} from '../../actions/livraisonsActions';

export const fieldsLivreurForm = [ 'code' ];

const submit = (values, dispatch) => {
  dispatch(submitCode(values.code));    
}

const validate = values => {
  const errors = {} 

  if (!values.code || values.code.trim() === '') {
    errors.code = 'Valeur obligatoire';
  } 
  
  return errors;
}


export default class Livreur extends Component {	

	constructor(props) {
		super(props);
	}

	render() {	
		const {fields: {code}, handleSubmit, resetForm, submitting} = this.props;
		return (
			<div>
				<div className="mainFormExterieur">
					<form onSubmit={handleSubmit(submit)}>
			            <TextField
	            			fullWidth={true}
	  						hintText="Code"		      					
	  						{...code}
	  						errorText={code.touched && code.error && <div>{code.error}</div>}/>
	  					<div className="center marginTop">
		          			<RaisedButton disabled={submitting} primary={true} label="Valider" className="marginRight" type="submit"/>
	          				<RaisedButton disabled={submitting} onClick={resetForm} className="marginRight" label="Annuler"/>                   
	          				<RaisedButton primary={true} label="Annuaire" fullWidth={true} />	
	        			</div>
	  				</form>	  							
				</div>					
			</div>
		);
	}
} 


Livreur.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default connect()(reduxForm({
  form : 'signIn',  
  fields : fieldsLivreurForm,
  validate
})(Livreur));