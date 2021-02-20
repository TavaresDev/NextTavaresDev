import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#556cd6',
      main: '#6495ed',
    },
    secondary: {
      main: '#19857b',
      main: green[800],
    },
    title: {
      main: '#fff'

    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      primary: '#6495ed',
      paper:'#6495ed',
      paper: green[200],
      
    },
  },
});

export default theme;
