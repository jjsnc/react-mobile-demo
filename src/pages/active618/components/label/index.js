

import React, { Component } from 'react';
export default class Label extends Component {
  static propTypes = {};
  static defaultProps = {
    hide: 2,
  };

  constructor(props) {
    super(props);
    this.state={
      value:1,
    }
  }
  render(){
    return (
      <div>123</div>
    )
  }
}