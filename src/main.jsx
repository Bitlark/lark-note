import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routesConfig';
import './styles/common.scss';
import './styles/theme.scss';
import 'waffle-grid-layout'

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
