// @flow
import React, { useEffect } from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
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

interface MainProps extends RouteComponentProps {}

function Main(props: MainProps) {
  const classes = useStyles();

  useEffect(() => {
    if (props.location.pathname === '/') props.history.replace('/home');
  }, [props.history, props.location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Drawer {...props} currentPage={props.location.pathname} />
        <main className={classes.main}>
          <Route path="/home" component={Home} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Main;
