import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './components/app/app';
import './components/app/adaptation.scss';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
