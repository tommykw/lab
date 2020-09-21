import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Demos } from './pages/demos'
import { DemoDetail } from './pages/demo_detail'

const Main = (
  <>
    <Router>
      <Switch>
        <Route exact path="/demos" component={Demos} />
        <Route exact path="/demos/:demoType" component={DemoDetail} />
        <Redirect to="/demos" path="*" />
      </Switch>
    </Router>  
  </>
)

render(Main, document.getElementById('app'))
