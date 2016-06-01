import React, {Component, PropTypes} from 'react';
import {TextField,RaisedButton,FlatButton} from 'material-ui';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validator from 'validator';
import {addUser} from '../actions/logActions';

export const fieldsSignupForm = [ 'firstName', 'name', 'userName', 'email', 'password', 'passwordCheck' ];

const validate = values => {
  const errors = {} 

  if (!values.firstName || values.firstName.trim() === '') {
    errors.firstName = 'Valeur obligatoire';
  } 
  if (!values.name || values.name.trim() === '') {
    errors.name = 'Valeur obligatoire';
  } 
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Valeur obligatoire';
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Email non valide';
  }
  if (!values.userName || values.userName.trim() === '') {
    errors.userName = 'Valeur obligatoire';
  } 
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Valeur obligatoire';
  } else if (!validator.matches(values.password.trim(),/(?=.*\d)(?=.*[a-z]).{8,}/) || 
      values.password.trim().length < 8) {
    errors.password ='8 caractères minimum dont au moins 1 chiffre et 1 lettre';
  } 
  if (!values.passwordCheck || values.passwordCheck.trim() === '') {
    errors.passwordCheck = 'Valeur obligatoire';
  } else if (!validator.matches(values.passwordCheck.trim(),/(?=.*\d)(?=.*[a-z]).{8,}/)||
    values.passwordCheck.trim().length < 8) {
    errors.passwordCheck ='8 caractères minimum dont au moins 1 chiffre et 1 lettre';
  }
  if (values.passwordCheck && values.password &&  
    values.password.trim() !== values.passwordCheck.trim()) {
    errors.passwordCheck = 'Le mot de passe n\'est pas identique';
    errors.password = 'Le mot de passe n\'est pas identique';
  }
  
  return errors;
}

const submit = (values, dispatch) => {
  dispatch(addUser(values));    
}

class Signup extends Component {
	
	render() {
    const {fields: {firstName,name,userName,email,password,passwordCheck}, handleSubmit, resetForm, submitting} = this.props;

    return (		  	
   
			<div className="mainPanel">	  		
			    <form onSubmit={handleSubmit(submit)}>
		            <TextField
                fullWidth={true}
      					hintText="Prénom"		      					
      					{...firstName}
      					errorText={firstName.touched && firstName.error && <div>{firstName.error}</div>}
    				/><br />
		            <TextField
                fullWidth={true}
      					hintText="Nom"		      					
      					{...name}
      					errorText={name.touched && name.error && <div>{name.error}</div>}
    				/><br />			    				
    				<TextField
                fullWidth={true}
      					hintText="Pseudo"		      					
      					{...userName}
      					errorText={userName.touched && userName.error && <div>{userName.error}</div>}
    				/><br />
    				<TextField
                fullWidth={true}
      					hintText="Email"		      					
      					{...email}
      					errorText={email.touched && email.error && <div>{email.error}</div>}
    				/><br />
    				<TextField
                fullWidth={true}
      					hintText="Mot de passe"		      					
      					type="password"
      					{...password}
      					errorText={password.touched && password.error && <div>{password.error}</div>}
    				/><br />
    				<TextField
                fullWidth={true}
      					hintText="Confirmation mot de passe"		      					
      					type="password"
      					{...passwordCheck}
      					errorText={passwordCheck.touched && passwordCheck.error && <div>{passwordCheck.error}</div>}
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

Signup.propTypes = {  
  fields: PropTypes.object.isRequired,  
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default connect()(reduxForm({
  form : 'signUp',
  fields : fieldsSignupForm,
  validate
})(Signup));