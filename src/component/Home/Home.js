import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Blog from './Blog/Blog'
import Buy from './Buy/Buy'
import Course from './Course/Course'
import Forum from './Forum/Forum'

import './Home.css'

const { Header, Content, Footer } = Layout;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1117999_fuzgx9c98k5.js',
});

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">注销</a>
      </Menu.Item> 
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">我的信息</a>
      </Menu.Item>
    </Menu>
  );

class Home extends Component {
    render() {
        return (
            <Layout className="layout">
                <Router>
                    <Header>
                        <div className="logo"><Link to="/home"><IconFont type="icon-course" /></Link></div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link exact="true" to="/home/course">课程</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/home/buy">商城</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/home/blog">博客</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/home/forum">论坛</Link></Menu.Item>
                        </Menu>
                    </Header>
                    
                    <Content style={{ padding: '0 50px' }}>
                    <Dropdown overlay={menu}>
                            <div className="ant-dropdown-link" href="#">
                            您好， <Icon type="down" />
                            </div>
                        </Dropdown>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
                            <Route path="/home/course" component={Course}></Route>
                            <Route path="/home/buy" component={Buy}></Route>
                            <Route path="/home/blog" component={Blog}></Route>
                            <Route path="/home/forum" component={Forum}></Route>
                        </div>
                    </Content>
                </Router>
                <Footer style={{ textAlign: 'center' }}>
                    Course-System ©2019 Created by KaiKai
                </Footer>
            </Layout>

            
        )
    }
}

export default Home;