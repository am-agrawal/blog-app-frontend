import React from 'react';
import config from './configs/config';
import './App.css';

function App() {
  return (
    <>
      <div>{config.API_URL}</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
