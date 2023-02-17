import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
 //get that element from html where comp reneder karana hai
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
//web pack ke help se all module js combine single module,and all css single css
//web pack,bundler react js provide to us and use it own it own(automatically)