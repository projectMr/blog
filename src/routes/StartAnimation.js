import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon,Card} from 'antd';
import { Link } from 'dva/router';
import styles from './StartAnimation.css';
class StartAnimation extends Component {
render(){
  return(
    <div className={styles.body}>
    <div className={styles.wrap}>
        <div className={styles.oneDiv}>宗</div>
        <div className={styles.twoDiv}></div>
        <div className={styles.threeDiv}>白</div>
        <div className={styles.fourDiv}></div>
        <div className={styles.fiveDiv}><Icon type="smile-o" /></div>
        <div className={styles.sixDiv}>小</div>
    </div>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="宗小白的个人网站" bordered={false} style={{ width: 300 }}>
       <Link to="/home"><Icon type="link" />博客首页</Link>
      </Card>
     </div>
    </div>
  )
}

}
export default connect()(StartAnimation);
