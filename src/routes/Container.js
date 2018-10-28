import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Container.css';
import MainLayout from '../components/MainLayout/MainLayout';
import defineMessages from '../ZH/DocZh.js';
class Container extends Component {
render(){
  let { location } = this.props;
  location.openKeys=defineMessages.promiseTitle.id;
  location.title = defineMessages.promiseTitle.title;
  return(
  <MainLayout location={location}>
    <div className={styles.normal}>
      {this.props.children}
    </div>
  </MainLayout>
  )
}

}
export default connect()(Container);
