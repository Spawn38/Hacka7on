import React, {Component} from 'react';

export default class Accueil extends Component {	
	constructor(props) {
		super(props);		
	}

  	shouldComponentUpdate(nextProps, nextState) {
 		return false;
	}

	render() {
		return (
			<div>
				<img src="http://res.cloudinary.com/spawn/image/upload/c_crop,w_566/v1464993046/MyLussi_sicexv.png"/>
			</div>
		);
	}
}
 

