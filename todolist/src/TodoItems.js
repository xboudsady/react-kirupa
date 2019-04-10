import React, { Component } from 'react';

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  // create an <li> element to the DOM tree
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
  
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

export default TodoItems;