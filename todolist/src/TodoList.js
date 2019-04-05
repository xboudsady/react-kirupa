import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    // Add item in array if input value is not empty
    if (this._inputElement.value !== '') {
      // Push an object into array
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      // update state for our new itemArray
      this.setState({
        items: itemArray
      });

      // reset the input to empty
      this._inputElement.value = '';
    }

    // Log our current itemArray of objects
    console.log(itemArray);

    e.preventDefault();
  }
  
  
  render() {
    return (
      <div className="toDoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
              placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList;