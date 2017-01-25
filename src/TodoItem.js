import React, { Component } from 'react';
import './todoitem.css';

class TodoItem extends Component {

  render(){
    return(
      <li key={this.props.index}>
        {this.props.item.name} -
        <a href="#" onClick={this.props.removeItem}> Edit
        </a> |
        <a href="#" onClick={this.props.removeItem}> Remove
        </a>
      </li>
    );
  }
}

export default TodoItem;
