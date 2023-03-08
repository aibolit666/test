import React from 'react';
import './style.scss';

const Information = () => {
  return (
    <>
      <aside className="info-aside">
        <div className="info-aside-information">
          <div className="info-aside-title">Информация</div>
          <ul className="info-aside-ul">
            <li className="info-aside-content">Открытие счета без посещения офиса банка</li>
            <li className="info-aside-content">Счет открывается в течение 15 минут</li>
            <li className="info-aside-content">
              После открытия по счету можно принимать и отправлять платежи
            </li>
          </ul>
        </div>
        <div className="info-aside-information">
          <div className="info-aside-title">Преимущества</div>
          <ul className="info-aside-ul">
            <li className="info-aside-content">До 3-х месяцев бесплатного обслуживания</li>
            <li className="info-aside-content">До 500 000 ₽ на сервисы партнёров</li>
            <li className="info-aside-content">Бесплатная онлайн-бухгалтерия</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Information;
