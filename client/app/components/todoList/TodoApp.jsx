import React,{Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import { connect }  from 'react-redux';

class TodoApp extends Component {
  render() {
		const { dispatch } = this.props;
		return (
		<div className="containerCentral">
			<AddTodo/>
			<TodoList/>
			<Footer/>
		</div>
		);
	}	
}

export default connect()(TodoApp);