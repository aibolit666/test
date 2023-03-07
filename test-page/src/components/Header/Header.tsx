import React from 'react';
import './style.scss';
import logo from './../../assets/img/logo.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="logo-pic" src={logo} alt="logo" />
        </div>
        <div className="top"></div>
      </header>
    </>
  );
};

export default Header;
