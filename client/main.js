import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react'
import { render }  from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {configureStore} from './app/store'
import router from './app/router'
import {IntlProvider} from 'react-intl';

injectTapEventPlugin();

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

Meteor.startup( () => {
	render(
	<IntlProvider locale="en">
	  <Provider store={store}>	  	
		<Router history={history} routes={router}/>	    
	  </Provider>
	</IntlProvider>,

	  document.getElementById('mount')
	);
});