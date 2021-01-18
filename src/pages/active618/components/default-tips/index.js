

import React, { Component } from 'react';
import "./index.less";
export default class DefaultTips extends Component {
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
      <div className="default-page">
          <img alt="缺省图片提示" src="https://img.91funlife.com/img/hsk/zhibeishenghuo/v6-default@2x.png"></img>

          <div className="title">{this.state.title || "抱歉，未找到符合条件的套餐"}</div>
          <div className="sub-title">{this.state.subTitle}</div>

      </div>
    )
  }
}