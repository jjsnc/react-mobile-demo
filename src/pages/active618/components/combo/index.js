

import React, { Component } from 'react';
import "./index.less";
export default class Combo extends Component {
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