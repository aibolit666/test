import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import OpenAccountNew from 'pages/OpenAccount/OpenAccountNew';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/open-account/new" element={<OpenAccountNew />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
