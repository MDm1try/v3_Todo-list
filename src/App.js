import React, { Component } from 'react';

import logo from './logo.svg';
import './style/App.css';
import Todolist from './todolist';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="todo-list">
          <header>
            <h1>To-do list</h1>
          </header>
          <Todolist/>
        </div>  
      </div>
    );
  }
}

export default App;
