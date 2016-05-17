
import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import MainApp from './components/MainApp';
import Signup from './components/Signup';
import Test from './components/Test';
import TodoApp from './components/todoList/TodoApp';

const router = (
  <Route path="/" component={MainApp}>    
    <IndexRoute component={Test}/>
    <Route path="/Signup" component={Signup}/>
    <Route path="/Test" component={Test}/>
    <Route path="/Todo" component={TodoApp}/>
  </Route>
);

export default router;