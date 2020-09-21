import { makeStyles, Typography, Grid, CardMedia, CardContent, Card } from "@material-ui/core"
import * as React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { DemoCards } from "../models/demo_card"

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%',
    },
    cardContent: {
      height: '10rem',
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}))

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const CardLayout: React.FC = () => {
    const classes = useStyles()

    return (
        <>
        <Grid container spacing={4}>
            {DemoCards.map(card => (
              <Grid item key={card.heading} xs={12} sm={6} md={4}>
                <Card>
                  <StyledLink to={`/demos/${card.type}`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image_url}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                    {card.description}
                    </Typography>
                  </CardContent>

                  </StyledLink>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
    )
}

export default CardLayout