import React, {useCallback, useContext, useEffect, useState} from 'react';
import {CircularProgress, createStyles, makeStyles} from "@material-ui/core";

import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Links} from "../components/Links";

const useStyles = makeStyles(() =>
  createStyles({
    spinner: {
      position: 'absolute',
      left: '50%',
      top: '50%'
    }
  }),
);

const LinksPage = () => {
  const classes = useStyles();
  const {request, loading} = useHttp();
  const {token, logout} = useContext(AuthContext);
  const [links, setLinks] = useState([])

  const fetchLinks = useCallback(async() => {
    try {
      const links = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setLinks(links);
    } catch (e) {
      if(e.message && e.message === 'jwt expired'){
        logout();
      }
    }
  }, []);

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks]);

  if(loading) {
    return <CircularProgress className={classes.spinner} />
  }

  return (
    !loading && links && <Links links={links}/>
  )
}

export default LinksPage;
