import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff'
        },
    },
})

export default Theme