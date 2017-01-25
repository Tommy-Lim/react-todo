import React, { Component } from 'react';
import './todoitem.css';

class TodoItem extends Component {

  render(){
    if(this.props.item.isEditting){
      return(
        <li key={this.props.index}>
          {this.props.item.name} -
          <a href="#" onClick={this.props.updateItem}> Update
          </a> |
          <a href="#" onClick={this.props.removeItem}> Remove
          </a>
        </li>
      );
    } else{
      return(
        <li key={this.props.index}>
          {this.props.item.name} -
          <a href="#" onClick={this.props.editItem}> Edit
          </a> |
          <a href="#" onClick={this.props.removeItem}> Remove
          </a>
        </li>
      );
    }
  }
}

export default TodoItem;
