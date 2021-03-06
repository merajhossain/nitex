import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import 'animate.css/animate.css'
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
