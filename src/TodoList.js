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
      <div className="container">

        <form onSubmit={this.addItem.bind(this)}>
          <label for="item-input">
            Title
            <input name="item-input" placeholder="enter item here" type="text" value={this.state.newItem} onChange={this.newItemChange.bind(this)}/>
          </label>
          <input type="submit" value="submit" className="btn btn-sm btn-primary"/>
        </form>

        <button onClick={this.clear.bind(this)} className="btn btn-sm btn-warning">Clear</button>

        <br/>

        <div className="panel panel-default">
          <div className="panel-heading">
            Todo List
          </div>
          <div className="panel-body">
            <ul>
              {todoItems}
            </ul>
          </div>
        </div>
        
      </div>
    );
  }

}

export default TodoList;
