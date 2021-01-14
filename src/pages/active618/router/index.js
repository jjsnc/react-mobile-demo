import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Login from "../view/login";
import Register from "../view/register";
import Home from "../view/home";
import Details from "../view/details";
export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/home" component={Home}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
