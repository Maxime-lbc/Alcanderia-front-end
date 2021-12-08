import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './global/redux/store';
import { Provider } from 'react-redux';
import './global/i18n/i18n';
import App from './global/App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
