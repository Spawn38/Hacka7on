import React, {Component} from 'react';
import Toastr from '../toastr/Toastr';
import Bandeau from './Bandeau/Bandeau';

class MainExterieur extends Component {
	render() {
		return (
			<div className="fullHeight greenStef">
				<Bandeau/>														
				<div className="mainExterieur center" >					
				{this.props.children}		
				</div>				
				
				<Toastr delay={3000}/>						
			</div>
		);
	}
}

export default MainExterieur;