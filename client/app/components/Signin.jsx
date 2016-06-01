import React, {Component, PropTypes} from 'react';
import {TextField,RaisedButton,FlatButton} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {loginUser} from '../actions/logActions';

export const fieldsSigninForm = [ 'userName', 'password' ];

const validate = values => {
  const errors = {} 

  if (!values.userName || values.userName.trim() === '') {
    errors.userName = 'Valeur obligatoire';
  } 
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Valeur obligatoire';
  }
  
  return errors;
}

const submit = (values, dispatch) => {  
  dispatch(loginUser(values));    
}

class Signin extends Component {

	render() {
    const {fields: {userName,password}, resetForm, handleSubmit, submitting} = this.props;

    return (		  	   
			<div className="mainPanel">	  		
			    <form onSubmit={handleSubmit(submit)}>
    				<TextField
                fullWidth={true}
      					hintText="Pseudo"		      					
      					{...userName}
      					errorText={userName.touched && userName.error && <div>{userName.error}</div>}
    				/><br />    				
    				<TextField
                fullWidth={true}
      					hintText="Mot de passe"		      					
      					type="password"
      					{...password}
      					errorText={password.touched && password.error && <div>{password.error}</div>}
    				/><br />    				
            <div className="center marginTop">
              <RaisedButton disabled={submitting} primary={true} label="Valider" className="marginRight" type="submit"/>
              <RaisedButton disabled={submitting} onClick={resetForm} label="Annuler"/>                   
            </div>
			    </form>
	     </div>
		);
	}
}

Signin.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default connect()(reduxForm({
  form : 'signIn',  
  fields : fieldsSigninForm,
  validate
})(Signin));