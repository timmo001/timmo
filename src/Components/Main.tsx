// @flow
import React from 'react';
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  Theme,
  ThemeProvider
} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';

import Drawer from './Drawer/Drawer';
import Home from './Home';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: blueGrey,
      secondary: cyan,
      background: {
        default: '#303030',
        paper: '#383c45'
      }
    }
  })
);

const useStyles = makeStyles((_theme: Theme) => ({
  main: {
    minHeight: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 240
    }
  }
}));

interface MainProps {}

function Main(props: MainProps) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Drawer {...props} currentPage={window.location.pathname} />
        <main className={classes.main}>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Main;
