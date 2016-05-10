import { Meteor } from 'meteor/meteor';
import Todos from '../imports/collections.js';
import Tests from '../imports/collections.js';

const todoPubFields = {
  text: 1,
  completed: 1
};

const getTodoPublication = function (filter, pageSkip = 0) {

  let query = {};
  check(filter, String);
  check(pageSkip, Number);

  switch (filter) {
    case 'SHOW_COMPLETED':
      query.completed = true;
      break;
    case 'SHOW_ACTIVE':
      query.completed = false;
      break;
    default:
      break;
  }
  Counts.publish(this, 'TodoCount', Todos.find(query));
  return Todos.find(query, {fields: todoPubFields, skip: pageSkip, limit: 10});
};

Meteor.publish('getTodos', getTodoPublication);


Meteor.publish('alltest', () => {
  return Tests.find();
});


Meteor.users.deny({
  update: function() {
    return true;
  }
});