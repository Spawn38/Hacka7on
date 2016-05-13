import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../../imports/rootReducer';

export function configureStore(history) {

  const logger = createLogger();
  const middleware = [ReduxThunk, logger];

  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(
        ...middleware,
        routerMiddleware(history)
      )
    )
  );

  return store;
}