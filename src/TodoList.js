import React, { Component } from 'react';
import './todolist.css';

// Component
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: 'TodoList',
      items: [
        {name: 'item1'},
        {name:  'item2'},
        {name: 'item3'}
      ],
      newItem: ''
    }

  }

  clear(){
    this.setState({items: [], newItem: ''})
  }

  addItem(e){
    e.preventDefault();
    const toDos = this.state.items;
    toDos.push({name: this.state.newItem});
    this.setState({items: toDos, newItem: ''});
  }

  newItemChange(e){
    this.setState({newItem: e.target.value})
  }

  render(){

    const todoItems = this.state.items.map(item => {
      return <TodoItem item={item}></TodoItem>
    })

    return(
      <div>
        <form onSubmit={this.addItem.bind(this)}>
          <input name="item-input" placeholder="enter item here" type="text" value={this.state.newItem} onChange={this.newItemChange.bind(this)}/>
          <input type="submit" value="submit" />
        </form>
        <h1>Todo List</h1>
        <button onClick={this.clear.bind(this)}>Clear</button>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }

}

export default TodoList;
