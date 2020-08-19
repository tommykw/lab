import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Demos } from './pages/demos'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

const Main = (
  <>
    <GlobalStyle />
     <Router>
       <Route exact path="/demos">
         <Demos />
       </Route>
       <Route exact path="/demo/1">
         <h1>Demo</h1>
       </Route>
       <Redirect to="/demos" path="*" />
     </Router>
  </>
)

render(Main, document.getElementById('app'))
