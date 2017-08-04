import React from 'react';

class FilterTodoList extends React.Component{
  constructor(props) {
    super(props);
    this.onTodoDeleteCompleteALL = this.props.onTodoDeleteCompleteALL
  }
  
  render () {
    if(this.props.tasks.length === 0)
      return null;
    else
      return (
        <footer className="filter-todoList">
          <span> {this.props.tasks.length} item left</span>
          <ul className="filter">
            <li onClick={this.props.onTodoFilter.bind(null,"All")}>All</li>
            <li onClick={this.props.onTodoFilter.bind(null,"Active")}>Active</li>
            <li onClick={this.props.onTodoFilter.bind(null,"Completed")}>Completed</li>
          </ul>
          <button 
            className="clearCompleted"
            onClick={this.onTodoDeleteCompleteALL.bind(null,this.props.tasks)}
          >Clear completed</button>
        </footer>
      );
  }

};

export default FilterTodoList;