import React ,{Component}from 'react';
import styles from './MainLayout.css';
import Header from './Header';
import CopyHeader from './CopyHeader';
import { Layout,Breadcrumb ,Spin } from 'antd';
const { Footer } = Layout;
// 引入名字替换文件
import Name from '../../ZH/Name.js';
class MainLayout extends Component{
  render(){
    const { children ,location } = this.props;
    let showTitle = location.pathname.slice(location.pathname.lastIndexOf('/')+1,10000);
    let threefloor = '';
    if(Object.keys(Name).length!=0){
      Object.keys(Name).map((item)=>{
         if(item==showTitle){
           threefloor = Name[item].title;
         }
      })
    }
    return (
      <div className={styles.normal}>
        <CopyHeader location={location}/>
        <div className={styles.content} >
          <div className={styles.main}>
            <Breadcrumb >
            <Breadcrumb.Item><a href="">主页</a></Breadcrumb.Item>
            {location.openKeys?<Breadcrumb.Item><a href="">{location.title}</a></Breadcrumb.Item>:''}
            <Breadcrumb.Item>{threefloor}</Breadcrumb.Item>
           </Breadcrumb>
             <hr style={{'marginTop':'20px'}}/>
            {children}
          </div>
          <hr/>
          <Footer style={{ textAlign: 'center' }}>
            博客©2018 Created by 无聊的情绪疯子i
          </Footer>
        </div>
      </div>
    );
  }
}

export default MainLayout;
