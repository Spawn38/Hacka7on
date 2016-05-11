
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect }  from 'react-redux';
import React  from 'react';

import {List, Paper, Subheader, RaisedButton} from 'material-ui';


import reactMixin from 'react-mixin';
import Todos from '../../../../imports/collections.js';
import changePage from '../../actions/changePage';
import toggleTodo from '../../actions/toggleTodo';
import Todo from './Todo';
import TodoPagination from './Pagination';

class TodoList extends React.Component {
  render() {

    const { dispatch } = this.props;
    const todos = this.props.todoList;    
    const pagination = this.props.todoCount > 10 ? (
      <TodoPagination
        handlePageClick={(data)=> {return dispatch(changePage(data.selected))}}
        pageCount={this.props.todoCount/10}
      /> ) : '';

    const text = {SHOW_ALL : 'All', SHOW_ACTIVE : 'Active', SHOW_COMPLETED : 'Completed'};

    let filter = '';
    if( this.props.visibilityFilter)
    {
      filter = <RaisedButton
                label={text[this.props.visibilityFilter]}
                secondary={true}
                 icon={<ActionAndroid />}
                />                
    }
    
    
    return (
      <div className="row">
        <Paper zDepth={2} >
          <List>
          <Subheader>Liste Todos {filter} </Subheader>
          {todos.map(todo =>
            <Todo key={todo._id}  {...todo} onClick={() => dispatch(toggleTodo(todo._id))} completed = {todo.completed} />                       
          )}
          </List>
        </Paper>

        {pagination}

      </div>
    )
  }
}

const TodoContainer = createContainer(({ visibilityFilter, pageSkip }) => {
  const todoSub = Meteor.subscribe('getTodos', visibilityFilter, pageSkip);
  return {
    todoSubReady: todoSub.ready(),
    todoList: Todos.find({}, {limit: 10}).fetch() || [],
    todoCount: Counts.get('TodoCount')
  }
}, TodoList);

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter,
    pageSkip: state.pageSkip
  }
}

export default connect(mapStateToProps)(TodoContainer);


