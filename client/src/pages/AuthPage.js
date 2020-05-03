import React, {useCallback, useEffect, useState} from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  CardActions,
  Button,
  TextField
} from "@material-ui/core";

import NotificationMessage from '../modules/NotificationMessage';
import {useHttp} from '../hooks/http.hook';

import useStyles from './AuthPageStyles';

const AuthPage = () => {
  const classes = useStyles();

  const {loading, request, error, clearError} = useHttp();

  const [message, setMessage] = useState('');
  const [open, setOpenNotification] = useState(false);

  useEffect(() => {
    if(error){
      setOpenNotification(true)
      setMessage(error)
      clearError()
    }
  }, [clearError, error])

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleCloseNotification = useCallback(() => {
    setOpenNotification(false);
  }, [])

  const handleRegister = async () => {
    try {
      const body = JSON.stringify({...userData});
      const headers = {'Content-Type': 'application/json'};
      const data = await request('/api/auth/register', 'POST', body, headers);
      console.log('Data', data)
    } catch (e) {
    }
  };

  return (
    <>
      <Container className={classes.containerWrapper} maxWidth="sm">
        <h1>Сut link</h1>
        <Card className={classes.cardWrapper} variant="outlined">
          <CardContent className={classes.wrapper}>
            <Typography className={classes.title} variant="h5" component="h2">
              Authorization
            </Typography>
            <Typography component="div">
              <TextField
                className={classes.inputField}
                id="standard-basic"
                label="email"
                name='email'
                type='email'
                onChange={handleChange}
              />
            </Typography>
            <Typography component="div">
              <TextField
                className={classes.inputField}
                label="password"
                name='password'
                type='password'
                onChange={handleChange}
              />
            </Typography>
          </CardContent>
          <CardActions className={classes.buttonsWrapper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonRegister}
              size="medium"
              disabled={loading}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleRegister}
              disabled={loading}
            >
              Register
            </Button>
          </CardActions>
        </Card>
      </Container>
      <NotificationMessage message={message} open={open} handleClose={handleCloseNotification}/>
    </>
  )
}

export default AuthPage;
