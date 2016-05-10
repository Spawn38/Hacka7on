import React, {Component} from 'react';
import { connect }  from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import TodoApp from './todoList/TodoApp.jsx'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Store from '../store';

//import MyTheme from '../theme/theme.jsx';

class MainApp extends Component {

	getChildContext() {
		return {muiTheme: getMuiTheme(baseTheme)};
	}

	render() {
		return (
			<Provider store={Store}>		
				<TodoApp/>		
			</Provider>
		);
	}
}

MainApp.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default MainApp;