import React from 'react';
import Header from './features/Header/Header';
import { Router } from './features/Router/Router';

const ClientApp = () => {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
};

export default ClientApp;
