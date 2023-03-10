import React, { FC } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import OpenAccountNew from 'pages/OpenAccount/OpenAccountNew';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const App: FC = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<OpenAccountNew />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
};

export default App;
