
import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {Link} from 'react-router';

export default class Titre extends Component {	
	constructor(props) {
		super(props);		
	}

	render() {
		return (				
			<Link className="titleExterieur" to="/Exterieur">Groupe Stef</Link>
		);
	}
}
