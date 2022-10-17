import React from 'react';
import {
  Descriptions, Table,
} from 'antd';
import dayjs from 'dayjs';
import { dateFormat } from '../../../../../constants';

import css from './CalcPenaltyBy395Table.scss';
import { calculatePenalty } from '../../../../../utils/calculation/395';

const { Column, ColumnGroup } = Table;

export interface ICalcPenaltyByContract {
  debtList: {id: number; sum: number; date: number}[] | undefined;
  paymentsList: {id: number; sum: number; date: number}[] | undefined;
  endDate: number | undefined;
  interestRate: Record<number, number>;
}

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const useCalcPenaltyBy395Table = (props: ICalcPenaltyByContract) => {
  const {
    debtList, percent, endDate,
  } = props;
  const tableDataSource = props.debtList?.length > 0 ? calculatePenalty(props) : [];
  const startDebt = debtList ? debtList[0].sum.toLocaleString() : null;
  const startDate = debtList ? debtList[0].date : null;
  const data: DataType[] = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return {
    values: {
      startDebt, startDate, data: tableDataSource, percent, endDate,
    },
  };
};

const CalcPenaltyBy395TableView = (props: ReturnType<typeof useCalcPenaltyByContractTable>) => {
  const {
    values: {
      startDebt, startDate, data, endDate,
    },
  } = props;

  return (
    <div className={css.wrapper}>
      <Descriptions title="Результат" bordered column={2} size="small">
        <Descriptions.Item label="Задолженность">
          {startDebt}
          {' '}
          руб.
        </Descriptions.Item>
        <Descriptions.Item label="Начало периода">
          {startDate > 0 && dayjs.unix(startDate).format(dateFormat)}
        </Descriptions.Item>
        <Descriptions.Item label="Конец периода">
          {endDate > 0 && dayjs.unix(endDate).format(dateFormat)}
        </Descriptions.Item>
      </Descriptions>
      <Table dataSource={data}>
        <Column title="Задолженность" dataIndex="debt" key="age" />
        <ColumnGroup title="Период просрочки">
          <Column title="с" dataIndex="startDate" key="firstName" />
          <Column title="по" dataIndex="endDate" key="lastName" />
          <Column title="дней" dataIndex="duration" key="lastName" />
        </ColumnGroup>
        <Column title="Формула" dataIndex="address" key="address" />
        <Column title="Неустойка" dataIndex="address" key="address" />
      </Table>
    </div>
  );
};

export const CalcPenaltyBy395Table = (props: ICalcPenaltyByContract) => {
  const behaviour = useCalcPenaltyBy395Table(props);
  return <CalcPenaltyBy395TableView {...behaviour} />;
};
