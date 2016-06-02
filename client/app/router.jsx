import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import MainApp from './components/MainApp';
import MainPage from './components/MainPage';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import NoMatch from './components/NoMatch';
import Logout from './components/Logout';
import Accueil from './components/Accueil';

import Settings from './components/Settings';
import TodoApp from './components/todoList/TodoApp';
import Skype from './components/Skype';

function isLoggout(nextState, replace)  {	
	if(Meteor.userId()) {
		replace('/');
	}
}

function isLoggin(nextState, replace)  {	
	if(!Meteor.userId()) {
		replace('/');
	}
}

const router = (
  	<Route path="/" component={Home}> 
		<Route component={MainApp}>    
			<IndexRoute component={Accueil}/>
			<Route path="/Test" component={Accueil}/>
			<Route path="/Todo" component={TodoApp}/>				
			<Route path="/Skype" component={Skype}/>			
			<Route path="/Settings" component={Settings}/>		
		</Route>	
		<Route component={MainPage}>     
			<Route path="/Signup" component={Signup} onEnter={isLoggout} />
			<Route path="/Signin" component={Signin} onEnter={isLoggout}/>		
			<Route path="/Logout" component={Logout} />	
			<Route path="*" component={NoMatch}/>
		</Route>		
	</Route>
);

export default router;