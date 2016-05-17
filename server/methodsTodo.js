import Todos from '../imports/collections.js';
import Tests from '../imports/collections.js';

const testId = Match.Where(function (id) {
  check(id, String);
  return /[a-zA-Z0-9]{17,17}/.test(id);
});


Meteor.methods({	
  addTodo(text) {
    check(text, String);
    const todos = Todos.insert({
      text,
      completed: false
    });
    return todos;
  },
  toggleTodo(id) {    
    check(id,testId);
    const todoInQuestion = Todos.findOne({_id: id}, {fields: {completed: true}});
    const completed = todoInQuestion.completed;
    return Todos.update({_id: id}, {$set: {completed: !completed}});
  }
});