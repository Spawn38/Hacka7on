import React, {Component} from 'react';
import NavBar from './NavBar';
import Toastr from '../toastr/Toastr';

class MainApp extends Component {
	render() {		
		return (
			<div className="fullHeight">			 				
				<NavBar/>					
				<div className="containerMain">
					{this.props.children}
				</div>		
				<Toastr delay={3000}/>		
			</div>
		);
	}
}

export default MainApp;