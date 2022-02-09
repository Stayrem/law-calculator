import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import pathDict from '../../app/pathDict';

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
];

const AppHeader = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <Header>
      <div className="logo" />
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
