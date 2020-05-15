import React, { useEffect } from 'react';

import Routes from './routes/routes';

import './App.css';

function App() {
  useEffect(()=>{
    const script = document.createElement('script');

    script.src = "./js/jquery-3.4.1.slim.min.js";
    script.async = true;

    document.body.appendChild(script);
  },[]);
  return (
    <Routes />
  );
}

export default App;
