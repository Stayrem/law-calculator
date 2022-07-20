import React from 'react';
import { Layout, Typography } from 'antd';
import pathDict from '../../app/pathDict';
import logo from '../../common/img/logo-white.svg';
import css from './Header.scss';

const { Header } = Layout;

const AppHeader = () => (
  <Header className={css.header}>
    <img className={css.logo} src={logo} alt="logo" />
    <div className="logo" />
  </Header>
);

export default AppHeader;
