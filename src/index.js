import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import "./admin.css"
import SideBar from './side-bar';

ReactDOM.render(
  <React.StrictMode>
    <SideBar />
  </React.StrictMode>,
  document.getElementById('wrapper')
);

