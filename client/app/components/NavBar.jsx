import React, {Component} from 'react';
import {AppBar,IconButton,FlatButton,LeftNav,MenuItem, ThemeManager} from 'material-ui';

import AppBarButton from './AppBarButton.jsx';
import MyTheme from '../theme/theme.jsx';

export default class NavBar extends Component {
 	constructor(props) {
 		super(props); 		
     	this.state = {mql: null, open: false, docked:false};
     	this.mediaQueryChanged =this.mediaQueryChanged.bind(this);
 	}

 	componentWillMount() {
    	let mql = window.matchMedia('(min-width: 800px)');
    	mql.addListener(this.mediaQueryChanged);
    	this.setState({mql: mql, docked: mql.matches, open: mql.matches });    	
    	console.log("mount");
  	}

	componentWillUnmount() {
	  this.state.mql.removeListener(this.mediaQueryChanged);
	  this.setState({mql: null});
	  console.log("unmount");	  
	}

	mediaQueryChanged() {
	   this.setState({docked: this.state.mql.matches, open: this.state.mql.matches});
	   console.log("change");
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
 		FlowRouter.go('/');
 	}

	getChildContext() {
		return {
		  muiTheme: ThemeManager.getMuiTheme(MyTheme)
		};
	}

	render() {
	
		let leftNavClass = {top : '0px'};
		if(this.state.docked) {
			leftNavClass = {top : '66px'};
		}		

		let noMargin = {marginTop : '0px'};
		
		let test = {test};

	 	return (	 	
	 		<div>	
	 			<AppBar title={ <a href="" className="title">Title</a>} 	
	 			  	onTitleTouchTap={this.titleAction.bind(this)}
	 				onLeftIconButtonTouchTap={this.openLeftNav.bind(this)}	 				
    				iconElementRight={<AppBarButton />}    				
    				showMenuIconButton={!this.state.docked}
    				iconStyleRight={noMargin}
    				 />    			    				
    				
    			<LeftNav open={this.state.open} docked={this.state.docked} style={leftNavClass}>
					    <MenuItem onTouchTap={this.closeLeftNav.bind(this)}>Menu Item</MenuItem>
					    <MenuItem onTouchTap={this.closeLeftNav.bind(this)}>Menu Item 2</MenuItem>
				</LeftNav>	 							
			</div>
		);
	}
}

NavBar.childContextTypes = { 
  muiTheme: React.PropTypes.object
}