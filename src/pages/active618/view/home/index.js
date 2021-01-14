import React from "react";
import { connect } from "react-redux";
import "./index.less";
class Home extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="wrap">
        <div className="fixed-section">
          <input className="input"></input>
        </div>
        <div className="header-section">
          <div className="title">酒景打包订</div>
          <div className="sub-title">“省心更优惠”</div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Home);
