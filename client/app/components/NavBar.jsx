import React, {Component} from 'react';
import {AppBar,Drawer,MenuItem} from 'material-ui';
import {push,replace} from 'react-router-redux';
import {connect} from 'react-redux';
import AppBarButton from './AppBarButton.jsx';
import {Link} from 'react-router';
import TitreAdmin from './Bandeau/TitreAdmin';

class NavBar extends Component {
 	constructor(props) {
 		super(props); 		
     	this.state = {mql: null, open: false, docked:false};
     	this.mediaQueryChanged =this.mediaQueryChanged.bind(this);
 	}

 	componentWillMount() { 		
    	let mql = window.matchMedia('screen and (min-width: 800px)');    	
    	mql.addListener(this.mediaQueryChanged);
    	this.setState({mql: mql, docked: mql.matches, open: mql.matches });    	    	
  	}

	componentWillUnmount() {
	  this.state.mql.removeListener(this.mediaQueryChanged);
	  this.setState({mql: null});	  
	}

	mediaQueryChanged() {				
	   this.setState({docked: this.state.mql.matches, open: this.state.mql.matches});	   
	}

 	openLeftNav() {
 		if (Meteor.userId()!==null) 
 			this.setState({open: true});
 	}

 	listlivraison() {
 		if(!this.state.docked) {
 			this.setState({open: false});	
 		}
 		this.props.dispatch(push('/Listlivraison'));
 	}

 	adminLivreur() {
 		if(!this.state.docked) {
 			this.setState({open: false});	
 		}
 		this.props.dispatch(push('/AdminLivreur'));
 	}

	render() {	
		
		let drawerClass = "drawerTopClass";
		if(this.state.docked) {
			drawerClass = "drawerTop64Class";
		}	

		let noMargin = {marginTop : '0px'};

		let meteorid = Meteor.userId()!==null;

	 	return (	 	
	 		<div>	
	 			<AppBar title={<TitreAdmin/>} 	  	
				iconElementLeft={<img onClick={this.openLeftNav.bind(this)} src="http://res.cloudinary.com/spawn/image/upload/v1464989129/l_steflogo_rp15z7.png" width="70"/>} 							    				
				showMenuIconButton={true}      				
				style ={{position : "fixed",   backgroundColor: "#90AA75"}}				 				 			  		 			
    			iconElementRight={<AppBarButton />}    				
    			showMenuIconButton={true}
    			iconStyleRight={noMargin} 	
    			className="blue"			
    				 />       				
    			<Drawer open={this.state.open && meteorid} docked={this.state.docked} containerClassName={drawerClass}>
				    <MenuItem onTouchTap={this.adminLivreur.bind(this)}>Saisir livraison</MenuItem>
				    <MenuItem onTouchTap={this.listlivraison.bind(this)}>Agenda livraison</MenuItem>
				</Drawer>								
			</div>
		);
	}
}

export default connect()(NavBar);