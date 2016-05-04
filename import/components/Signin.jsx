import React from 'react';

export default class Signin extends React.Component {
	render() {
		return (
	  <div className="row">
	    <form className="col s12 m8 offset-m2 l6 offset-l3" >
	      <div className="row">
	        <div className="input-field col s6">
	          <input ref="first_name" id="first_name" type="text" className="invalid"/>
	          <label forHtml="first_name">First Name</label>
	        </div>
	        <div className="input-field col s6">
	          <input ref="last_name" id="last_name" type="text" className="validate"/>
	          <label forHtml="last_name">Last Name</label>
	        </div>
	      </div>
	      <div className="row">
	        <div className="input-field col s12">
	          <input disabled id="disabled" type="text" className="validate"/>
	          <label forHtml="disabled">Surnom</label>
	        </div>
	      </div>
	      <div className="row">
	        <div className="input-field col s12">
	          <input id="password" type="password" className="validate"/>
	          <label forHtml="password">Password</label>
	        </div>
	      </div>
	      <div className="row">
	        <div className="input-field col s12">
	          <input id="email" type="email" className="validate"/>
	          <label forHtml="email">Email</label>
	        </div>
	      </div>
	    </form>
	  </div>);
	}
}