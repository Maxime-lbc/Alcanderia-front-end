import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClientApp from '../../../client/ClientApp';
import AdminApp from '../../../admin/AdminApp';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ClientApp} />
        {/* TODO ADMIN PART IN NEXT VERSION */}
        {/* <Route path="/admin" exact component={AdminApp} /> */}
        {/* <Route path="/admin/*" component={AdminApp} /> */}
        <Route path="/*" component={ClientApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
