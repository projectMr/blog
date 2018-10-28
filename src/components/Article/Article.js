import React, { Component } from 'react';
import { connect } from 'dva';
import { Col ,Icon} from 'antd';
import { Link } from 'dva/router';
import styles from './Article.css';
class Article extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div>
      <div className={styles.lydiv}><Link to="/life/HowSaltedFish"><Icon type="paper-clip" />如何做一条IT咸鱼</Link></div>
      <div className={styles.lydiv}><Link to="/life/Sentiment"><Icon type="paper-clip" />一本书中读到的</Link></div>
      </div>
    )
  }
}
export default connect()(Article);
