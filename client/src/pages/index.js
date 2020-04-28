import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import CreatePage from './CreatePage';
import DetailPage from './DetailPage';
import LinksPage from './LinksPage';

const Pages = () => {
  return (
    <Switch>
      <Route path='/links' exact>
        <LinksPage/>
      </Route>
      <Route path='/detail/:id'>
        <DetailPage/>
      </Route>
      <Route path='/create'>
        <CreatePage/>
      </Route>
      <Redirect to='/create'/>
    </Switch>
  )
}

export default Pages;