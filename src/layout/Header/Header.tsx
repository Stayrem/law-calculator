import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import pathDict from '../../app/pathDict';
import logo from '../../common/img/logo-white.svg';
import css from './Header.scss';

const { Header } = Layout;

const menuItems = [
  {
    name: 'Главная',
    route: pathDict.root,
  },
  {
    name: 'О Нас',
    route: pathDict.about,
  },
  {
    name: 'Калькуляторы',
    route: pathDict.calculators,
  },
];

const AppHeader = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <Header className={css.header}>
      <img className={css.logo} src={logo} alt="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentPathname]}>
        {menuItems.map((menuItem) => (
          <Menu.Item key={menuItem.route}>
            <Link to={menuItem.route}>{menuItem.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default AppHeader;
