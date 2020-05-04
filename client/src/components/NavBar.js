import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';

import {AuthContext} from '../context/AuthContext';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
      textDecoration: 'none'
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory()
  const {logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout();
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cut links
          </Typography>
          <Button color="inherit"><NavLink className={classes.link} to='/create'>Create</NavLink></Button>
          <Button color="inherit"><NavLink className={classes.link} to='/links'>Links</NavLink></Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
