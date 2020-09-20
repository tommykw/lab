import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import { DemoSample } from './pages/demo_sample'
import { Demos } from './pages/demos'
import { DemoKmm } from './pages/demo_kmm'

const Main = (
  <>
    <Router>
      <Switch>
        <Route exact path="/demos">
          <Demos /> 
        </Route>
        <Route exact path="/demos/sample">
          <DemoSample />
        </Route>      
        <Route exact path="/demos/kmm">
          <DemoKmm />
        </Route>
        <Redirect to="/demos" path="*" />
      </Switch>
    </Router>  
  </>
)

render(Main, document.getElementById('app'))
