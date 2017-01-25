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
        {name: 'Mow the lawn'},
        {name:  'Get groceries'},
        {name: 'Laundry'}
      ],
      newItem: ''
    }

  }

  removeItem(key) {
     var array = this.state.items;
     array.splice(array.length-1-key, 1);
     this.setState({items: array})
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

    var scope = this;

    const todoItems = this.state.items.slice(0).reverse().map(function(item, index) {
      return <TodoItem item={item} key={index} removeItem={scope.removeItem.bind(scope, index)}></TodoItem>
    })

    return(
      <div className="container">

        <form onSubmit={this.addItem.bind(this)}>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">New</span>
            <input
              className="form-control"
              name="input"
              placeholder="enter item here"
              type="text" aria-describedby="basic-addon1"
              value={this.state.newItem}
              onChange={this.newItemChange.bind(this)}
            />
          </div>
          <input type="submit" value="submit" className="hidden"/>
        </form>

        <br/>

        <div className="panel panel-default">
          <div className="panel-heading">
            <strong>Tasks</strong>
          </div>
          <div className="panel-body">
            <ul>
              {todoItems}
            </ul>
          </div>
          <div className="panel-footer right">
            <button onClick={this.clear.bind(this)} className="btn btn-xs btn-danger">Clear All</button>
          </div>
        </div>

      </div>
    );
  }

}

export default TodoList;
