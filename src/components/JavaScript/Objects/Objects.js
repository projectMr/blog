import React, { Component } from 'react';
import { connect } from 'dva';
import { Card , Icon} from 'antd';
import example1 from './images/example1.png';
import example2 from './images/example2.png';
import example3 from './images/example3.png';
import example4 from './images/example4.png';
import example5 from './images/example5.png';
import styles from '../../../commonStyle/commonStyle.css';
class Objects extends Component {
componentDidMount(){

  }

  render(){
    return(
      <div className={styles.body}>
        <Card title={<h2><Icon type="pushpin-o" />容易忽略的坑(二)</h2>} bordered={true} className={styles.cardStyle}>
        <p>9/11/2017 5:40:05 PM   </p>

        <h3> 这篇主要说下对象中的一些容易忽略的坑，对象的定义：javascript包含数字、字符串、布尔值、null值和undefine值。除此之外的所有值都是对象。
        对象是属性的容器，每个属性都拥有自己的名字和值。属性的名字可以是包括空字符串在内的任意字符，属性值可以是除了undefined值之外的任何值。
        javascript包含一种原型链的特性，允许对象继承另外一个对象的属性。正确地使用它能减少对象初始化时消耗的时间和内存。</h3>

        <hr className={styles.hrWidth}/>
        <h3>对象字面量</h3>
        <p>一个对象字面量就是包围在一对花括号中的零个或多个“名/值”对。</p>
        <img src={example1} alt='example1' className={styles.imgBorder}/>
        <h3>检索</h3>
        <p>检索顾名思义就是查找对象中的属性，两种方式：A[b]或者A.b,但是我们要优先考虑后者也就是.因为它更紧凑、可读性更好。</p>
        <h3>更新</h3>
        <p>对象里面的值可以通过赋值语句进行更新，如果属性名存在那么就直接更新对应属性名的值，如果不存在该属性就会扩充到该对象中。</p>
        <img src={example2} alt='example2' className={styles.imgBorder}/>
        <h3>引用</h3>
        <p>对象通过引用来传递，但是不会被复制</p>
        <img src={example3} alt='example3' className={styles.imgBorder}/>
        <h3>原型</h3>
        <p>原型连接只有在检索值的时候才被用到。如果我们尝试获取对象的某个属性值，但是该对象没有此属性名，那么javascript就会试着从原型对象中获取该属性值，
        如果该原型对象中也不存在，那么它就会向原型中的原型对象中查找，直达顶层Object.prototype。如果想要的属性没找到，就会返回一个undefined。该过程称
        作“委托”</p>
        <p>原型关系是一种动态的关系。如果在原型中添加一个新的属性，那么在所有基于该原型创建的对象中都可以查找到该属性。</p>
        <h3>反射</h3>
        <p>反射和检索很像，上面说过检索的时候，原型链是存在的，那么反射就是我们在判断对象中是不是存在某一个属性的时候，如果该对象中没有，那么它会向原型链中查找，如果我们不想它去原型链中查找，可以这样做。hasOwnProperty()进行判断如果该对象拥有该属性就会返回true。</p>
        <h3>枚举</h3>
        <p>对象枚举的时候，我们是控制不了，枚举的顺序的，但是如果我们有这个需求？怎么办？</p>
        <img src={example4} alt='example4' className={styles.imgBorder}/>
        <h3>删除</h3>
        <p>delete可以进行对象属性的删除，但是删除后可能会让原型链中的属性暴露出来。</p>
        <h3>减少全局变量的污染</h3>
        <p>全局变量可以削弱代码的灵活性，所以要减少全局变量的使用。最小化使用全局变量的方法之一是创建一个唯一的全局变量</p>
        <img src={example5} alt='example5' className={styles.imgBorder}/>
        </Card>
      </div>
    )
  }
}
export default connect()(Objects);
