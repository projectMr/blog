import React from 'react';
import { Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Game from './routes/Game';
import Introduction from "./routes/Users.js";
// 技术文档容器
import Container from './routes/Container.js';
// 技术文档里面的组件
import JavaScript from './components/JavaScript/JavaScript';
import Promise from './components/JavaScript/Promise/Promise';
import Objects from './components/JavaScript/Objects/Objects';
import Grammar from './components/JavaScript/Grammar/Grammar';
// 生活容器
import ContainerLife from './routes/ContainerLife.js';
// 生活里面的文章
import Article from './components/Article/Article';
import HowSaltedFish from './components/Article/HowSaltedFish/HowSaltedFish';
import Sentiment from './components/Article/Sentiment/Sentiment';
// 旅行的容器
import Travel from './components/Travel/Travel';
// 开始动画
import StartAnimation from './routes/StartAnimation.js';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={StartAnimation}/>
      <Route path="/home" component={IndexPage}/>
      <Route path="/Introduction" component={Introduction} />
      <Route path="/Game" component={Game} />
      <Route path="/Doc/" component={Container}>
        <Route path="JavaScript" component={JavaScript}/>
        <Route path="Promise" component={Promise}/>
        <Route path="Grammar" component={Grammar}/>
        <Route path="Objects" component={Objects}/>
      </Route>
      <Route path="/life/" component={ContainerLife}>
        <Route path="Article" component={Article}/>
        <Route path="HowSaltedFish" component={HowSaltedFish}/>
        <Route path="Travel" component={Travel}/>
        <Route path="Sentiment" component={Sentiment}/>
        </Route>
    </Router>
  );
}

export default RouterConfig;
