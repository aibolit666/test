import React, { FC } from 'react';
import alertLogo from './../../assets/icons/attention.png';
import './style.scss';

const Alert: FC = () => {
  return (
    <>
      <div className="alert">
        <div className="alert-logo">
          <img src={alertLogo} alt="alert-logo" />
          <div className="alert-content-wrapper">
            <div className="alert-content-top">Истекает срок электронной подписи</div>
            <span className="alert-content-bottom">
              12.10.2022 истекает срок действия неквалифицированной электронной подписи.
            </span>
            <a href="" className="alert-link">
              Посмотреть
            </a>
          </div>
        </div>
        <div className="alert-btns">
          <button className="btn-alert-confirm">Исполнять</button>
          <button className="btn-alert-more">...</button>
          <button className="btn-alert-close">+</button>
        </div>
      </div>
    </>
  );
};

export default Alert;
