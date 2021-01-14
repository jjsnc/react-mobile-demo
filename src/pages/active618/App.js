import React, { Component } from 'react';
import './style/default.less';
import 'normalize.css/normalize.css'
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
