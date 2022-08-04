import { Breadcrumb, Button, Table } from 'antd';
import { FileWordOutlined, FilePdfOutlined } from '@ant-design/icons';
import React from 'react';
import moment from 'moment';
import css from './Account.scss';

const dataSource = [
  {
    key: '1',
    calculator: 'Расчёт неустойки по 1/300, 1/150 или 1/130 от ключевой ставки ЦБ РФ',
    date: 1659537717,
  },
  {
    key: '2',
    calculator: 'Расчёт процентов задолженности по ст. 317.1 ГК РФ',
    date: 1659534717,
  },
];

const columns = [
  {
    title: 'Калькулятор',
    dataIndex: 'calculator',
    key: 'calculator',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    render: (date) => moment.unix(date).format('DD.MM.YYYY'),
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <div className={css.actions}>
        <Button type="text" icon={<FilePdfOutlined style={{ fontSize: '20px' }} />} />
        <Button type="text" icon={<FileWordOutlined style={{ fontSize: '20px' }} />} />
      </div>
    ),
  },
];
const Account = () => {
  const a = 1;
  return (
    <>
      <Breadcrumb style={{ padding: '16px 0' }}>
        <Breadcrumb.Item>Личный Кабинет</Breadcrumb.Item>
      </Breadcrumb>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Account;
