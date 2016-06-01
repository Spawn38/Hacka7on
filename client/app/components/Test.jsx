import React, {Component} from 'react';

export default class Test extends Component {	
	constructor(props) {
		super(props);		
	}

  	shouldComponentUpdate(nextProps, nextState) {
 		return false;
	}

	render() {
		return (
			<div>
				This is of test
			</div>
		);
	}
}
 

