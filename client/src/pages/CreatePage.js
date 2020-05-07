import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Container, makeStyles, createStyles, TextField} from "@material-ui/core";
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from "../context/AuthContext";

const useStyles = makeStyles(() =>
  createStyles({
    containerWrapper: {
      textAlign: 'center',
      marginTop: '100px',
    },
    inputField: {
      width: '100%'
    }
  }),
);

const CreatePage = () => {
  const history = useHistory();
  const {token, logout} = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('');

  const handleChange = (e) => {
    setLink(e.target.value);
  }

  const handleKeyPress = async (e) => {
    if(e.key === 'Enter'){
      const body = JSON.stringify({from: link});
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      try {
        const data = await request('/api/link/generate', 'POST', body, headers);
        history.push(`/detail/${data.link._id}`)
      } catch (e) {
        if(e.message && e.message === 'jwt expired'){
          logout();
        }
      }
    }
  }

  const classes = useStyles();

  return (
    <Container className={classes.containerWrapper} maxWidth="sm">
      <TextField
        className={classes.inputField}
        label="Input a link"
        type='text'
        value={link}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </Container>
  )
}

export default CreatePage;
