

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
    let {title, subTitle} =  this.props;
    return (
      <div className="default-page">
          <img className="image-item" alt="缺省图片提示" src="https://img.91funlife.com/img/hsk/zhibeishenghuo/v6-default@2x.png"></img>
          <div className="title">{title}</div>
          <div className="sub-title">{subTitle}</div>
      </div>
    )
  }
}