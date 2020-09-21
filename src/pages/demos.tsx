import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from '../components/theme'
import CardLayout from '../components/card_layout'
import { CssBaseline, Container, Typography, Box, AppBar, Toolbar } from '@material-ui/core'
import { Copyright } from '../components/copyright'

export const Demos: React.FC = () => {
  return (
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
    </>
  )
}
