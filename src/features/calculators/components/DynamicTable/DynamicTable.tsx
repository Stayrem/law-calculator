import React, { useState } from 'react';
import { Button, Input, DatePicker } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import css from './DynamicTable.scss';
import Label from '../../../../components/Label/Label';
import { dateFormat } from '../../../../constants';

interface IState {
  id: number;
  sum: number;
  date: number;
}

interface IProps {
  label: string;
  onChange: Function;
}

type inputChangeArgs = { id: number; inputSum?: number; inputDate?: number };

const initialState: IState[] = [];

const DynamicTable = (props: IProps) => {
  const [state, setState] = useState(initialState);
  const { label, onChange } = props;
  const addItem = () => setState((prevState) => (
    [...prevState, { id: state.length, sum: 0, date: 0 }]
  ));
  const inputHandler = (params: inputChangeArgs) => {
    const { id, inputSum, inputDate } = params;
    if (inputSum !== undefined) {
      const { date } = state.find((it) => it.id === id);
      const filteredState = state.filter((it) => it.id !== id);
      const payload = [...filteredState, { id, sum: inputSum, date }];
      onChange(payload);
      setState(payload);
    }
    const { sum } = state.find((it) => it.id === id);
    const filteredState = state.filter((it) => it.id !== id);
    const payload = [...filteredState, { id, sum, date: inputDate }];
    onChange(payload);
    setState(payload);
  };
  const itemDeleteHandler = (id: number) => {
    const payload = state.filter((it) => it.id !== id);
    setState(payload);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.formRow}>
        <Label label={label} />
      </div>
      {state.map((it, i) => (
        <div key={it.id} className={css.item}>
          <Label className={css.sumWrapper} label={i === 0 ? 'Сумма' : ''}>
            <Input
              placeholder="1000"
              suffix="₽"
              onChange={(evt) => inputHandler({ id: it.id, inputSum: Number(evt.target.value) })}
            />
          </Label>
          <Label label={i === 0 ? 'Дата' : ''}>
            <DatePicker
              format={dateFormat}
              placeholder="20-05-2022"
              onChange={(evt) => inputHandler({ id: it.id, inputDate: evt.unix() })}
            />
          </Label>
          <Button className={css.deleteButton} onClick={() => itemDeleteHandler(it.id)} shape="circle" icon={<CloseCircleOutlined />} />
        </div>
      ))}
      <Button onClick={addItem}>Добавить</Button>
    </div>
  );
};

export default DynamicTable;
