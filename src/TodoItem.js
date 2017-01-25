import React, { Component } from 'react';
import './todoitem.css';

class TodoItem extends Component {

  removeItem(){
    console.log('remove clicked');
    console.log(this);
  }

  render(){
    return(
      <li key={this.props.index}>{this.props.item.name} <a href="#" onClick={this.removeItem.bind(this)}>Remove</a></li>
    );
  }
}

export default TodoItem;
