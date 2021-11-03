import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routesConfig';
import './styles/common.scss';


ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
