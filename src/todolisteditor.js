import React from 'react';


class TodoListEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onTodoCompleteAll = this.props.onTodoCompleteAll;
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
        complete: true,
        labelDbClick: false
      };
      this.props.onTodoAdd(newTask);
      event.target.value = "";
    }
  }

  render() {
    return (
    <div className="todolist-editor">
        <input 
          className="checkboxAll"
          type = "checkbox"
          //onClick = {() => this.props.onTodoCompleteAll()}
          onClick = {this.onTodoCompleteAll.bind(null,this.props.AllTask)}
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

export default TodoListEditor;