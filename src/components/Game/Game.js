import React ,{ Component }from 'react';
import { Card ,Col, Row,Tag } from 'antd';
import { connect } from 'dva';
import styles from './Game.css';
import mangseng from '../../assets/ms.jpg';
class Game extends Component {
  render(){
    return(
      <div>
        <Row gutter={16}>
          <Col span={10}>
          <h3 style={{marginBottom:'20px'}}>就喜欢你看不惯我，又干不掉我的样子。</h3>
          <Card  bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
               <img alt="盲僧" width="100%" src={mangseng} className={styles.lol}/>
            </div>
                <div className="custom-card">
                  <p className={styles.tag}>游戏名称：英雄联盟</p>
                  <p className={styles.tag}>所在大区：无畏先锋</p>
                  <p className={styles.tag}>游戏  ID：卡其色纯净水z</p>
                  <Tag color="blue">出门多兰剑</Tag>
                  <Tag color="blue">不服就是干</Tag>
                  <Tag color="blue">爱生活爱游戏</Tag>
                </div>
          </Card>
          </Col>
        </Row>
     </div>
    )
  }
}
export default connect()(Game);
