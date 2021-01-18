import React,{Fragment} from "react";
import { connect } from "react-redux";
import { Modal } from "antd-mobile";
import DefaultTips from "../../components/default-tips";
import "./index.less";
function closest(el, selector) {
  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      modal1: false,
      modal2: false,
      value:"",
      activeSpecialty: "特色1",
      specialtyList: ["特色1", "特色2", "特色3", "特色4", "特色5", "特色6"],
      activeBourn: "五角场",
      bournList: ["五角场", "南京西路", "外滩", "京东", "长海", "海风"],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    
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
      console.log("你好呀 我滚动到底部了");
    }
  }
  handleFeatureClick(item) {
    this.handleFeatureHide();
    this.setState({
      activeSpecialty: item,
    });
  }

  handleFeatureShow() {
    this.setState({
      modal1: true,
    });
  }
  handleFeatureHide() {
    this.setState({
      modal1: false,
    });
  }
  handleFeatureClear() {
    this.handleFeatureHide();
    this.setState({
      activeSpecialty: "",
    });
  }
  handleBournClick(item) {
    this.handleBournHide();
    this.setState({
      activeBourn: item,
    });
  }

  handleBournShow() {
    this.setState({
      modal2: true,
    });
  }
  handleBournHide() {
    this.setState({
      modal2: false,
    });
  }
  handleBournClear() {
    this.handleBournHide();
    this.setState({
      activeBourn: "",
    });
  }
  handleInput(e){
    this.setState({
      value:e.target.value
    })
  }
  handleClearInput(){
    this.setState({
      value:""
    })
  }
  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, ".am-modal-content");
    if (!pNode) {
      // e.preventDefault();
    }
  };
  handleFeatureList() {
    const specialtyList = this.state.specialtyList;
    const listItems = specialtyList.map((item) => (
      <div
        className={`sub-item ${
          this.state.activeSpecialty === item ? "active" : ""
        }`}
        key={item}
        onClick={() => this.handleFeatureClick(item)}
      >
        {item}
      </div>
    ));
    if (specialtyList.length % 3 !== 0) {
      return (
        <div className="list">
          {listItems}
          <div className="sub-item empty"></div>
        </div>
      );
    }
    return <div className="list">{listItems}</div>;
  }
  handleBournList() {
    const bournList = this.state.bournList;
    const listItems = bournList.map((item) => (
      <div
        className={`sub-item ${
          this.state.activeBourn === item ? "active" : ""
        }`}
        key={item}
        onClick={() => this.handleBournClick(item)}
      >
        {item}
      </div>
    ));
    if (bournList.length % 3 !== 0) {
      return (
        <div className="list">
          {listItems}
          <div className="sub-item empty"></div>
        </div>
      );
    }
    return <div className="list">{listItems}</div>;
  }
  render() {
    let {value} = this.state
    return (
      <div className="wrap">
        
        <div className={`fixed-section ${this.state.sticky ? "active" : ""} `}>
          <div className="input-wrap">
            <input className="input" placeholder="酒店名称/关键词" value={value} onChange={this.handleInput}></input>
             { value.length>0 ? <div className="close-btn" onClick={this.handleClearInput}></div>:''}
          </div>
        </div>
        <div className="header-section">
          <div className="title">酒景打包订</div>
          <div className="sub-title">“省心更优惠”</div>
        </div>

        <div className={`select-section ${this.state.sticky ? "active" : ""} `}>
          <div
            className={`targets ${this.state.modal1 ? "active" : ""}`}
            onClick={this.handleFeatureShow.bind(this)}
          >
            {this.state.activeSpecialty || "特色"}
          </div>
          <div
            className={`tags ${this.state.modal2 ? "active" : ""}`}
            onClick={this.handleBournShow.bind(this)}
          >
            {this.state.activeBourn || "目的地"}
          </div>
        </div>
        {true? <Fragment>
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
        </Fragment>:<div className="default-section"><DefaultTips title="抱歉，未找到符合条件的套餐"></DefaultTips></div>}
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={true}
          onClose={this.handleFeatureHide.bind(this)}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          wrapClassName="feature-section"
        >
          <div className="feature-content">
            <div className="header-article">
              <div className="left-item"></div>
              <div className="middle-item">全部特色</div>
              <div
                className="right-item"
                onClick={this.handleFeatureClear.bind(this)}
              >
                清除
              </div>
            </div>
            <div className="list-article">{this.handleFeatureList()}</div>
          </div>
        </Modal>

        <Modal
          visible={this.state.modal2}
          transparent
          maskClosable={true}
          onClose={this.handleBournHide.bind(this)}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          wrapClassName="bourn-section"
        >
          <div className="bourn-content">
            <div className="header-article">
              <div className="left-item"></div>
              <div className="middle-item">目的地</div>
              <div
                className="right-item"
                onClick={this.handleBournClear.bind(this)}
              >
                清除
              </div>
            </div>
            <div className="location-article">
              <div className="title">定位城市</div>
              <div className="city" data-name="{{locationCity.cityName}}">
                上海
              </div>
            </div>
            <div className="list-article">{this.handleBournList()}</div>
          </div>
        </Modal>
  
        
      </div>
    );
  }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Home);
