import * as React from "react"
import { useState } from 'react'
import * as MarkDown from 'react-markdown'
import { ThemeProvider } from 'styled-components'
import Theme from '../components/theme'
import { CssBaseline, Container, Typography, AppBar, Toolbar, Grid, makeStyles, Divider, Box } from '@material-ui/core'
import { useParams } from "react-router-dom"
import { DemoCards } from "../models/demo_card"
import { Copyright } from "../components/copyright"

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(2)
    }
}))

export const DemoDetail: React.FC = () => { 
    const [markdownSource, setMarkdownSource] = useState('')
    const { demoType } = useParams()
    const classes = useStyles()

    const targetCard = DemoCards.find(card => (
        card.type == demoType
    ))

    if (targetCard == null) {
        return
    }

    fetch(`https://raw.githubusercontent.com/tommykw/lab/master/src/post/post_${targetCard.type}.md`)
        .then(res => res.text())
        .then(result => setMarkdownSource(result))

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
        <Container maxWidth="lg">
          <Grid container spacing={6} className={classes.mainGrid}>
            <Grid item xs={6} md={12}>
              <Typography variant="h2" gutterBottom>
                {targetCard.heading}
              </Typography>
              <Divider />
              <MarkDown source={markdownSource}/>
            </Grid>
          </Grid>
        </Container>
        <Box my={12}>
          <Copyright />
        </Box>
      </ThemeProvider>
      </>
    )
}
