import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import NavBar from './NavBar';
//import MyTheme from '../theme/theme.jsx';

class MainApp extends Component {

	getChildContext() {
		return {muiTheme: getMuiTheme(baseTheme)};
	}

	render() {
		return (
			<div>			
				<NavBar/>	
				<div className="containerMain">
					{this.props.children}
				</div>
			</div>
		);
	}
}

MainApp.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default MainApp;