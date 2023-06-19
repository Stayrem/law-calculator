import React from 'react';
import {
  Descriptions,
  Table,
} from 'antd';

import css from './CalcPenaltyTable.scss';
import { mergeAndSortDebtsAndPayments, MergedListItem } from '../../../../../utils/calculation/395';
import { RateItem } from '../../../types';
import { IForm } from '../../CalculatorsForms/CalcBy395/CalcBy395';
import { dateFormat } from '../../../../../constants';

const { Column, ColumnGroup } = Table;

export interface ICalcPenaltyByContract {
  tableData: IForm & { rates: RateItem[] };
}

const useCalcPenaltyTable = (props: ICalcPenaltyByContract) => {
  const { tableData } = props;
  const getIsPaymentInfoOrDebtInfo = (colSpan: number) => (el: MergedListItem) => ({ colSpan: el.type === 'paymentInfo' || el.type === 'debtInfo' ? colSpan : 1 });
  const renderEndDate = (el: MergedListItem) => {
    if (el.type === 'paymentInfo' || el.type === 'debtInfo') {
      return el.title;
    }
    return el.endDate.format(dateFormat);
  };
  const renderAmount = (el: MergedListItem) => {
    if (el.type === 'paymentInfo') {
      return `-${el.amount}`;
    }
    if (el.type === 'debtInfo') {
      return `+${el.amount}`;
    }
    return el.amount;
  };
  const dataSource = mergeAndSortDebtsAndPayments(tableData);
  return {
    values: {
      dataSource,
      endDate: tableData.endDate,
    },
    operations: {
      getIsPaymentInfoOrDebtInfo,
      renderEndDate,
      renderAmount,
    },
  };
};

const CalcPenaltyTableView = (props: ReturnType<typeof useCalcPenaltyTable>) => {
  const {
    values: {
      dataSource,
      endDate,
    },
    operations: {
      getIsPaymentInfoOrDebtInfo,
      renderEndDate,
      renderAmount,
    },
  } = props;
  return (
    <div className={css.wrapper}>
      <Descriptions
        bordered
        size="small"
      >
        <Descriptions.Item label="Задолженность">{dataSource[0].amount}</Descriptions.Item>
        <Descriptions.Item label="Период Просрочки">{`с ${dataSource[0].date.format(dateFormat)} по ${endDate.format(dateFormat)}`}</Descriptions.Item>
      </Descriptions>
      <Table dataSource={dataSource} pagination={{ pageSize: Infinity, hideOnSinglePage: true }}>
        <Column render={renderAmount} title="Задолженность" key="amount" />
        <ColumnGroup title="Период просрочки">
          <Column render={(it: MergedListItem) => it.startDate.format(dateFormat)} title="с" key="startDate" />
          <Column render={renderEndDate} onCell={getIsPaymentInfoOrDebtInfo(5)} title="по" key="endDate" />
          <Column onCell={getIsPaymentInfoOrDebtInfo(0)} title="дней" dataIndex="duration" key="duration" />
        </ColumnGroup>
        <Column render={(it: MergedListItem) => it.rate.toFixed(2)} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Ставка" key="rate" />
        <Column onCell={getIsPaymentInfoOrDebtInfo(0)} title="Формула" dataIndex="formula" key="formula" />
        <Column render={(it: MergedListItem) => it.penny.toFixed(2)} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Неустойка" key="penny" />
      </Table>
      <Descriptions
        bordered
        size="small"
        layout="vertical"
      >
        <Descriptions.Item label="Сумма основного долга">{dataSource[dataSource.length - 1].amount}</Descriptions.Item>
        <Descriptions.Item label="Сумма процентов">{dataSource.reduce((acc, curr) => acc + curr.penny, 0).toFixed(2)}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export const CalcPenaltyTable = (props: ICalcPenaltyByContract) => {
  const behaviour = useCalcPenaltyTable(props);
  return <CalcPenaltyTableView {...behaviour} />;
};
