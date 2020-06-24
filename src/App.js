import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.less';
import { Button } from 'antd-mobile';
function App() {
  return (
    <div className="App">
      <div className="div">test</div>
      <div className="div2">test</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button className="btn">按钮</Button>
      </header>
    </div>
  );
}

export default App;
