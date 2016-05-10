import React, {Component, PropTypes} from 'react';
import {TextField,Card,CardText} from 'material-ui';
import {reduxForm} from 'redux-form';

export const fields = [ 'firstName', 'name', 'userName', 'email', 'password', 'passwordCheck' ]

/*
var mapStateToProps = state => state

var form = reduxForm({
  form: 'signupForm',
  fields:  [ 'firstName', 'name', 'userName', 'email', 'password', 'passwordCheck' ],
  touchOnChange: true, 
  validate(values) {
     let errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	return errors;
  }
})
*/
class SignupForm extends Component {

	constructor(props) {
        super(props);
    }

    componentWillUnmount() {}

	
	render() {
  		let {fields} = this.props;
		return (
		  	<div className="containerCentral">
		  		  <Card>
			  		   <CardText>
						    <form onSubmit={handleSubmit}>
					            <TextField
			      					hintText="Prénom"
			      					floatingLabelText="Prénom"
			      					floatingLabelFixed={true}
			      					{...firstName}
			      					errorText={firstName.touched && firstName.error && <div>{firstName.error}</div>}
			    				/><br />
					            <TextField
			      					hintText="Nom"
			      					floatingLabelText="Nom"
			      					floatingLabelFixed={true}
			      					{...name}
			      					errorText={name.touched && name.error && <div>{name.error}</div>}
			    				/><br />			    				
			    				<TextField
			      					hintText="Pseudo"
			      					floatingLabelText="Pseudo"
			      					floatingLabelFixed={true}
			      					{...userName}
			      					errorText={userName.touched && userName.error && <div>{userName.error}</div>}
			    				/><br />
			    				<TextField
			      					hintText="Email"
			      					floatingLabelText="Email"
			      					floatingLabelFixed={true}
			      					{...email}
			      					errorText={email.touched && email.error && <div>{email.error}</div>}
			    				/><br />
			    				<TextField
			      					hintText="Mot de passe"
			      					floatingLabelText="Mot de passe"
			      					floatingLabelFixed={true}
			      					type="password"
			      					{...password}
			      					errorText={password.touched && password.error && <div>{password.error}</div>}
			    				/><br />
			    				<TextField
			      					hintText="Confirmation mot de passe"
			      					floatingLabelText="Confirmation mot de passe"
			      					floatingLabelFixed={true}
			      					type="password"
			      					{...passwordCheck}
			      					errorText={passwordCheck.touched && passwordCheck.error && <div>{passwordCheck.error}</div>}
			    				/>
						    </form>
				          <button type="submit" disabled={submitting}>
				            {submitting ? <i/> : <i/>} Submit
				          </button>
				          <button type="button" disabled={submitting} onClick={resetForm}>
				            Clear Values
				          </button>
					    </CardText>
			    </Card>
			</div>
		);
	}
}

SignupForm.propTypes = {
  fields: PropTypes.object.isRequired,  
  handleSubmit: PropTypes.func.isRequired
}

export default SignupForm;