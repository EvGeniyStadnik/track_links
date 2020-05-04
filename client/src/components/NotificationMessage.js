import React, {memo} from 'react';
import {Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const NotificationMessage = ({message, open, handleClose}) => {
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