import React from 'react';
import { Breadcrumb, Typography } from 'antd';

const {
  Title, Paragraph, Text,
} = Typography;

const Main = () => (
  <>
    <Breadcrumb style={{ padding: '16px 0' }}>
      <Breadcrumb.Item>Главная</Breadcrumb.Item>
    </Breadcrumb>
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to
        {' '}
        <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development
        </Text>
        .
      </Paragraph>
      <Title level={2}>Guidelines and Resources</Title>
      <Paragraph>
        We supply a series of design principles, practical patterns and high quality design resources
        (
        <Text code>Sketch</Text>
        {' '}
        and
        {' '}
        <Text code>Axure</Text>
        ), to help people create their product
        prototypes beautifully and efficiently.
      </Paragraph>
    </Typography>
  </>
);

export default Main;
