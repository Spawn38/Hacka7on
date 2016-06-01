import {combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import visibilityFilter from './reducers/visibilityFilter.js';
import pageSkip from './reducers/pageSkip.js';
import user from './reducers/user.js';
import toastr from './reducers/toastr.js';

import {reducer as formReducer} from 'redux-form';

export default rootReducer = combineReducers(Object.assign({}, 
{
	pageSkip,
	visibilityFilter,
	user,
	toastr
}, {
    routing: routerReducer
}, {
    form: formReducer
}));