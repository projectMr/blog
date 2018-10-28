import React ,{ Component }from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
class Introduction extends Component {
  render(){
    return(
      <div>
      <Card title="我想大声告诉你：" bordered={true} style={{ width: 300 }}>
        <p>我就是我，不一样的烟火！！！</p>
      </Card>
     </div>
    )
  }
}
export default connect()(Introduction);
