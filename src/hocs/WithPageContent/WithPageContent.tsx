import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import css from './WithPageContent.scss';

const { Content } = Layout;

interface IPageContent {
  children: React.ReactElement
}
const WithPageContent = (props: IPageContent) => {
  const { children } = props;
  return (
    <Content className={css.content}>
      <Breadcrumb className={css.breadcrumbs}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      {children}
    </Content>
  );
};

export default WithPageContent;
