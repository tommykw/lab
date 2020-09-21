import * as React from "react"
import { useState } from 'react'
import * as MarkDown from 'react-markdown'
import { ThemeProvider } from 'styled-components'
import Theme from '../components/theme'
import { CssBaseline, Container, Typography, AppBar, Toolbar, Grid, makeStyles, Divider } from '@material-ui/core'
import { useParams } from "react-router-dom"
import { cards } from "../components/card_layout"

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(2)
    }
}))

export const DemoDetail: React.FC = () => { 
    const [markdownSource, setMarkdownSource] = useState('')
    const { demoType } = useParams()
    const classes = useStyles()

    const targetCard = cards.find(card => (
        card.type == demoType
    ))

    if (targetCard == null) {
        return
    }

    fetch("https://raw.githubusercontent.com/tommykw/lab/c5266724afd18e3219aeb7cdc4e120a6adfd8245/src/post/post_sample.md")
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
      </ThemeProvider>
      </>
    )
}
