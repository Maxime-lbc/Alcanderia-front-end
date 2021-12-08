import React from 'react';
import { useAppSelector } from './redux/hooks';
import Footer from './features/Footer/Footer';
import Router from './features/Router/Router';

const App = () => {
  const theme = useAppSelector(state => state.themeReducer);

  return (
    <div
      id="App"
      className={`${theme.value} min-h-screen w-screen overflow-x-hidden flex flex-col justify-between bg-gray-50 dark:bg-gray-900 transition duration-700`}
    >
      <div className="AppContainer">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default App;
