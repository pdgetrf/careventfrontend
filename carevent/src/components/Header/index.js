import React from "react";
import { connect } from "dva";
import { Icon, Input, Layout, Dropdown, Menu } from "antd";
import { Link } from "dva/router";
import styles from "./index.less";
import logo from "../../assets/logo.png";

const { Header } = Layout;
const { Search } = Input;

function GlobalHeader() {
  const menu = (
    <Menu
      className={styles.menu}
      selectedKeys={[]}
      onClick={() => console.log("logout")}
    >
      <Menu.Item key="logout">
        <Icon type="logout" />退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <Header>
      <Link to="/" className={styles.logo} key="logo">
        <img src={logo} alt="logo" width="60" />
      </Link>
      <Search
        placeholder="input search text"
        size="large"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <div className={styles.right}>
        <Dropdown overlay={menu}>
          <span className={`${styles.action} ${styles.account}`}>
            <span className={styles.name}>测试</span>
          </span>
        </Dropdown>
      </div>
    </Header>
  );
}

GlobalHeader.propTypes = {};

export default connect()(GlobalHeader);
