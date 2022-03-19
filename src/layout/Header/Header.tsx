import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import pathDict from '../../app/pathDict';
<<<<<<< HEAD
import logo from '../../common/img/logo-white.svg';
import css from './Header.scss';
=======
>>>>>>> origin/development

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
<<<<<<< HEAD
  {
    name: 'Калькуляторы',
    route: pathDict.calculators,
  },
=======
>>>>>>> origin/development
];

const AppHeader = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
<<<<<<< HEAD
    <Header className={css.header}>
      <img className={css.logo} src={logo} alt="logo" />
=======
    <Header>
      <div className="logo" />
>>>>>>> origin/development
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
