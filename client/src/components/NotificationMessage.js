import React, {memo, useContext, useEffect, useState} from 'react';
import {Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import {AuthContext} from "../context/AuthContext";

const NotificationMessage = () => {
  const {notification} = useContext(AuthContext);

  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(notification.value.message){
      setMessage(notification.value.message);
      setOpen(true);
    }
  }, [notification.value])

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message || ''}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small"/>
        </IconButton>
      }
    />
  );
}

export default memo(NotificationMessage);