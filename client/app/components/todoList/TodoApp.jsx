import React,{Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import Pagination from '../Pagination';
import changePage from '../../actions/changePage';
import { connect }  from 'react-redux';

class TodoApp extends Component {
  render() {
	const { dispatch } = this.props;
	return (
	<div className="containerCentral">
		<AddTodo/>
		<TodoList/>
		<Footer/>
		<Pagination pageNum={3}   clickCallback={(data)=> {return dispatch(changePage(data.selected))}}/>
	</div>
	);
	}	
}

export default connect()(TodoApp);