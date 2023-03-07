import React from 'react';
import './style.scss';
import logo from './../../assets/img/logo.png';
import topLogo from './../../assets/icons/logo-tree-banks.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left-side">
          <div className="logo-wrapper">
            <img className="logo-pic" src={logo} alt="logo" />
          </div>
          <div className="top">
            <img className="top-logo" src={topLogo} alt="top-logo" />
            <div className="top-content-wrapper">
              <div className="top-content-top">Топ-3 лучших банков для корпоративных клиентов</div>
              <div className="top-content-bottom">По версии Markswebb</div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="hero-block">
            <div className="hero-name">Виноградов-Лозовой П.М.</div>
            <div className="hero-company">2 организации</div>
          </div>
          <div className="btn-auth-block">
            <button className="btn-settings"></button>
            <button className="btn-notification"></button>
            <button className="btn-exit"></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
