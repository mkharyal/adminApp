import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import "./style/css/admin.css";
import "./style/css/all.css";
import SideBar from './sideBar/side-bar';
import NavBar from './navBar/nav-bar';
import Dashboard from './dashboard/dashboard';

ReactDOM.render(
  <React.StrictMode>
    <SideBar />
  </React.StrictMode>,
  document.getElementById('accordionSidebar')
);

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('content')
);


