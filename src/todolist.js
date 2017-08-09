import React from 'react';
import './style/todo-list.css';
import TodoListEditor from './todolisteditor.js';
import ListTodo from './listtodo.js';
import FilterTodoList from './filtertodolist.js';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todolist-app">
        <TodoListEditor/>
        <ListTodo/>
        <FilterTodoList/>
      </div>
    );
  }
};

export default Todolist;
