
import {combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import visibilityFilter from './reducers/visibilityFilter.js';
import pageSkip from './reducers/pageSkip.js';
import userLogin from './reducers/userLogin.js';

import {reducer as formReducer} from 'redux-form';

export default rootReducer = combineReducers(Object.assign({}, 
{
	pageSkip,
	visibilityFilter,
	userLogin,
}, {
    routing: routerReducer
}, {
    form: formReducer
}));