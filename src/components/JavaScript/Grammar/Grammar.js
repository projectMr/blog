import React, { Component } from 'react';
import { connect } from 'dva';
import { Card , Icon} from 'antd';
import example1 from './images/example1.png';
import example2 from './images/example2.png';
import example3 from './images/example3.png';
import example4 from './images/example4.png';
import styles from '../../../commonStyle/commonStyle.css';
class Grammar extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div className={styles.body}>
        <Card title={<h2><Icon type="pushpin-o" />容易忽略的坑(一)</h2>} bordered={true} className={styles.cardStyle}>
        <p>9/11/2017 3:20:27 PM   </p>

        <h3>成长需要积累。</h3>

        <hr className={styles.hrWidth}/>
        <h3>NaN</h3>
        <p>通过一个方法来判断是否是NaN，首先说下NaN的定义：NaN是一个数值，它表示一个不能产生正常结果的运算结果。NaN不等于任何值，包括它自己。</p>
        <img src={example1} alt='example1' className={styles.imgBorder}/>
        <h3>if</h3>
        <p>if条件句中条件默认为false的值</p>
        <img src={example2} alt='example2' className={styles.imgBorder}/>
        <h3>for in</h3>
        <p>for in 会把一个对象的键值进行枚举，其实每次循环的时候，object的下一个属性名字符串被赋值给variable。通常你需要检测这个属性名是来自对象还是来自原型链，可以通过hasOwnProperty（）的方法进行判断。</p>
        <img src={example3} alt='example3' className={styles.imgBorder}/>
        <h3>数字</h3>
        <p>javascript中只有一个数字类型所以</p>
        <img src={example4} alt='example4' className={styles.imgBorder}/>
        </Card>
      </div>
    )
  }
}
export default connect()(Grammar);
