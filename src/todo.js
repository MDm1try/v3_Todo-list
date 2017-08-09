import React from 'react';
 import { connect } from 'react-redux';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.props.onChangeTask(false, this.props.id);
      this.props.onSaveInputTextChange(event.target.value, this.props.id)
    }
  }

  render() {
    if(this.props.taskIsLabelDbClick){
        return (
          <li>
            <input
              className="checkboxItem"
              type = "checkbox"
              onChange={this.props.onCompleted}
              checked = {(this.props.taskIsCompleted)?(true):(false)}
            />    
            <label
              className={((this.props.taskIsCompleted)?("text-through"):("")) 
                  + ((this.props.taskIsLabelDbClick)?(" textItem"):(""))}
              onDoubleClick= {this.props.onLabelDbClick}
            >
            {this.props.taskText}
            </label>
            
            <input
              className={(this.props.taskIsLabelDbClick)?("textItemEdit"):("textItem")}
              type="text"
              onBlur={this.props.onInputTextBlur}
              defaultValue = {this.props.taskText}
              onKeyPress ={this.handleKeyPress}
              autoFocus = "true"
            />  

            <button 
              className="destroy"
              onClick={this.props.onDelete}
            >
              X
            </button> 
          </li>

        );
    }
    else{
        return (
          <li>
            <input
              className="checkboxItem"
              type = "checkbox"
              onChange={this.props.onCompleted}
              checked = {(this.props.taskIsCompleted)?(true):(false)}
            />    
            <label
            className={((this.props.taskIsCompleted)?("text-through"):("")) 
                + ((this.props.taskIsLabelDbClick)?(" textItem"):(""))}
            onDoubleClick= {this.props.onLabelDbClick}
            >
            {this.props.taskText}
            </label>
            
            <button 
              className="destroy"
              onClick={this.props.onDelete}
            >
              X
            </button> 
          </li>
        );
    }
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onChangeTask: (flag, currentId) => {
      dispatch({type: 'CHANGE_TASK', payload: flag, currentId})
    },
    onSaveInputTextChange: (taskText, currentId) => {
      dispatch({type: 'SAVE_INPUT_TEXT_CHANGE_TASK', payload: taskText, currentId})
    }
  }
}

export default connect(
  state => ({
    tasks: state.tasks,
    filter: state.filter
  }),
  mapDispatchToProps
)(Todo);