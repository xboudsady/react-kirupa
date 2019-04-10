import React, { Component } from 'react';

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  // delete an <li> elemen in the DOM tree
  delete(key) {
    this.props.delete(key);
  }

  // create an <li> element to the DOM tree
  createTasks(item) {
    return <li onClick={ () => this.delete(item.key)} 
              key={item.key}
              >{item.text}</li>
  }
  
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }
}

export default TodoItems;