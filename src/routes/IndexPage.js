import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import Explosion from '../components/Explosion/Explosion';
function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
    <div className={styles.normal}>
     <Explosion routerList={history}/>
    </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
