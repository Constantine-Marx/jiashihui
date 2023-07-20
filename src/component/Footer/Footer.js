import {AtTabBar} from "taro-ui";
import React from "react";
import Taro from "@tarojs/taro";
import store from "../../store";
import {toHome, toPublish, toUser} from "../../store/actions";

class Footer extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: this.props.current
    }
  }

  handleClick(value) {
    switch (value) {
      case 0:
        store.dispatch(toHome());
        Taro.switchTab({
          url: "/pages/index/index"
        })
        break;
      case 1:
        store.dispatch(toPublish());
        Taro.switchTab({
          url: "/pages/publish/publish"
        })
        break;
      case 2:
        store.dispatch(toUser());
        Taro.switchTab({
          url: "/pages/user/user"
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <>
        <AtTabBar
          fixed
          tabList={[
            { title: "已发布", iconType: "list" },
            { title: "发布", iconType: "add" },
            { title: "我的", iconType: "user" },
          ]}
          onClick={this.handleClick.bind(this)}
          current={store.getState()}

        />
      </>
    );
  }
}
export default Footer;

