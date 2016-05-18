import React, {Component, PropTypes} from 'react';
import {TextField,Card,CardText,RaisedButton,FlatButton} from 'material-ui';
import { reduxForm, initialize } from 'redux-form';
import validator from 'validator';
import loginUser from '../actions/logActions';

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
  return new Promise((resolve, reject) => {
    Meteor.call('verifyUser', values, function(error, result) {
      if(error) {        
        reject({ userName: 'Ce pseudo existe déjà',_error: 'Login failed!'});
      } else {
        dispatch(loginUser(values));
        resolve();
      }
    });
  })
  return true;
}

class SignupForm extends Component {


   componentDidMount() {
          this.props.dispatch(initialize('signUp', {firstName : 'test',
      name : 'test',userName : 'Test',email : 'test@aol.com',password : 'test1test',passwordCheck : 'test1test'}, fieldsSignupForm));
   }
	
	resetForm() {
		this.props.dispatch(initialize('signUp', {firstName : "",
			name : "",userName : "",email : "",password : "",passwordCheck : ""}, fieldsSignupForm));
	}

	render() {
  		const {fields: {firstName,name,userName,email,password,passwordCheck}, submitParent, handleSubmit, submitting} = this.props;

		const style = {
		  margin: 12,
		};

		return (		  	
			<div>	  		   
			    <form onSubmit={handleSubmit(submit)}>
		            <TextField
      					hintText="Prénom"		      					
      					{...firstName}
      					errorText={firstName.touched && firstName.error && <div>{firstName.error}</div>}
    				/><br />
		            <TextField
      					hintText="Nom"		      					
      					{...name}
      					errorText={name.touched && name.error && <div>{name.error}</div>}
    				/><br />			    				
    				<TextField
      					hintText="Pseudo"		      					
      					{...userName}
      					errorText={userName.touched && userName.error && <div>{userName.error}</div>}
    				/><br />
    				<TextField
      					hintText="Email"		      					
      					{...email}
      					errorText={email.touched && email.error && <div>{email.error}</div>}
    				/><br />
    				<TextField
      					hintText="Mot de passe"		      					
      					type="password"
      					{...password}
      					errorText={password.touched && password.error && <div>{password.error}</div>}
    				/><br />
    				<TextField
      					hintText="Confirmation mot de passe"		      					
      					type="password"
      					{...passwordCheck}
      					errorText={passwordCheck.touched && passwordCheck.error && <div>{passwordCheck.error}</div>}
    				/><br />
            <RaisedButton disabled={submitting} primary={true} label="Valider" style={style} type="submit"/>
            <RaisedButton disabled={submitting} onClick={this.resetForm.bind(this)} label="Annuler" style={style}/>                   
			    </form>
	     </div>
		);
	}
}

SignupForm.propTypes = {  
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form : 'signUp',
  fields : fieldsSignupForm,
  validate
})(SignupForm)
