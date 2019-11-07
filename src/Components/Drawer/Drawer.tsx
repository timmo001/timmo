// @flow
import React from 'react';
import classnames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import Items, { ItemsProps } from './Items';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: 240,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 48
    }
  },
  heading: {
    flex: 1
  },
  icon: {
    fontSize: 22
  },
  link: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.primary
    }
  },
  menuButton: {
    marginRight: theme.spacing(1)
  }
}));

interface ResponsiveDrawerProps {
  currentPage: string;
}

function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDrawerClose() {
    setMobileOpen(false);
  }

  const drawer = (
    <div className={classes.drawer}>
      <List>
        {Items.map((item: ItemsProps, key: number) => (
          <a
            key={key}
            className={classes.link}
            href={item.link}
            onClick={handleDrawerClose}>
            <ListItem
              selected={props.currentPage === item.link ? true : false}
              button>
              <ListItemIcon>
                <span className={classnames('mdi', item.icon, classes.icon)} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense">
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap>
            Timmo
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}>
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <SwipeableDrawer variant="permanent" open>
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
