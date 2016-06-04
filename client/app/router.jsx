import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import MainApp from './components/MainApp';
import MainPage from './components/MainPage';
import MainExterieur from './components/MainExterieur';

import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import NoMatch from './components/NoMatch';
import Logout from './components/Logout';
import Accueil from './components/Accueil';

import Annuaire from './components/Annuaire';
import Exterieur from './components/Exterieur';
import Livreur from './components/Livreur/Livreur';

import AdminLivreur from './components/AdminLivreur/AdminLivreur';
import Livraison from './components/AdminLivreur/Livraison';
import LivreurDialog from './components/Livreur/LivreurDialog';
import ListLivraison from './components/AdminLivreur/ListLivraison';

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
			<Route path="/AdminLivreur" component={AdminLivreur} onEnter={isLoggin}/>
			<Route path="/Livraison/:code" component={Livraison} onEnter={isLoggin}/>
			<Route path="/Listlivraison" component={ListLivraison} onEnter={isLoggin}/>	
		</Route>	
		<Route component={MainPage}>     
			<Route path="/Signup" component={Signup} onEnter={isLoggout} />
			<Route path="/Signin" component={Signin} onEnter={isLoggout}/>		
			<Route path="/Logout" component={Logout} onEnter={isLoggin} />				
		</Route>	

		<Route component={MainExterieur}>     			
			<Route path="/Exterieur" component={Exterieur}/>
			<Route path="/Livreur" component={Livreur}/>			
			<Route path="/Annuaire" component={Annuaire}/>	
			<Route path="/LivreurDialog" component={LivreurDialog}/>
		</Route>	

		<Route path="*" component={NoMatch}/>
	</Route>
);

export default router;