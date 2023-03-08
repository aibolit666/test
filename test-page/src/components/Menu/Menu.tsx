import React from 'react';
import './style.scss';
import plus from '../../assets/icons/plus.png';
import download from '../../assets/icons/download.png';

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-header">
          <button className="btn-menu-header">
            <img className="plus" src={plus} alt="logo-plus" />
            Создать
          </button>
          <button className="btn-menu-header">
            <img className="download" src={download} alt="logo-download" />
            Импорт
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
