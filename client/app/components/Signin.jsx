import React, {Component} from 'react';

export default class Signin extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	first_name :{value:this.refs.first_name, valid:false},
        	last_name : {value:this.refs.last_name, valid:true},
        	login : {value:this.refs.login, valid:true},
        	email : {value:this.refs.email, valid:true},
        	password : {value:this.refs.password, valid:true},
        	passwordConf : {value:this.refs.passwordConf, valid:true},        	
        };      
    }

    componentWillUnmount() {
    	
    }

    classValidation(item) {
    	return (this.state[item].valid ?'validate' : 'invalid');    	
    }


	render() {


		const singinClass =  this.classValidation('first_name') ;


		return (
		  	<div className="row">
			    <form className="col s12 m8 offset-m2 l6 offset-l3" >
			      <div className="row">	      
			        <div className="input-field col s6">
			          <i className="material-icons prefix">account_circle</i>
			          <input ref="first_name" id="first_name" type="text" className={singinClass}  placeholder="Nom"/>		          
			        </div>
			        <div className="input-field col s6">
			          <input ref="last_name" id="last_name" type="text" className="{validate}"  placeholder="Prénom"/>		          
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">	          
			          <i className="material-icons prefix"></i>
			          <input ref="login" id="login" type="text" className="{validate}" placeholder="Pseudo"/>		          
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">email</i>
			          <input ref="email" id="email" type="email" className="{validate}"  placeholder="Email"/>		          
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">lock</i>
			          <input ref="password" id="password" type="password" className="{validate}" placeholder="Mot de passe"/>		          
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">lock</i>
			          <input ref="passwordConf" id="passwordConf" type="password" className="{validate}" placeholder="Confirmation du mot de passe"/>		          
			        </div>
			      </div>
			    </form>
			</div>
		);
	}
}