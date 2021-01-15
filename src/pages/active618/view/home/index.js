import React from "react";
import { connect } from "react-redux";
import "./index.less";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sticky: false };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.bindHandleScroll);
  }
  //在componentWillUnmount，进行scroll事件的注销
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindHandleScroll);
  }
  bindHandleScroll = () => {
    this.handleSticky();
    this.handleScorllBottom();
  };
  handleSticky() {
    var scrollt = document.documentElement.scrollTop;
    if (scrollt > 100) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  }
  handleScorllBottom() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
       console.log('你好呀 我滚动到底部了');
    }
  }
  render() {
    return (
      <div className="wrap">
        <div className={`fixed-section ${this.state.sticky ? "active" : ""} `}>
          <div className="input-wrap">
            <input className="input" placeholder="酒店名称/关键词"></input>
          </div>
        </div>
        <div className="header-section">
          <div className="title">酒景打包订</div>
          <div className="sub-title">“省心更优惠”</div>
        </div>

        <div className={`select-section ${this.state.sticky ? "active" : ""} `}>
          <div className="targets ">目的地</div>
          <div className="tags">目的地</div>
        </div>
        <div className="list-section">
          <div className="list">
            <div className="sub-item">
              <div className="header-article">
                <div className="title">沪上冬季温泉泡场</div>
                <div className="city">上海</div>
              </div>
              <div className="tags-article">
                <div className="tag">情侣必去</div>
                <div className="tag">网红餐厅</div>
                <div className="tag">家庭聚餐</div>
              </div>
              <div className="picture-article">
                <div className="left-item">
                  <img
                    className="image-item"
                    alt="图片"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                  />
                </div>
                <div className="right-item">
                  <div className="top">
                    <img
                      className="image-item"
                      alt="图片"
                      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                    />
                  </div>
                  <div className="bottom">
                    <img
                      className="image-item"
                      alt="图片"
                      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                    />
                  </div>
                </div>
              </div>
              <div className="describe-article">
                佘山温泉主题酒店｜含双人下午茶+双人温泉门票+双
                人下午茶+游乐场门票2张+多久啊实打实就看到
                佘山温泉主题酒店｜含双人下午茶+双人温泉门票+双
                人下午茶+游乐场门票2张+多久啊实打实就看到
              </div>
              <div className="submit-article">
                <div className="left-item">
                  <div className="top">
                    <div className="icon">¥</div>
                    <div className="num">1200</div>
                    <div className="txt">起</div>
                    <div className="tips"></div>
                  </div>
                  <div className="bottom">市场价￥1699</div>
                </div>
                <div className="right-item">
                  <div className="success-btn">抢购</div>
                </div>
              </div>
            </div>
            <div className="sub-item">
              <div className="header-article">
                <div className="title">沪上冬季温泉泡场</div>
                <div className="city">上海</div>
              </div>
              <div className="tags-article">
                <div className="tag">情侣必去</div>
                <div className="tag">网红餐厅</div>
                <div className="tag">家庭聚餐</div>
              </div>
              <div className="picture-article">
                <div className="left-item">
                  <img
                    className="image-item"
                    alt="图片"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                  />
                </div>
                <div className="right-item">
                  <div className="top">
                    <img
                      className="image-item"
                      alt="图片"
                      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                    />
                  </div>
                  <div className="bottom">
                    <img
                      className="image-item"
                      alt="图片"
                      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                    />
                  </div>
                </div>
              </div>
              <div className="describe-article">
                佘山温泉主题酒店｜含双人下午茶+双人温泉门票+双
                人下午茶+游乐场门票2张+多久啊实打实就看到
                佘山温泉主题酒店｜含双人下午茶+双人温泉门票+双
                人下午茶+游乐场门票2张+多久啊实打实就看到
              </div>
              <div className="submit-article">
                <div className="left-item">
                  <div className="top">
                    <div className="icon">¥</div>
                    <div className="num">1200</div>
                    <div className="txt">起</div>
                    <div className="tips"></div>
                  </div>
                  <div className="bottom">市场价￥1699</div>
                </div>
                <div className="right-item">
                  <div className="success-btn">抢购</div>
                </div>
              </div>
            </div>
            <div className="sub-item">
              <div className="header-article">
                <div className="title">沪上冬季温泉泡场</div>
                <div className="city">上海</div>
              </div>
              <div className="tags-article">
                <div className="tag">情侣必去</div>
                <div className="tag">网红餐厅</div>
                <div className="tag">家庭聚餐</div>
              </div>
              <div className="picture-article">
                <div className="left-item">
                  <img
                    className="image-item"
                    alt="图片"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                  />
                </div>
                <div className="right-item">
                  <div className="top">
                    <img
                      className="image-item"
                      alt="图片"
                      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                    />
                  </div>
                  <div className="bottom">
                    <img
                      className="image-item"
                      alt="图片"
                      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic25.nipic.com%2F20121107%2F8847866_164210379199_2.jpg&refer=http%3A%2F%2Fpic25.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612601906&t=40dcdaf1f0c30439aae6b033955355af"
                    />
                  </div>
                </div>
              </div>
              <div className="describe-article">
                佘山温泉主题酒店｜含双人下午茶+双人温泉门票+双
                人下午茶+游乐场门票2张+多久啊实打实就看到
                佘山温泉主题酒店｜含双人下午茶+双人温泉门票+双
                人下午茶+游乐场门票2张+多久啊实打实就看到
              </div>
              <div className="submit-article">
                <div className="left-item">
                  <div className="top">
                    <div className="icon">¥</div>
                    <div className="num">1200</div>
                    <div className="txt">起</div>
                    <div className="tips"></div>
                  </div>
                  <div className="bottom">市场价￥1699</div>
                </div>
                <div className="right-item">
                  <div className="success-btn">抢购</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Home);
