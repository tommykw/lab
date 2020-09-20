import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import { DemoDetail } from './pages/demo_detail'
import { Demos } from './pages/demos'

const Main = (
  <>
    <Router>
      <Switch>
        <Route exact path="/demos">
          <Demos>
            aaaaaaaaaa
          </Demos>
        </Route>
        <Route exact path="/detail">
          <DemoDetail>
            jkfdajfkladsfjkdasl
            </DemoDetail>
        </Route>      
        <Redirect to="/demos" path="*" />
      </Switch>
    </Router>  
  </>
)

render(Main, document.getElementById('app'))
