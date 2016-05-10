
import {combineReducers} from 'redux';
import visibilityFilter from './reducers/visibilityFilter.js';
import pageSkip from './reducers/pageSkip.js';

import {reducer as formReducer} from 'redux-form';

export default rootReducer = combineReducers({
  pageSkip,
  visibilityFilter,
  form: formReducer
});