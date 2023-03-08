import React from 'react';
import './style.scss';
import plus from '../../assets/icons/plus.png';
import download from '../../assets/icons/download.png';
import homepage from '../../assets/icons/1.png';
import rubles from '../../assets/icons/2.png';
import currency from '../../assets/icons/3.png';
import extracts from '../../assets/icons/4.png';
import applications from '../../assets/icons/5.png';
import agreements from '../../assets/icons/6.png';
import products from '../../assets/icons/7.png';
import tmg from '../../assets/icons/8.png';
import clientBank from '../../assets/icons/9.png';
import docsEexchange from '../../assets/icons/10.png';
import taxes from '../../assets/icons/11.png';
import blockOEP from '../../assets/icons/12.png';
import services from '../../assets/icons/13.png';
import marketPlace from '../../assets/icons/14.png';
import callBank from '../../assets/icons/call-to-bank.png';

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
        <div className="menu-body">
          <ul>
            <li className="menu-item">
              <img className="menu-item-icon" src={homepage} alt="homepage" />
              Главная
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={rubles} alt="rubles" />
              Рублевые операции
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={currency} alt="currency" />
              Валютные операции
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={extracts} alt="extracts" />
              Выписки
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={applications} alt="applications" />
              Заявки
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={agreements} alt="agreements" />
              Соглашения
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={products} alt="products" />
              Продукты
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={tmg} alt="tmg" />
              TMG
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={clientBank} alt="clientBank" />
              Клиент-банк
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={docsEexchange} alt="docsEexchange" />
              Обмен документами
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={taxes} alt="taxes" />
              Налоги
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={blockOEP} alt="blockOEP" />
              Блокировки ОЭП
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={services} alt="services" />
              Сервисы для бизнеса
            </li>
            <li className="menu-item">
              <img className="menu-item-icon" src={marketPlace} alt="marketPlace" />
              Торговая площадка ЭТП ГПБ
            </li>
          </ul>
          <button className="btn-call-to-bank">
            <img className="menu-item-icon" src={callBank} alt="callBank" />
            Связаться c банком
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
