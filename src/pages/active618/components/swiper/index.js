import React, { Component } from "react";
import AwesomeSwiper from "react-awesome-swiper";
import "./index.less";

export default class Swiper extends Component {
  static propTypes = {};
  static defaultProps = {
    hide: 2,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      config: {
        loop: false,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        speed: 500,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          bulletElement: "li",
          hideOnClick: true,
          clickable: true,
        },
        on: {
          slideChange: function () {
            console.log(this.activeIndex);
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="swiper-section">
        <AwesomeSwiper
          ref={(ref) => (this.swiperRef = ref)}
          config={this.state.config}
          className="your-classname"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">slider1</div>
            <div className="swiper-slide">slider2</div>
            <div className="swiper-slide">slider3</div>
          </div>
        </AwesomeSwiper>
      </div>
    );
  }
}
