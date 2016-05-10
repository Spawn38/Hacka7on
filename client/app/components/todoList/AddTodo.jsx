import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, CardText} from 'material-ui';

import AddTodoForm from './AddTodoForm.jsx';

class AddTodo extends Component {
  
  handleSubmit(data) {}

  render() {
    return (
   		<AddTodoForm onSubmit={this.handleSubmit.bind(this)}/>
    );
  }
}
export default connect()(AddTodo);