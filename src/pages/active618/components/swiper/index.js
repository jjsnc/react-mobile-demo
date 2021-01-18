import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.less";
import "./index.less";
export default class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realIndex: 0,
      list: [1, 2, 3, 4, 5, 6],
    };
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }
  handleSlideChange(realIndex) {
    this.setState({
      realIndex,
    });
  }
  render() {
    const params = {
      on: {
        slideChange: (event) => {
          this.handleSlideChange(event.realIndex);
        },
      },
    };
    let { list,realIndex } = this.state;
    return (
      <div className="swiper-article">
        <Swiper {...params} onChange={this.handleSlider}>
          {list.map((item) => {
          return  <div key={item}>Slide #1</div>;
          })}
        </Swiper>
        <div className="dots-list">
          <div>{realIndex+1}</div>
          <div>/</div>
          <div>{list.length}</div>
        </div>
      </div>
    );
  }
}
