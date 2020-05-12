import React from 'react';
import {Container, createStyles, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    containerWrapper: {
      marginTop: '50px',

    },
    title: {
      margin: '0 auto 20px',
      textAlign: 'center',
    },
    item: {
      fontSize: '18px'
    }
  }),
);

export const LinkCard = ({link}) => {
  const classes = useStyles();
  const {from, to, clicks, date} = link || {};

  return (
    <Container className={classes.containerWrapper} maxWidth="sm">
      <Typography className={classes.title} variant="h5" component="h2">
        Link
      </Typography>
      <Typography className={classes.item}>
        <b>Short link:</b> <a target='_blank' rel="noopener noreferrer" href={to}>{to}</a>
      </Typography>
      <Typography className={classes.item}>
        <b>Initial link:</b> <a target='_blank' rel="noopener noreferrer" href={from}>{from}</a>
      </Typography>
      <Typography className={classes.item}>
        <b>Clicks quantity:</b> {clicks}
      </Typography>
      <Typography className={classes.item}>
        <b>Date created:</b> {new Date(date).toLocaleString()}
      </Typography>
    </Container>
  )
}