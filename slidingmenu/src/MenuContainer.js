import React, { Component } from 'react';

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // event handler to toggle our toggleMenu()
  handleMouseDown(e) {
    this.toggleMenu();

    console.log('clicked');
    e.stopPropagation();
  }

  // change state for our menu true:false
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuContainer;