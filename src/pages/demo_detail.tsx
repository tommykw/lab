import * as React from "react"
import * as MarkDown1 from 'react-markdown'
import { ThemeProvider } from 'styled-components'
import Theme from '../components/Theme'
import { CssBaseline, Link, Container, Typography, Box, AppBar, Toolbar, Grid, makeStyles, Paper, Divider } from '@material-ui/core'
import { useParams } from "react-router-dom"
import { Copyright } from "../components/Copyright"

const useStyles2 = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3)
    }
}))

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));
  
export const DemoDetail: React.FC = () => { 
    const { demoType } = useParams()
    const classes = useStyles()
    const classes2 = useStyles2()

    console.log(demoType)

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
          <main>
      <Grid container spacing={6} className={classes2.mainGrid}>
      <Grid item xs={6} md={8}>
      <Typography variant="h2" gutterBottom>
        {'From the firehose'}
      </Typography>
      <Divider />
      <MarkDown1 source="# Your markdown here" />,
    </Grid>
      </Grid>
          </main>
      </Container>
    </ThemeProvider>
      </>
    )
  }
