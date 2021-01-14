import React, { Component } from "react";
import "./style/default.less";
import "normalize.css/normalize.css";
class App extends Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default App;
