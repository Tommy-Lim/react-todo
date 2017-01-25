import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Components
import TodoList from './TodoList.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
