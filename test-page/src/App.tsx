import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import OpenAccount from 'pages/OpenAccount/OpenAccount';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/open-account/new" element={<OpenAccount />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
