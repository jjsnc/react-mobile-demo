import React, { Component } from "react";
import Swiper from "react-id-swiper";
import 'swiper/swiper.less'
export default class MySwiper extends Component {
  handleSwiper(value) {
    console.log(value);
  }
  render() {
    return (
      <div className="box">
        <Swiper>
          <div>Slide #1</div>
          <div>Slide #2</div>
          <div>Slide #3</div>
          <div>Slide #4</div>
          <div>Slide #5</div>
        </Swiper>
      </div>
    );
  }
}
