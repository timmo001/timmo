// @flow
import React, { useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({}));

interface HomeProps extends RouteComponentProps {}

function Home(props: HomeProps) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignContent="flex-start"></Grid>
  );
}

export default Home;
