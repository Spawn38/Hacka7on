import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {Link} from 'react-router';
import Titre from './Titre';


export default class Bandeau extends Component {	
	constructor(props) {
		super(props);		
	}

	render() {
		return (				
			<AppBar title={<Titre/>} 		 			  	
				iconElementLeft={<img src="http://res.cloudinary.com/spawn/image/upload/v1464976998/seven_ksa6u9.png" width="70"/>} 							    				
				showMenuIconButton={true}      				
				style ={{position : "fixed",   backgroundColor: "#90AA75"}}
				 />       	
		);
	}
}
 
