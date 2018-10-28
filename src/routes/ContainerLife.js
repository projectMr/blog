import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './ContainerLife.css';
import MainLayout from '../components/MainLayout/MainLayout';
import defineMessages from '../ZH/DocZh.js';
class ContainerLife extends Component {
render(){
  let { location } = this.props;
  location.openKeys=defineMessages.lifeTitle.id;
  location.title = defineMessages.lifeTitle.title;
  return(
  <MainLayout location={location}>
    <div className={styles.normal}>
      {this.props.children}
    </div>
  </MainLayout>
  )
}

}
export default connect()(ContainerLife);
