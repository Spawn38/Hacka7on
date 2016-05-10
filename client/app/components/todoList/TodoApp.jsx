import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const TodoApp = () => {
	return (
	<div className="containerCentral">
		<AddTodo/>
		<TodoList/>
		<Footer/>
	</div>
	);
}

export default TodoApp;