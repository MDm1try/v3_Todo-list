import React from 'react';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onInputTextChange = this.props.onInputTextChange.bind(this);
  }

  render() {
    if(this.props.taskIsLabelDbClick)
            return (
              <li>
                <input
                  className="checkboxItem"
                  type = "checkbox"
                  onClick={this.props.onComplete}
                  checked = {(this.props.taskIsComplete)?(false):(true)}
                />    
                <label
                className={((this.props.taskIsComplete)?(""):("text-through")) 
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
                  onChange={this.onInputTextChange}
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
    else{
        return (
          <li>
                <input
                  className="checkboxItem"
                  type = "checkbox"
                  onClick={this.props.onComplete}
                  checked = {(this.props.taskIsComplete)?(false):(true)}
                />    
                <label
                className={((this.props.taskIsComplete)?(""):("text-through")) 
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

export default Todo;