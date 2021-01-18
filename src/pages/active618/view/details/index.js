import React from "react";
import { connect } from "react-redux";
import { Carousel } from "antd-mobile";
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["1", "2", "3"],
      imgHeight: 176,
      slideIndex: 2,
    };
  }
  render() {
    return (
      <div className="details-wrap">
        <Carousel
          autoplay={false}
          infinite
        >
          {this.state.data.map((val, index) => (
            <img
              key={val + index}
              src={
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613532598&t=8c6dcb5c08961e729293acaef7c9fcfc"
              }
              alt=""
              style={{
                width: "100%",
                verticalAlign: "top",
                touchAction: "none",
              }}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Details);
