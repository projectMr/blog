import React, { Component } from 'react';
import { connect } from 'dva';
import { Col ,Icon} from 'antd';
import { Link } from 'dva/router';
import styles from './JavaScript.css';
class JavaScript extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div>
      <div className={styles.lydiv}><Link to="/Doc/Promise"><Icon type="paper-clip" />Promise学习笔记</Link></div>
      <div className={styles.lydiv}><Link to="/Doc/Grammar"><Icon type="paper-clip" />容易忽略的坑(一)</Link></div>
      <div className={styles.lydiv}><Link to="/Doc/Objects"><Icon type="paper-clip" />容易忽略的坑(二)</Link></div>
      </div>
    )
  }
}
export default connect()(JavaScript);
