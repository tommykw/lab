import * as React from "react"
import { ThemeProvider } from 'styled-components'
import Theme from '../components/Theme'
import { CssBaseline, Container, Typography, Box, AppBar, Toolbar } from '@material-ui/core'

export const DemoKmm: React.FC = () => { 
    return (
      <>
      <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {"KMM"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {"KMM"}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
      </>
    )
  }
  