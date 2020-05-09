import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {CircularProgress, createStyles, makeStyles} from '@material-ui/core';

import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {LinkCard} from '../components/LinkCard';

const useStyles = makeStyles(() =>
  createStyles({
    spinner: {
      position: 'absolute',
      left: '50%',
      top: '50%'
    }
  }),
);

const DetailPage = () => {
  const classes = useStyles();
  const id = useParams().id;
  const history = useHistory();
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp();
  const [link, setLink] = useState(null);

  const fetchLink = useCallback(async () => {
    try {
      const {link} = await request(`/api/link/${id}`, 'GET', null, {
        'Authorization': `Bearer ${token}`
      });
      setLink(link);
    } catch (e) {
      console.log(e.message);
      history.push('/create');
    }
  }, [request, id, token, history])

  useEffect( () => {
    fetchLink();
  }, [fetchLink]);

  if(loading){
    return <CircularProgress className={classes.spinner} />
  }

  return (
      !loading && link && <LinkCard link={link}/>
  )
}

export default DetailPage;
