import React, { useState } from 'react';
import {
  HomeOutlined,
  InfoCircleOutlined,
  CalculatorOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import pathDict from '../../app/pathDict';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Главная', pathDict.root.pathname, <HomeOutlined />, undefined, undefined),
  getItem('Калькуляторы', pathDict.calculators.pathname, <CalculatorOutlined />, undefined, undefined),
  getItem('О Нас', pathDict.about.pathname, <InfoCircleOutlined />, undefined, undefined),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.keyPath[0]);
  };

  const defaultSelected = items
    .find((it) => location.pathname.includes(it.key))?.key || pathDict.root.pathname;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#001529',
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[defaultSelected]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;
