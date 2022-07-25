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
      {children}
    </Content>
  );
};

export default WithPageContent;
