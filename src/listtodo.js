import React from 'react';
import Todo from './todo.js';

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onTodoDelete = this.props.onTodoDelete;
    this.onTodoComplete = this.props.onTodoComplete;
    this.onLabelDbClick = this.props.onLabelDbClick;
    this.onInputTextBlur = this.props.onInputTextBlur;
    this.onInputTextChange = this.props.onInputTextChange;
  }
  render() {
    return (
      <ul className="listTodo">
        {
          this.props.tasks.map( task => {
              return (
                  <Todo
                    key = {task.id}
                    taskText = {task.text}
                    taskIsComplete = {task.complete}
                    taskIsLabelDbClick = {task.labelDbClick}
                    onDelete = {this.onTodoDelete.bind(null,task)}
                    onComplete = {this.onTodoComplete.bind(null,task)}
                    onLabelDbClick = {this.onLabelDbClick.bind(null,task)}
                    onInputTextBlur = {this.onInputTextBlur.bind(null,task)}
                    onInputTextChange = {this.onInputTextChange.bind(null)}
                  />
              );
            }
          )
        }
      </ul>
    );
  }

};

export default ListTodo;