import React, { Component } from 'react';
import { connect } from 'dva';
import { Col ,Icon} from 'antd';
import { Link } from 'dva/router';
import styles from './Travel.css';
class Article extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div>
      <div className={styles.lydiv}><Link to="#"><Icon type="paper-clip" />乌镇</Link></div>
      </div>
    )
  }
}
export default connect()(Article);
