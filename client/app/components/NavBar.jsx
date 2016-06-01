import React, {Component} from 'react';
import {AppBar,Drawer,MenuItem} from 'material-ui';
import {push,replace} from 'react-router-redux';
import {connect} from 'react-redux';
import AppBarButton from './AppBarButton.jsx';
import {Link} from 'react-router';

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
 		this.setState({open: true});
 	}

 	closeLeftNav() {
 		if(!this.state.docked) {
 			this.setState({open: false});	
 		}
 	}

	render() {	
		
		let drawerClass = "drawerTopClass";
		if(this.state.docked) {
			drawerClass = "drawerTop64Class";
		}	

		let noMargin = {marginTop : '0px'};

	 	return (	 	
	 		<div>	
	 			<AppBar title={ <Link className="title" to="/">Title</Link>} 		 			  	
	 				onLeftIconButtonTouchTap={this.openLeftNav.bind(this)}	 				
    				iconElementRight={<AppBarButton />}    				
    				showMenuIconButton={!this.state.docked}
    				iconStyleRight={noMargin}
    				style ={{position : "fixed"}}
    				 />       				
    			<Drawer open={this.state.open} docked={this.state.docked} containerClassName={drawerClass}>
				    <MenuItem onTouchTap={this.closeLeftNav.bind(this)}>Menu Item</MenuItem>
				    <MenuItem onTouchTap={this.closeLeftNav.bind(this)}>Menu Item 2</MenuItem>
				</Drawer>								
			</div>
		);
	}
}

export default connect()(NavBar);