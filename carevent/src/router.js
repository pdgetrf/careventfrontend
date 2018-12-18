import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/Index/Index'
import LoginPage from './routes/Login/index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
