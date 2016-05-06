
import {composeWithTracker} from 'react-komposer';

import Test from '../components/Test.jsx';

function composer(props, onData) {
  const handle = Meteor.subscribe('alltest');  
  
  if(handle.ready()) {
  	const tests = Tests.find({}, {sort: {_id: 1}}).fetch();
  	onData(null, {tests});
  } else {
    onData(null, {loading: true});
  };
};

export default composeWithTracker(composer)(Test);