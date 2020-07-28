import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fontawesome.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import './styles/styles.scss';

const App = () => {
  return (
    <div className="App h-100" id="appMainWrapper">
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
