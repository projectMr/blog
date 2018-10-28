import React from 'react';
import { connect } from 'dva';
import styles from './Game.css';
import GameComponent from "../components/Game/Game";
import MainLayout from '../components/MainLayout/MainLayout';

function Game({ location }) {
  location.openKeys='sub3';
  location.title='爱好';
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <GameComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(Game);
