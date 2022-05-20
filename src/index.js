import React from 'react';
import ReactDOM from 'react-dom/client';
import Chitchat from './components/Notification/Chitchat.js';
import Button from './components/Notification/Button.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const handleClick = () => {
  document.documentElement.classList.toogle('dark');
}

root.render(
  <React.StrictMode>
    <Chitchat />
    <Button onclick={handleClick}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

