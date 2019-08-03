/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const title = 'Barebones Flask/React App';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);