import React, {Component,PropTypes} from 'react';
import {TextField,RaisedButton } from 'material-ui';
import { reduxForm, initialize } from 'redux-form';
import addTodo from '../../actions/addTodo';

export const fields = [ 'todoText' ];

const validate = values => {
  const errors = {}

  if (!values.todoText || values.todoText.trim() === '') {
    errors.todoText = 'Enter a todo'
  } else if (values.todoText.length < 4) {
    errors.todoText = 'Au moins 4 caracters'
  }
  return errors
}

const styles = {
  marginLeft: 24,
};


const submit = (values, dispatch) => {
  return new Promise((resolve, reject) => {   
    dispatch(addTodo(values.todoText));
    dispatch(initialize('addTodo', {todoText : ""}, ['todoText']));
    resolve();
  });  
}

class AddTodoForm extends Component {

  render() {
    const {fields: {todoText}, handleSubmit, submitting} = this.props;
    return (
      <div>
        <div className="row">
          <form onSubmit={handleSubmit(submit)}>
            <TextField {...todoText} errorText={todoText.touched && todoText.error}/>
            <RaisedButton type='submit'  disabled={submitting}  className="alignTop" style={styles} primary={true} >
              Add Todo
            </RaisedButton>          
          </form>        
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form : 'addTodo',
  fields : ['todoText'],
  validate
})(AddTodoForm)
