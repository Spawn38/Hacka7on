
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './layouts/MainLayout.jsx'
import PlainLayout from './layouts/PlainLayout.jsx'

import Test from './containers/test.js'

import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Signin from './components/Signin.jsx'

FlowRouter.route('/', {
  name: "home",
  action (){      
      mount(MainLayout, {
      	content:<Home />,
      	navbar:<NavBar />
      });
  }
});


FlowRouter.route('/Signin', {
  name: "signin",
  action (){      
      mount(PlainLayout, {
          content:<Signin />
      });
  }
});


FlowRouter.route('/Navbar', {
  name: "navbar",
  action (){      
   mount(PlainLayout, {
          content:<NavBar />
      });
  }
});
