
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './layouts/MainLayout.jsx'
import PlainLayout from './layouts/PlainLayout.jsx'

import MainApp from './components/MainApp.jsx'



FlowRouter.route('/', {
  name: "main",
  action (){      
      mount(PlainLayout, {
          content:<MainApp/>
      });
  }
});
