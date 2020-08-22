import { Typography, Link } from "@material-ui/core"
import * as React from "react"

export const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="./">
                {"Tommykw's Lab"}
            </Link>{ ' ' }
            {new Date().getFullYear()}
        </Typography>
    )
}