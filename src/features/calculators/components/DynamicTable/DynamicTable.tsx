import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs, { Dayjs } from 'dayjs';
import css from './DynamicTable.scss';
import Label from '../../../../components/Label/Label';
import { dateFormat } from '../../../../constants';
import DatePicker from '../../../../components/DatePicker/DatePicker';

interface IState {
  id: number;
  sum: number;
  date: Dayjs | null;
}

interface IProps {
  label: string;
  onChange: Function;
  // eslint-disable-next-line no-unused-vars
  disabledDate: (date: Dayjs) => boolean;
}

type inputChangeArgs = { id: number; inputSum?: number; inputDate?: Dayjs; };

const initialState: IState[] = [];

const DynamicTable = (props: IProps) => {
  const [state, setState] = useState(initialState);
  const { label, onChange, disabledDate } = props;
  const addItem = () => setState((prevState) => (
    [...prevState, { id: state.length, sum: 0, date: null }]
  ));
  const inputHandler = (params: inputChangeArgs) => {
    const { id, inputSum, inputDate } = params;
    if (inputSum !== undefined) {
      const { date } = state.find((it) => it.id === id);
      const filteredState = state.filter((it) => it.id !== id);
      const payload = [...filteredState, { id, sum: inputSum, date }];
      onChange(payload);
      return setState(payload);
    }
    const { sum } = state.find((it) => it.id === id);
    const filteredState = state.filter((it) => it.id !== id);
    const payload = [...filteredState, { id, sum, date: inputDate }];
    onChange(payload);
    return setState(payload);
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
              disabledDate={disabledDate}
              format={dateFormat}
              placeholder="20-05-2022"
              onChange={(evt) => inputHandler({ id: it.id, inputDate: dayjs.unix(evt.unix()) })}
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
