import React, {Component} from 'react';
import Toastr from '../toastr/Toastr';

class MainPage extends Component {
	render() {
		return (
			<div className="fullHeight grey center">			 												
				{this.props.children}				
				<Toastr delay={3000}/>		
			</div>
		);
	}
}

export default MainPage;