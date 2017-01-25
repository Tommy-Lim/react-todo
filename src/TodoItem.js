import React, { Component } from 'react';
import './todoitem.css';

class TodoItem extends Component {
  render(){
    return(
      <li>{this.props.item.name}</li>
    );
  }
}

export default TodoItem;
