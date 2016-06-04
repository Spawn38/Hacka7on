
import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {Link} from 'react-router';

export default class Titre extends Component {	
	constructor(props) {
		super(props);		
	}

	render() {
		return (				
			<div className="lineHeight0">
			<table>
				<tbody> 
				<tr>
					<td>
						<Link className="titleExterieur" to="/Exterieur">Groupe Stef</Link>
					</td>
					<td textAlign="center" width="100%">
						
					</td>
					<td textAlign="right">
						<img height="90px" src ="http://res.cloudinary.com/spawn/image/upload/v1464989129/l_steflogo_rp15z7.png"/>
					</td>
				</tr>
				</tbody>
			</table>
			</div>
		);
	}
}
