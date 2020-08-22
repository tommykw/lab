import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import Theme from './components/Theme'
import CardLayout from './components/CardLayout'
import { CssBaseline, Container, Typography, Box, AppBar, Toolbar } from '@material-ui/core'
import { Copyright } from './components/Copyright'

const Main = (
  <>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {"Tommykw's Lab"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {"Welcome to Tommykw's Lab. This lab provides a hands-on coding experience."}
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box my={4}>
          <CardLayout/>        
        </Box>
        <Box my={4}>
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>

    {/* <Router>
       <Route exact path="/demos">
         <Demos />
       </Route>
       <Route exact path="/demo/1">
         <h1>Demo</h1>
       </Route>
       <Redirect to="/demos" path="*" />
     </Router> */}
  </>
)

render(Main, document.getElementById('app'))
