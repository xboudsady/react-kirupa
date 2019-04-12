import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('Rendering: MenuButton');

    return (
      <button id="roundButton"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default MenuButton;