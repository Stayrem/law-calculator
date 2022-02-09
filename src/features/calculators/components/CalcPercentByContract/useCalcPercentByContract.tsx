import { useState } from 'react';
import { Dayjs } from 'dayjs';

export interface IFieldItem {
  date: Dayjs | null,
  value: string,
}

interface IState {
  partlyPayments: IFieldItem[],
  additionalLoans: IFieldItem[],
}

const initialState: IState = {
  partlyPayments: [],
  additionalLoans: [],
};

const useCalcPercentByContract = () => {
  const [state, setState] = useState(initialState);
  const { partlyPayments, additionalLoans } = state;
  const onFormImport = (type: keyof IState) => (payload: IFieldItem[]) => {
    setState((prevState) => (
      { ...prevState, [type]: [...prevState[type], ...payload] }));
  };

  const addTableField = (type: keyof IState) => (date = null, value = '') => {
    setState((prevState) => (
      { ...prevState, [type]: [...prevState[type], { date, value }] }));
  };

  const formList = [
    {
      addBtnText: 'Добавить платеж',
      onFieldAdd: addTableField('partlyPayments'),
      label: 'Частичная оплата задолжности',
      name: 'partlyPayments',
      fields: partlyPayments,
    },
    {
      addBtnText: 'Добавить задолженность',
      onFieldAdd: addTableField('additionalLoans'),
      label: 'Дополнительные задолженности',
      name: 'additionalLoans',
      fields: additionalLoans,
    },
  ];
  return {
    values: {
      formList,
    },
    operations: {
      onFormImport,
    },
  };
};

export default useCalcPercentByContract;
