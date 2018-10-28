import React, { Component } from 'react';
import { connect } from 'dva';
import { Card , Icon} from 'antd';
import styles from '../../../commonStyle/commonStyle.css';
class Promise extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div className={styles.body}>
        <Card title={<h2><Icon type="pushpin-o" />如何做一条合格的咸鱼</h2>} bordered={true} className={styles.cardStyle}>
        <p>9/4/2017 1:52:59 PM    </p>

        <h3>follow my heart  犯二起来!</h3>
        <hr className={styles.hrWidth}/>
        <div>
        写了删，删了写。。。心里在想怎么做一条合格的“咸鱼”，旁人看来“咸鱼”，这人有病吧，
        不好好的工作、生活，没事做什么咸鱼。但是“咸鱼”一词，在我这里，我并没有感觉是一个
        “贬义”的词语，我觉的顶多是“中性”的，关键看你怎么去理解。我勉强算一个前端入门的小
        白，也就是大家口中的程序猿，每天的工作必然是敲代码。然后就是等着发薪。在别人看来
        这样的生活不是很好的吗？，但是你有没有想过，为什么在你20几岁的年纪，要过80几岁的
        生活，每天养老一样。生活就2个字“上班”、“薪水”，我想说：“为嘛不趁着年轻，多做点自己喜欢的事。”，一个背包，一张机票足够了。（ps:在自己的空闲时间多出去转转,做一条合格的咸鱼~~）
        </div>
        <div dangerouslySetInnerHTML={{__html:'<audio src="http://mp3.henduoge.com/s/2016-10-19/1476869332.mp3"  autoplay="autoplay"></audio>'}}>
        </div>
        </Card>
      </div>
    )
  }
}
export default connect()(Promise);
