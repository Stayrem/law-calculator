import React from 'react';
import { DatePicker } from 'antd';
import Label from '../../../../components/Label/Label';
import css from './DatePicker.scss';

interface ICalcPeriodDateProps {
  label: string;
  isRow?: boolean;
}

const DatePicker = (props: ICalcPeriodDateProps) => {
  const { label, isRow = false } = props;
  return (
    <Label label={label} isRow={isRow}>
      <RangePicker className={css.datePicker} />
    </Label>
  );
};

export default DatePicker;
