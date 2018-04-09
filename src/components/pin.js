import React, { Component } from 'react';
import './pin.scss';

class Pin extends Component {
  render() {
    return (
      <div className="pin">
        {this.props.text}
      </div>
    );
  }
}

export default Pin;
