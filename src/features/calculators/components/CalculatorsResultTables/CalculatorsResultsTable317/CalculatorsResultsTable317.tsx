import React, { useState } from 'react';
import {
  Descriptions,
  Table,
} from 'antd';

import { mergeAndSortDebtsAndPayments, MergedListItem } from '../../../../../utils/calculation/395';
import { RateItem } from '../../../types';
import { IForm } from '../../CalculatorsForms/CalcBy317/CalcBy317';
import { dateFormat } from '../../../../../constants';

const { Column, ColumnGroup } = Table;

export interface ICalcPenaltyByContract {
  tableData: IForm & { rates: RateItem[] };
}

const useCalcPenalty317Table = (props: ICalcPenaltyByContract) => {
  const [pennySum, changePennySum] = useState(0);
  const { tableData } = props;
  const getIsPaymentInfoOrDebtInfo = (colSpan: number) => (el: MergedListItem) => ({ colSpan: el.type === 'paymentInfo' || el.type === 'debtInfo' ? colSpan : 1 });
  const renderEndDate = (el: MergedListItem) => {
    if (el.type === 'paymentInfo' || el.type === 'debtInfo') {
      return null;
    }
    return el.endDate.format(dateFormat);
  };

  const renderStartDate = (el: MergedListItem) => {
    if (el.type === 'paymentInfo' || el.type === 'debtInfo') {
      return el.title;
    }
    return el.startDate.format(dateFormat);
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

  const renderDebtItemEl = (el: MergedListItem, key: 'duration' | 'penny' | 'rate' | 'formula') => (el.type === 'debt'
  || el.type === 'payment' ? el[key] : null);

  const renderPenny = (el: MergedListItem) => {
    if (el.type === 'debt' || el.type === 'payment') {
      return `+${el.penny}`;
    }
    if (el.type === 'paymentInfo') {

    }
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
      renderStartDate,
      renderDebtItemEl,
    },
  };
};

const CalcPenalty317TableView = (props: ReturnType<typeof useCalcPenalty317Table>) => {
  const {
    values: {
      dataSource,
      endDate,
    },
    operations: {
      getIsPaymentInfoOrDebtInfo,
      renderEndDate,
      renderAmount,
      renderStartDate,
      renderDebtItemEl,
    },
  } = props;
  return (
    <div>
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
          <Column render={renderStartDate} title="с" key="startDate" />
          <Column render={renderEndDate} onCell={getIsPaymentInfoOrDebtInfo(5)} title="по" key="endDate" />
          <Column render={(el: MergedListItem) => renderDebtItemEl(el, 'duration')} onCell={getIsPaymentInfoOrDebtInfo(0)} title="дней" key="duration" />
        </ColumnGroup>
        <Column render={(el: MergedListItem) => renderDebtItemEl(el, 'rate')} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Ставка" key="rate" />
        <Column render={(el: MergedListItem) => renderDebtItemEl(el, 'formula')} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Формула" key="formula" />
        <Column render={(el: MergedListItem) => renderDebtItemEl(el, 'penny')} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Проценты за период" key="penny" />
      </Table>
      <Descriptions
        bordered
        size="small"
        layout="vertical"
      >
        <Descriptions.Item label="Сумма основного долга">{dataSource[dataSource.length - 1].amount}</Descriptions.Item>
        <Descriptions.Item label="Сумма процентов">{dataSource.reduce((acc, curr) => acc + (curr.penny || 0), 0).toFixed(2)}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export const CalcPenalty317Table = (props: ICalcPenaltyByContract) => {
  const behaviour = useCalcPenalty317Table(props);
  return <CalcPenalty317TableView {...behaviour} />;
};
