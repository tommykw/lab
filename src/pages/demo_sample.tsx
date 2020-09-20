import * as React from "react"
import { ThemeProvider } from 'styled-components'
import Theme from '../components/Theme'
import { CssBaseline, Container, Typography, Box, AppBar, Toolbar } from '@material-ui/core'

export const DemoSample: React.FC = () => { 
    return (
      <>
      <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {"Demo sample"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {"This is a demo. This is a demo. This is a demo. This is a demo. This is a demo."}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
      </>
    )
  }
  