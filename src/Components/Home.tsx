// @flow
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import banner from '../resources/banner.svg';
import Sections, { Section, Link } from './Links';
import MarkdownText from './Utils/MarkdownText';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // padding: theme.spacing(0.25, 2, 2)
    padding: theme.spacing(2)
  },
  banner: {
    height: 380,
    width: `calc(100% + ${theme.spacing(4)}px)`,
    margin: theme.spacing(0, -2, 2)
  },
  card: {
    width: 360,
    margin: theme.spacing(1)
  },
  cardBanner: {
    height: 180
  }
}));

interface HomeProps extends RouteComponentProps {}

function Home(props: HomeProps) {
  const classes = useStyles();

  const handleClick = (link: string) => () => {
    if (link.startsWith('http')) window.location.href = link;
    else props.history.push(link);
  };

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignContent="space-around"
      spacing={2}>
      {/* <Grid item xs={12}>
        <CardMedia className={classes.banner} image={banner} />
      </Grid> */}
      {Sections.map((section: Section, key: number) => (
        <Grid key={key} item xs={12}>
          <Typography gutterBottom variant="h4" component="h2">
            <MarkdownText text={section.name} />
          </Typography>
          <Divider />
          {section.links.map((link: Link, key: number) => (
            <Grid key={key} item>
              <Card className={classes.card}>
                <CardActionArea onClick={handleClick(link.link)}>
                  <CardMedia
                    className={classes.cardBanner}
                    image={link.banner}
                    title={link.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      <MarkdownText text={link.name} />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span">
                      <MarkdownText text={link.description} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
