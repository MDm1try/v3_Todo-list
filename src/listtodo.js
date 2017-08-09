import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo.js';

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDeleteTask(task){
    this.props.onDeleteTask(task);
  }

  handleToggleComplete(task){
    this.props.onToggleCompleted(task);
  }

  handleLabelDoubleClick(task) {
    this.props.onLabelDoubleClick(task);
  }

  handleInputTextBlur(task) {
    this.props.onInputTextBlur(task);
  }

  render() {
    if(this.props.tasks.length === undefined) {
      return null;
    }
    return (
      <ul className="listTodo">
        {
          this.props.tasks.map( task => {
              return (
                  <Todo
                    id = {task.id}
                    key = {task.id}
                    taskText = {task.text}
                    taskIsCompleted = {task.completed}
                    taskIsLabelDbClick = {task.labelDbClick}

                    onDelete = {this.handleDeleteTask.bind(this,task)}
                    onCompleted = {this.handleToggleComplete.bind(this,task)}
                    onLabelDbClick = {this.handleLabelDoubleClick.bind(this,task)}
                    onInputTextBlur = {this.handleInputTextBlur.bind(this,task)}
                  />
              );
            }
          )
        }
      </ul>
    );
  }
};

const getVisibleTodos = (filter, state) => {
  switch(filter) {
      case 'SHOW_ALL':
          return state;
      
      case 'SHOW_ACTIVE':
          return state.filter(elements => {
              return elements.completed === false;
          });

      case 'SHOW_COMPLETED':
          return state.filter(elements => {
              return elements.completed === true;
          });
  
      default:
          return state;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCompleted: (task) => {
            dispatch({ type: 'CHECKED_TASK', payload: task })
        },
        onDeleteTask: (task) => {
            dispatch({ type: 'DELETE_TASK', payload: task })
        },
        onLabelDoubleClick: (task) => {
            dispatch({ type: 'LABEL_DB_CLICK_TASK', payload: task })
        },
        onInputTextBlur: (task) => {
            dispatch({type: 'INPUT_TEXT_BLUR_TASK', payload: task})
        }
    }
}
const mapStateToProps = state => {
  return {
    tasks: getVisibleTodos(state.filter[0].currentFilter,state.tasks),
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodo);