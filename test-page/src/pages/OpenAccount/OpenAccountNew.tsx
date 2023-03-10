import React, { FC } from 'react';
import Information from 'components/Information/Information';
import Menu from 'components/Menu/Menu';
import NewAccount from 'components/NewAccount/NewAccount';
import Alert from 'components/Alert/Alert';
import './style.scss';

const OpenAccount: FC = () => {
  return (
    <>
      <div className="page-wrapper">
        <Menu />
        <div className="new-account-wrapper">
          <Alert />
          <div className="new-account-wrapper-content">
            <NewAccount />
            <Information />
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenAccount;
