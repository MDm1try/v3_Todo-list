import React from 'react';
import './todo-list.css';
import TodoListEditor from './todolisteditor.js';
import ListTodo from './listtodo.js';
import FilterTodoList from './filtertodolist.js';



class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleTodoComplete = this.handleTodoComplete.bind(this);
    this.handleTodoFilter = this.handleTodoFilter.bind(this);
    this.handleTodoCompleteAll = this.handleTodoCompleteAll.bind(this);
    this.handleLabelDoubleClick = this.handleLabelDoubleClick.bind(this);
    this.handleInputTextBlur = this.handleInputTextBlur.bind(this);
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleTodoDeleteCompleteALL = this.handleTodoDeleteCompleteALL.bind(this);
    this.saveId = 0;
    this.state = {tasks : [], filter: "All", AllTask: true};
  }

  handleTodoAdd(task){
    let newTasks = this.state.tasks.slice();
    // if(task.text !== ''){ 
      /* unshift - Добавляет в него аргументы и возвращает получившуюся длину. */
      newTasks.unshift(task);
    // }
    this.setState({
      tasks: newTasks
    });
  }

  handleTodoDelete(task){
      let taskId = task.id;
      let newTasks = this.state.tasks.filter((task) => {
        return task.id !== taskId;
      });
      this.setState({tasks: newTasks});
  }
    
  handleTodoDeleteCompleteALL(task){
      let newTasks = this.state.tasks.filter((task)=>{
          return task.complete !== false;
      });
      this.setState({tasks: newTasks});
  }

  handleTodoComplete(task) {
      let tasks = this.state.tasks.slice();
      tasks.forEach( elements => {
        if(elements.id === task.id){
          return elements.complete = !elements.complete;
        }
      });
      this.setState({ tasks });
  }
  handleTodoCompleteAll(AllTask) {
      let tasks = this.state.tasks.slice();
      tasks.forEach(el => {
        if(AllTask === true)
          return el.complete = false;
        else 
          return el.complete = true; 
      });
      AllTask = AllTask ? false : true;
      this.setState({
        tasks,
        AllTask
      });
  }
  handleTodoFilter(filter) {
    this.setState({
      filter
    })
  }
  handleLabelDoubleClick(task) {
    let tasks = this.state.tasks.slice()
    tasks.forEach(el => {
      if(el.id === task.id){
        this.saveId = task.id;
        return el.labelDbClick = true;
      }
    });
    this.setState({ tasks });
  }
  handleInputTextBlur(task) {
    let tasks = this.state.tasks.slice()
    tasks.forEach(el => {
      if(el.id === task.id){
        return el.labelDbClick = false;
      }
    });
    this.setState({ tasks });
  }
  
  handleInputTextChange(event){
    let tasks = this.state.tasks.slice()
    tasks.forEach(el => {
      if(el.id === this.saveId){
        return el.text = event.target.value;
      }
    });
    this.setState({tasks});
  }

  render() {
    return (
      <div className="todolist-app">
        <TodoListEditor 
          AllTask = {this.state.AllTask}
          onTodoAdd={this.handleTodoAdd}
          onTodoCompleteAll = {this.handleTodoCompleteAll}
        />
        <ListTodo 
          tasks = {this._getTasks(this.state.tasks,this.state.filter)}
          onTodoDelete = {this.handleTodoDelete}
          onTodoComplete = {this.handleTodoComplete}
          onLabelDbClick = {this.handleLabelDoubleClick}
          onInputTextBlur = {this.handleInputTextBlur}
          onInputTextChange = {this.handleInputTextChange}
        />
        <FilterTodoList 
          tasks = {this.state.tasks} 
          currentFilter = {this.state.filter}
          onTodoFilter={this.handleTodoFilter}
          onTodoDeleteCompleteALL = {this.handleTodoDeleteCompleteALL}
        />
      </div>
    );
  }
  _getTasks(tasks,filter){
    if (filter === 'Active') {
        return tasks.filter( task => {
          return task.complete === true
        });
    }
    if (filter === 'Completed'){
        return tasks.filter( task => {
          return task.complete === false 
        });
    }

    return tasks;
  }
};

export default Todolist;