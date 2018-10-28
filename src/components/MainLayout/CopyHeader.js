import React from 'react';
import { Menu, Icon,Layout} from 'antd';
import { Link } from 'dva/router';
// 样式
import styles from './CopyHeader.css';
const { SubMenu } = Menu;
const { Sider } = Layout;
function CopyHeader({ location }) {
  return (
    <Sider width={200} style={{ background: '#404040' }}>
     <div className={styles.logo}><Link to="/"><div className={styles.avatar}></div></Link></div>
      <div className={styles.author}>无聊的情绪疯子</div>
       <Menu
         mode="inline"
         theme="dark"
         defaultSelectedKeys={[location.pathname]}
         defaultOpenKeys={[location.openKeys]}
         style={{ height: '100%', borderRight: 0 }}
       >
         <Menu.Item key="/home"><Link to="/home"><Icon type="home" />首页</Link></Menu.Item>
         <Menu.Item key="/Introduction"><Link to="/Introduction"><Icon type="bars" />简介</Link></Menu.Item>
         <SubMenu key="sub1" title={<span><Icon type="user" />技术文档</span>}>
           <Menu.Item key="1">React</Menu.Item>
            <Menu.Item key="2">React源码学习笔记</Menu.Item>
           <Menu.Item key="3">React Native</Menu.Item>
           <Menu.Item key="4">Webpack2</Menu.Item>
           <Menu.Item key="Node">Node</Menu.Item>
           <Menu.Item key="/Doc/JavaScript"><Link to='/Doc/JavaScript'>JavaScript</Link></Menu.Item>
         </SubMenu>
         <SubMenu key="sub2" title={<span><Icon type="laptop" />生活</span>}>
           <Menu.Item key="/life/Travel"><Link to='/life/Travel'>旅行</Link></Menu.Item>
           <Menu.Item key="/life/Article"><Link to='/life/Article'>琐文</Link></Menu.Item>
         </SubMenu>
         <SubMenu key="sub3" title={<span><Icon type="notification" />爱好</span>}>
           <Menu.Item key="/Game"><Link to="/Game"><Icon type="bars" />游戏</Link></Menu.Item>
         </SubMenu>
         <Menu.Item key="/github"><a href="https://github.com/projectMr"><Icon type="paper-clip" />Github</a></Menu.Item>
       </Menu>
     </Sider>
  );
}

export default CopyHeader;
