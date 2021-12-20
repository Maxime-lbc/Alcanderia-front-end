import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Vote from '../../pages/Vote/Vote';

export const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/vote" exact component={Vote} /> */}
      <Route path="*" exact component={Home} />
    </Switch>
  );
};
