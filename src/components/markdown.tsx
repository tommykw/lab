import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ListItem } from '@material-ui/core';
import * as React from 'react';

const styles = (theme) => ({
    ListItem: {
        marginTop: theme.spacing(1),
    }
})

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h5',
            },
        },
        h2: { 
            component: Typography, 
            props: { gutterBottom: true, variant: 'h6' } },
        h3: { 
            component: Typography, 
            props: { gutterBottom: true, variant: 'subtitle1' } },
        h4: {
            component: Typography,
            props: { gutterBottom: true, variant: 'caption', paragraph: true } },
        },
        p: { 
            component: Typography,
            props: { paragraph: true }
        },
        a: { component: Link },
        li: {
            // component: withStyles(styles) (({ classes, ...props }) => (
            //     <li className={classes.listItem}>
            //       <Typography component="span" {...props} />
            //     </li>
            // )),
        }
    }

export default function Markdown(props) {
    return <ReactMarkdown option={options} {...props} />
}