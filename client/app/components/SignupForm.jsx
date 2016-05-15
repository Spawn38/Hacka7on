import React, {Component, PropTypes} from 'react';
import {TextField,Card,CardText,RaisedButton,FlatButton} from 'material-ui';
import { reduxForm, initialize } from 'redux-form';

export const fieldsSignupForm = [ 'firstName', 'name', 'userName', 'email', 'password', 'passwordCheck' ];

const validate = values => {
  const errors = {}

  if (!values.firstName || values.firstName.trim() === '') {
    errors.firstName = 'Enter a name'
  } else if (values.firstName.length < 4) {
    errors.firstName = 'Au moins 4 caracters'
  }
  return errors
}

class SignupForm extends Component {

	
	resetForm() {
		this.props.dispatch(initialize('signUp', {firstName : "",
			name : "",userName : "",email : "",password : "",passwordCheck : ""}, fieldsSignupForm));
	}

	render() {
  		const {fields: {firstName,name,userName,email,password,passwordCheck}, handleSubmit, submitting} = this.props;

		const style = {
		  margin: 12,
		};

		return (		  	
			<div>	  		   
			    <form onSubmit={handleSubmit}>
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
    				/>
			    </form>
	          <RaisedButton disabled={submitting} primary={true} label="Valider" style={style}/>
	          <RaisedButton disabled={submitting} onClick={this.resetForm.bind(this)} label="Annuler" style={style}/> 		          
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
