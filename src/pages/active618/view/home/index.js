import React from "react";
import { connect } from "react-redux";
import "./index.less";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sticky: false};
  }
  componentDidMount() {
    window.addEventListener("scroll", this.bindHandleScroll);
  }
  //在componentWillUnmount，进行scroll事件的注销
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindHandleScroll);
  }
  bindHandleScroll = () => {
    var scrollt = document.documentElement.scrollTop;
    if(scrollt>100){
      this.setState({sticky:true})
    }else{
      this.setState({sticky:false})
    }
  };
  render() {
    return (
      <div className="wrap">
        <div className={`fixed-section ${this.state.sticky?'active':''} `}>
          <div className="input-wrap">
            <input className="input" placeholder="酒店名称/关键词"></input>
          </div>
        </div>
        <div className="header-section">
          <div className="title">酒景打包订</div>
          <div className="sub-title">“省心更优惠”</div>
        </div>

        <div className={`select-section ${this.state.sticky?'active':''} `}>
          <div className="targets ">目的地</div>
          <div className="tags">目的地</div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Home);
