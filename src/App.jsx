import React from 'react'

import Home from './components/Home'
import Profile from './components/Profile'

import { HashRouter as Router, // 路由容器组件，用来包裹整个应用，全局（整个）使用一次
Route, // 路由的出口组件，指定路由内容在页面中的展示位置
Link // 路由的入口组件，就是导航菜单
} from 'react-router-dom'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div id='root'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <section>
                <Route path="/" component={Home} exact></Route>
                <Route path="/profile" component={Profile} exact></Route>
            </section>
        </div>
      </Router>

    )
  }
}
