import React from 'react';
import back from '../../assets/icons/arrow.png';
import './style.scss';
import rubles from '../../assets/icons/rubles.png';
import currency from '../../assets/icons/earth.png';
import gk from '../../assets/icons/gk.png';
import zakupki from '../../assets/icons/zakupki.png';

const NewAccount = () => {
  return (
    <>
      <div className="new-account">
        <a href="" className="back-link">
          <img className="back-arrow" src={back} alt="back" />
          <span className="back-link-content">Заявки на открытие счетов</span>
        </a>
        <h2 className="new-account-header">Открытие счёта</h2>
        <form className="form">
          <select className="new-account-select">
            <option value="ООО «Таймырские Атомные Ледоколы»">
              ООО «Таймырские Атомные Ледоколы»
            </option>
          </select>
          <div className="radio-wrapper">
            <input type="radio" name="radio1" id="rubles" value="rubles" />
            <label className="rubles label" htmlFor="rubles">
              <div className="label-logo">
                <img className="logo-rubles" src={rubles} alt="logo rubles" />
              </div>
              В рублях
            </label>
            <input type="radio" name="radio1" id="currency" value="currency" />
            <label className="currency label" htmlFor="currency">
              <div className="label-logo">
                <img className="logo-currency" src={currency} alt="logo currency" />
              </div>
              В валюте
            </label>
            <input type="radio" name="radio1" id="gk" value="gk" />
            <label className="gk label" htmlFor="gk">
              <div className="label-logo">
                <img className="logo-gk" src={gk} alt="logo gk" />
              </div>
              Исполнитель ГК
            </label>
            <input type="radio" name="radio1" id="zakupki" value="zakupki" />
            <label className="zakupki label" htmlFor="zakupki">
              <div className="label-logo">
                <img className="logo-zakupki" src={zakupki} alt="logo zakupki" />
              </div>
              Участник закупок
            </label>
          </div>
          <label>
            Name:
            <input type="text" value="" />
          </label>
          <input type="submit" value="Отправить" className="btn-submit" />
        </form>
      </div>
    </>
  );
};

export default NewAccount;
