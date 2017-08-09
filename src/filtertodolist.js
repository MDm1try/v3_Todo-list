import React from 'react';
import { connect } from 'react-redux';

class FilterTodoList extends React.Component{
  constructor(props) {
    super(props);
  }
  
  handleTodoDeleteCompleteALL(){
      this.props.onTodoDeleteCompleteALL();      
  }
  handleTodoFilter(filterName) {
      this.props.onChangeFilter(filterName);
  }


  render () {
    if(this.props.tasks.length === 0 || this.props.tasks.length === undefined)
      return null;
    else
      return (
        <footer className="filter-todoList">
          <span> {this.props.tasks.length} item left</span>
          <ul className="filter">
            <li onClick={this.handleTodoFilter.bind(this,"SHOW_ALL")}>All</li>
            <li onClick={this.handleTodoFilter.bind(this,"SHOW_ACTIVE")}>Active</li>
            <li onClick={this.handleTodoFilter.bind(this,"SHOW_COMPLETED")}>Completed</li>
          </ul>
          <button 
            className="clearCompleted"
            onClick={this.handleTodoDeleteCompleteALL.bind(this)}
          >Clear completed</button>
        </footer>
      );
  }

};

const mapDispatchToProps = dispatch => {
    return {
      onTodoDeleteCompleteALL: (task) => {
        dispatch({type: 'DELETE_All_TASKS'})
      },
      onChangeFilter : (filterName) => {
        dispatch({type: 'CHANGE_FILTER', payload: filterName})
      }

    }
}

const mapStateToProps = state => {
  return {
    tasks:  state.tasks,
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTodoList);