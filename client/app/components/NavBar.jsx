import React, {Component} from 'react';
import {AppBar,Drawer,MenuItem} from 'material-ui';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import AppBarButton from './AppBarButton.jsx';

class NavBar extends Component {
 	constructor(props) {
 		super(props); 		
     	this.state = {mql: null, open: false, docked:false};
     	this.mediaQueryChanged =this.mediaQueryChanged.bind(this);
 	}

 	componentWillMount() {
    	let mql = window.matchMedia('(min-width: 800px)');
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

 	titleAction() {
 		this.props.dispatch(push('/'));
 	}

	render() {	
		let leftNavClass = {top : '0px'};
		if(this.state.docked) {
			leftNavClass = {top : '66px'};
		}		

		let noMargin = {marginTop : '0px'};

	 	return (	 	
	 		<div>	
	 			<AppBar title={ <a href="" className="title">Title</a>} 	
	 			  	onTitleTouchTap={this.titleAction.bind(this)}
	 				onLeftIconButtonTouchTap={this.openLeftNav.bind(this)}	 				
    				iconElementRight={<AppBarButton />}    				
    				showMenuIconButton={!this.state.docked}
    				iconStyleRight={noMargin}
    				 />     
		 		<Drawer open={this.state.open} docked={this.state.docked} style={leftNavClass}>
				    <MenuItem onTouchTap={this.closeLeftNav.bind(this)}>Menu Item</MenuItem>
				    <MenuItem onTouchTap={this.closeLeftNav.bind(this)}>Menu Item 2</MenuItem>
				</Drawer>				
			</div>
		);
	}
}

export default connect()(NavBar);