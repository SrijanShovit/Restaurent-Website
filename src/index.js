import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//here App.js is imported 
//ReactDOM.render() controls the contents of the container node you pass in
//Currently returns a reference to the root ReactComponent instance
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
