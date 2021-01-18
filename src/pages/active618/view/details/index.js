import React from "react";
import { connect } from "react-redux";
import MySwiper from "../../components/swiper";
import "./index.less";
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newlist: [1, 2, 3, 4, 5, 6],
    };
    this.handleSwiper = this.handleSwiper.bind(this);
  }
  componentDidMount() {}
  handleSwiper() {}
  goNext = () => {
    //use `this.swiperRef.swiper` to get the instance of Swiper
    this.swiperRef.swiper.slideNext();
  };
  render() {
    return (
      <div className="details-wrap">
        <div className="header-section">
           <MySwiper />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Details);
