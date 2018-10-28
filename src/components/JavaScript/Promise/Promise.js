import React, { Component } from 'react';
import { connect } from 'dva';
import { Card , Icon} from 'antd';
import example1 from './images/example1.png';
import example2 from './images/example2.png';
import example3 from './images/example3.png';
import example4 from './images/example4.png';
import example5 from './images/example5.png';
import example6 from './images/example6.png';
import example7 from './images/example7.png';
import styles from '../../../commonStyle/commonStyle.css';
class Promise extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div className={styles.body}>
        <Card title={<h2><Icon type="pushpin-o" />Promise</h2>} bordered={true} className={styles.cardStyle}>
        <p>8/28/2017 9:41:02 AM   </p>

        <h3>为什么我要把Promise单独拿出来，原因在于我对这个‘量词’，一直是似懂非懂的，最近还有些自己的时间，所以准备把这个Promise学习一下。</h3>

        <hr className={styles.hrWidth}/>
        <p>Promise有三种状态分别是Pending(进行中)、Fulfilled（已成功）、Rejected（已失败），三种状态之间的转换如下，并且不可反方向转换。</p>
         <img src={example2} alt='example2' className={styles.imgBorder}/>
         <h3>基本用法</h3>
         <p>-Promise是一个对象的构造函数，我们使用的时候，需要先对其进行实例化，然后在进行使用。<br/></p>
          <img src={example1} alt='example1' className={styles.imgBorder}/><br/>
          -因为promise本身是一个构造函数，里面有两个参数一个是Fulfilled，一个是Rejected，我们在实例化的时候，在成功的逻辑里面会写resolve（ps:也就是成功的回调函数）,失败的时候会写Rejected（ps:也就是失败的回调函数）,大概的主题图就是这样。但是如果这样呢？<br/>
          <img src={example3} alt='example3' className={styles.imgBorder}/><br/>
          如果是上面的情况是不是就有点尴尬了，所以我们不妨，在resolve()、reject()两个函数前面添加return，这样就保险了很多。<br/>
          -关于回调地域<br/>
          <img src={example4} className={styles.imgBorder} alt='example4'/><br/>
          <img src={example5} className={styles.imgBorder} alt='example5'/><br/>
          <p>
           下面我们来解释下例子3中的代码，p1是一个新创建的promise对象，p2也是一个新创建的promise对象，然后我们看红色的部分resolve(p1),这个地方是不是有一点不一样呢？是的，我们p1放进了p2的resolve()函数里面了，这样的话，p2的结果就会受到p1结果的影响。如果这样的话，我们是不是可以利用这个解决回调地域这个问题呢？<br/>
          </p>
          <img src={example6} className={styles.imgBorder} alt='example6'/><br/>
          这样的话是不是就避免了，代码丑陋的层层嵌套。<br/>
          -Promise.all()<br/>
          <img src={example7} className={styles.imgBorder} alt='example7'/><br/>
          <hr className={styles.hrWidth}/>
          <p>感谢阮一峰老师的博文，上面仅仅是看过阮老师文章后，自己的理解，如果想要了解的更多，请访问<a href='http://es6.ruanyifeng.com/#docs/promise'>http://es6.ruanyifeng.com/#docs/promise></a></p>
        </Card>
      </div>
    )
  }
}
export default connect()(Promise);
