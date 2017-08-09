import React from 'react';
import { connect } from 'react-redux';

class TodoListEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  } 

  handleKeyPress(event){
    if(event.key === 'Enter'){
      let str = event.target.value, flag = false;
      if( str === '')
        return;
      for(let i = 0; i < str.length; i++){
                if(str[i] !== ' '){
                    flag = true;
                    break;
                }
      }
      if(!flag){
        return;
      }
      const newTask = {
        id: Date.now(),
        text: str.trim(),
        completed: false,
        labelDbClick: false
      };
      this.props.onAddTask(newTask);
      this.props.onChangeFilter('SHOW_ALL');
      event.target.value = "";
    }
  }

  handleTodoCompleteAll() {
    this.props.onToggleCompleteAll();
    this.props.onToggleAllInputChecked(this.props.filter[0].allTasks);
  }

  render() {
    return (
    <div className="todolist-editor">
        <input 
          className="checkboxAll"
          type = "checkbox"
          onClick = {this.handleTodoCompleteAll.bind(this)}
        />
        <input
          placeholder="What needs to be done?"
          className="new-todo"
          input="text"
          onKeyPress ={this.handleKeyPress}
        />
    </div>
     );
  }
};

const mapDispatchToProps = dispatch => {
    return {
      onToggleCompleteAll: () => {
        dispatch({type: 'TOGGLE_COMPLETED_ALL_FILTER'})
      },
      onAddTask: (task) => {
        dispatch({type: 'ADD_TASK', payload: task})
      },
      onToggleAllInputChecked: (allTasks) => {
        dispatch({type: 'TOGGLE_ALL_INPUT_CHECKED_TASK', payload: allTasks})
      },
      onChangeFilter: (filter) => {
        dispatch({type: 'CHANGE_FILTER', payload: filter})
      }
    }
}

export default connect(
  state => ({
    tasks: state.tasks,
    filter: state.filter
  }),
  mapDispatchToProps
)(TodoListEditor);