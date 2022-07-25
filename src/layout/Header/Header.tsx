import React from 'react';
import { Layout } from 'antd';
import logo from '../../common/img/logo-white.svg';
import css from './Header.scss';
import LoginModal from '../../features/login/components/LoginModal/LoginModal';

const { Header } = Layout;

const AppHeader = () => (
  <Header className={css.header}>
    <img className={css.logo} src={logo} alt="logo" />
    <div className="logo" />
    <LoginModal />
  </Header>
);

export default AppHeader;
