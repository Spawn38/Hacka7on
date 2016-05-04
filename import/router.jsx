
import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'

FlowRouter.route('/', {
  action (){      
      mount(MainLayout, {
      	content:(<Home/>),
      	navbar:(<NavBar/>)
      })
  }
});