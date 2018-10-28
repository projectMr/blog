import React, { Component } from 'react';
import { connect } from 'dva';
import { Card , Icon} from 'antd';
import styles from '../../../commonStyle/commonStyle.css';
class Sentiment extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div className={styles.body}>
        <Card title={<h2><Icon type="pushpin-o" />一本书中读到的</h2>} bordered={true} className={styles.cardStyle}>
        <p>9/11/2017 10:42:22 AM     </p>

        <h3>在我看到一本书的时候，觉的书中的这一段很有意思，所以分享出来。</h3>
        <hr className={styles.hrWidth}/>
        <div>
        当我还是一个初出茅庐的程序员时，我想掌握自己所用语言的每个特性。我写程序时会尝试使用所用特性，
        我认为这是炫耀的好方法，而我也的确出了不少风头，因为我对各个特性了如指掌，谁有问题我都能解答。
        最终，我认定这些特性中有一部分特性带来的麻烦远远超出他们的价值。其中，一些特性因为规范很不完
        善而导致可移植性问题，一些特性会导致代码难以阅读或修改，一些特性诱使我追求奇淫技巧但却易于出错，
        还有一些特性就是设计错误。有时候语言的设计者也会犯错。）
        </div>
        <div dangerouslySetInnerHTML={{__html:'<audio src="http://mp3.qqmusic.cc/yq/5525334.mp3"  autoplay="autoplay"></audio>'}}>
        </div>
        </Card>
      </div>
    )
  }
}
export default connect()(Sentiment);
