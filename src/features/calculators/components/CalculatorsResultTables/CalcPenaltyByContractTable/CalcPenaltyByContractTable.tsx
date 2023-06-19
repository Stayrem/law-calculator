import React from 'react';
import {
  Descriptions,
  Typography,
  Table,
} from 'antd';

import css from './CalcPenaltyTable.scss';
import { MergedListItem } from '../../../../../utils/calculation/395';
import { dateFormat } from '../../../../../constants';
import { mergeAndCreateContractTable } from '../../../../../utils/calculation/contract';
import { IForm } from '../../CalculatorsForms/CalcPenaltyByContract/CalcPenaltyByContract';

const { Column, ColumnGroup } = Table;
const { Title } = Typography;
export interface ICalcPenaltyByContract {
  tableData: IForm
}

const useCalcPenaltyContractTable = (props: ICalcPenaltyByContract) => {
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
  const dataSource = mergeAndCreateContractTable(tableData);
  const paginationConfig = { pageSize: Infinity, hideOnSinglePage: true };
  return {
    values: {
      dataSource,
      endDate: tableData.endDate,
      paginationConfig,
    },
    operations: {
      getIsPaymentInfoOrDebtInfo,
      renderEndDate,
      renderAmount,
    },
  };
};

const CalcPenaltyContractTableView = (props: ReturnType<typeof useCalcPenaltyContractTable>) => {
  const {
    values: {
      dataSource,
      paginationConfig,
    },
    operations: {
      getIsPaymentInfoOrDebtInfo,
      renderEndDate,
      renderAmount,
    },
  } = props;
  return (
    <div className={css.wrapper}>
      {dataSource.map((item) => (
        <>
          <Title level={5}>
            Расчёт неустойки по задолженности, возникшей
            {' '}
            {item[0].date.format(dateFormat)}
          </Title>
          <Table bordered dataSource={item} pagination={paginationConfig}>
            <Column render={renderAmount} title="Задолженность" key="amount" />
            <ColumnGroup title="Период просрочки">
              <Column render={(it: MergedListItem) => it.startDate.format(dateFormat)} title="с" key="startDate" />
              <Column render={renderEndDate} onCell={getIsPaymentInfoOrDebtInfo(5)} title="по" key="endDate" />
              <Column onCell={getIsPaymentInfoOrDebtInfo(0)} title="дней" dataIndex="duration" key="duration" />
            </ColumnGroup>

            <Column onCell={getIsPaymentInfoOrDebtInfo(0)} title="Формула" dataIndex="formula" key="formula" />
            <Column render={(it: MergedListItem) => (it.penny ? it.penny.toFixed(2) : null)} onCell={getIsPaymentInfoOrDebtInfo(0)} title="Неустойка" key="penny" />

          </Table>
          <Descriptions
            bordered
            size="small"
            layout="vertical"
          >
            <Descriptions.Item label="Сумма основного долга">{item[item.length - 1].amount}</Descriptions.Item>
            <Descriptions.Item label="Сумма процентов">{item.reduce((acc, curr) => acc + curr.penny, 0).toFixed(2)}</Descriptions.Item>
          </Descriptions>
        </>
      ))}
    </div>
  );
};

export const CalcPenaltyContractTable = (props: ICalcPenaltyByContract) => {
  const behaviour = useCalcPenaltyContractTable(props);
  return <CalcPenaltyContractTableView {...behaviour} />;
};
