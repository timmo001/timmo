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
import pink from '@material-ui/core/colors/pink';

import Drawer from './Drawer/Drawer';
import Home from './Home';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: pink,
      secondary: pink,
      background: {
        default: '#303030',
        paper: '#383c45'
      },
      text: {
        primary: '#ffffff'
      }
    }
  })
);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100%',
    background: theme.palette.background.default
  },
  toolbar: {
    ...theme.mixins.toolbar,
    height: 48
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
      <div className={classes.root}>
        <Drawer {...props} currentPage={props.location.pathname} />
        <div className={classes.toolbar} />
        <main>
          <Route path="home" component={Home} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Main;
