import React, { Component } from 'react';
import { Button ,Carousel,Row,Col,Card,Icon,Tag,Badge } from 'antd';
import { Link } from 'dva/router';
import styles from './Explosion.css';
class Explosion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear:true,
    }
  }
  Clear(){
    this.setState({
      clear:false,
    })
  }
  render(){
    let { clear } = this.state;
    return(
      <div>
        <h1 className={styles.center}>前端程序猿&nbsp;&nbsp;<sub className={styles.titleBottom}>宗小白</sub></h1>
         <hr/>
           <Carousel autoplay>
            <div className={styles.carAuto}><h3 className={styles.bigWhiter}>F</h3></div>
            <div className={styles.carAuto}><h3 className={styles.bigWhiter}>U</h3></div>
            <div className={styles.carAuto}><h3 className={styles.bigWhiter}>C</h3></div>
            <div className={styles.carAuto}><h3 className={styles.bigWhiter}>K</h3></div>
         </Carousel>
       <hr/>
            <Row className={styles.distanceBottom}>
                <Col span={8}>
                  <Card loading={clear} title='分类：' style={{ width: '100%' ,height:'200px'}} onClick={this.Clear.bind(this)}>
                  暂无
                </Card>
              </Col>
                <Col span={8}>
                  <Card loading={clear} title='标签：' style={{ width: '100%' ,height:'200px'}} onClick={this.Clear.bind(this)}>
                  暂无
                </Card>
                </Col>
                <Col span={8}>
                  <Card loading={clear} title='热门文章：' style={{ width: '100%',height:'200px' }} onClick={this.Clear.bind(this)}>
                  <Icon type="github" />&nbsp;<Link to='/life/HowSaltedFish'>如何做一条合格的咸鱼</Link><br/>
                </Card>
                </Col>
            </Row>
      </div>
       )
  }
}

export default Explosion;
