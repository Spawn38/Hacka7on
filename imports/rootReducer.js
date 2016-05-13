
import {combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import visibilityFilter from './reducers/visibilityFilter.js';
import pageSkip from './reducers/pageSkip.js';

import {reducer as formReducer} from 'redux-form';

export default rootReducer = combineReducers({
  pageSkip,
  visibilityFilter,
  form: formReducer,
  routing: routerReducer
});