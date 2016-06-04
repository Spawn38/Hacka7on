
import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {Link} from 'react-router';

export default class TitreAdmin extends Component {	
	constructor(props) {
		super(props);		
	}

	render() {
		return (				
			<div>
				<Link className="title" to="/Exterieur">Groupe Stef</Link>
			</div>
		);
	}
}
