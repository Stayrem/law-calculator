import React from 'react';
import {
  Descriptions,
  Table,
} from 'antd';

import css from './CalcPenaltyTable.scss';
import { IForm } from '../../CalculatorsForms/CalcPenaltyByLoanContract/CalcPenaltyByLoanContract';
import { dateFormat } from '../../../../../constants';
import {
  mergeAndSortDebtsAndPaymentsLoan,
  MergedListItem,
} from '../../../../../utils/calculation/loanContract';

const { Column, ColumnGroup } = Table;

export interface ICalcPenaltyByContract {
  tableData: IForm;
}

const useCalcLoanPenaltyTable = (props: ICalcPenaltyByContract) => {
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
  const renderPeriodPercents = (el: MergedListItem) => {
    if (el.type === 'debt') {
      return `${el.penny}`;
    }
    if (el.type === 'payment') {
      return `-${el.sum}`;
    }
    return null;
  };
  const renderPercentsSum = (el: MergedListItem, prevEl: MergedListItem | undefined) => {
    if (el.type === 'debt') {
      return `= ${el.penny + (prevEl ? prevEl.penny : 0)}`;
    }
    if (el.type === 'payment') {
      return `= ${el.sum + (prevEl ? prevEl.penny : 0)}`;
    }
    return null;
  };
  console.log(tableData);
  const dataSource = /* mergeAndSortDebtsAndPaymentsLoan(tableData); */ [];
  return {
    values: {
      dataSource,
      endDate: tableData.endDate,
    },
    operations: {
      getIsPaymentInfoOrDebtInfo,
      renderEndDate,
      renderAmount,
      renderPeriodPercents,
      renderPercentsSum,
    },
  };
};

const CalcLoanPenaltyTableView = (props: ReturnType<typeof useCalcLoanPenaltyTable>) => {
  const {
    values: {
      dataSource,
      endDate,
    },
    operations: {
      getIsPaymentInfoOrDebtInfo,
      renderEndDate,
      renderAmount,
      renderPeriodPercents,
      renderPercentsSum,
    },
  } = props;
  return (
    <div className={css.wrapper}>
      {/* <Descriptions
        bordered
        size="small"
      >
      <Descriptions.Item label="Задолженность">{dataSource[0].amount}</Descriptions.Item>
        <Descriptions.Item label="Период Просрочки">{`с ${dataSource[0].date.format(dateFormat)} по ${endDate.format(dateFormat)}`}</Descriptions.Item>
     </Descriptions> */}
      <Table dataSource={dataSource} pagination={{ pageSize: Infinity, hideOnSinglePage: true }}>
        <Column render={renderAmount} title="Задолженность" key="amount" />
        <ColumnGroup title="Период просрочки">
          <Column render={(it: MergedListItem) => it.startDate.format(dateFormat)} title="с" key="startDate" />
          <Column render={renderEndDate} onCell={getIsPaymentInfoOrDebtInfo(5)} title="по" key="endDate" />
          <Column onCell={getIsPaymentInfoOrDebtInfo(0)} title="дней" dataIndex="duration" key="duration" />
        </ColumnGroup>
        <Column onCell={getIsPaymentInfoOrDebtInfo(0)} title="Формула" dataIndex="formula" key="formula" />
        <Column render={renderPeriodPercents} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Процент за период" key="percent" />
        <Column render={(it: MergedListItem, _, index) => renderPercentsSum(it, dataSource[index - 1])} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Сумма Процентов" key="percentsSum" />
      </Table>
      <Descriptions
        bordered
        size="small"
        layout="vertical"
      >
        {/*        <Descriptions.Item label="Сумма основного долга">{dataSource[dataSource.length - 1].amount}</Descriptions.Item>
        <Descriptions.Item label="Сумма процентов">{dataSource.reduce((acc, curr) => acc + curr.penny, 0).toFixed(2)}</Descriptions.Item> */}
      </Descriptions>
    </div>
  );
};

export const CalcLoanPenaltyTable = (props: ICalcPenaltyByContract) => {
  const behaviour = useCalcLoanPenaltyTable(props);
  return <CalcLoanPenaltyTableView {...behaviour} />;
};
