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
            <input className="radio-input" type="radio" name="radio1" id="rubles" value="rubles" />
            <label className="rubles label" htmlFor="rubles">
              <div className="label-logo">
                <img className="logo-rubles" src={rubles} alt="logo rubles" />
              </div>
              В рублях
            </label>
            <input
              className="radio-input"
              type="radio"
              name="radio1"
              id="currency"
              value="currency"
            />
            <label className="currency label" htmlFor="currency">
              <div className="label-logo">
                <img className="logo-currency" src={currency} alt="logo currency" />
              </div>
              В валюте
            </label>
            <input className="radio-input" type="radio" name="radio1" id="gk" value="gk" />
            <label className="gk label" htmlFor="gk">
              <div className="label-logo">
                <img className="logo-gk" src={gk} alt="logo gk" />
              </div>
              Исполнитель ГК
            </label>
            <input
              className="radio-input"
              type="radio"
              name="radio1"
              id="zakupki"
              value="zakupki"
            />
            <label className="zakupki label" htmlFor="zakupki">
              <div className="label-logo">
                <img className="logo-zakupki" src={zakupki} alt="logo zakupki" />
              </div>
              Участник закупок
            </label>
          </div>
          <span className="bil-info">Информация о счете</span>
          <div className="bil-info-wrapper">
            <label htmlFor="ofis" className="bil-input-label">
              Офис обслуживания
            </label>
            <select className="new-account-select bil-input" id="ofis">
              <option value=""></option>
            </select>
          </div>
          <div className="bil-info-wrapper">
            <label htmlFor="dogovor" className="bil-input-label">
              Договор банковского счёта
            </label>
            <select className="new-account-select bil-input" id="dogovor">
              <option value="2354-023 от 10.02.2020">2354-023 от 10.02.2020</option>
            </select>
          </div>
          <div className="bil-info-wrapper">
            <label htmlFor="reserv" className="bil-input-label">
              Зарезервированный счёт
            </label>
            <select className="new-account-select bil-input" id="reserv">
              <option value="40506.810.0.00000001146 RUB, БИК: 046577422">
                40506.810.0.00000001146 RUB, БИК: 046577422
              </option>
            </select>
          </div>
          <div className="not-reserv-check-wrapper">
            <input
              type="checkbox"
              id="not-reserv-check"
              className="not-reserv-check-input"
              value="yes"
            />
            <label htmlFor="not-reserv-check" className="not-reserv-check-input-label">
              Открыть новый счёт, не из списка зарезервированных
            </label>
          </div>
          <span className="bil-info mc">Подписанты по счёту</span>
          <div className="bil-info-wrapper mc">
            <label htmlFor="opop" className="podpisant-input-label">
              Использовать карточку ОПОП, ранее предоставленную к счёту
            </label>
            <select className="new-account-select bil-input" id="opop">
              <option value="40506.810.0.00000017552 RUB, БИК: 040702754">
                40506.810.0.00000017552 RUB, БИК: 040702754
              </option>
            </select>
          </div>
          <div className="hero-name-render-wrapper">
            <span className="not-reserv-check-input-label">
              Виноградов-Лозовой Платон Михайлович
            </span>
          </div>
          <span className="bil-info">Комиссия за открытие</span>
          <div className="bil-info-wrapper">
            <label htmlFor="spisat" className="bil-input-label">
              Списать со счета
            </label>
            <select className="new-account-select bil-input" id="spisat">
              <option value="40506.810.0.00000017554 RUB, БИК: 044525823">
                40506.810.0.00000017554 RUB, БИК: 044525823
              </option>
            </select>
          </div>
          <div className="btn-submit-wrapper">
            <input type="submit" value="Отправить" className="btn-submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAccount;
