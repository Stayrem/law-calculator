import React from 'react';
import { Layout } from 'antd';
import logo from '../../common/img/corgi.svg';
import css from './Header.scss';
import LoginModal from '../../features/login/components/LoginModal/LoginModal';

const { Header } = Layout;

const AppHeader = () => (
  <Header className={css.header}>
    <div className={css.logoWrapper}>
      <img width="45" className={css.logo} src={logo} alt="logo" />
      <span className={css.logoText}>Коргилятор</span>
    </div>
    <div className="logo" />
    <LoginModal />
  </Header>
);

export default AppHeader;
