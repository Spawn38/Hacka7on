import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MyTheme from '../theme/theme.jsx';

class Home extends Component {

	getChildContext() {
		return {muiTheme: getMuiTheme(baseTheme)};
		//return {muiTheme: getMuiTheme(MyTheme)};
	}

	render() {
		return (
			<div className="fullHeight">			 				
				{this.props.children}				
			</div>
		);
	}
}

Home.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default Home;