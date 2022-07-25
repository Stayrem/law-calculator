import React from 'react';
import { DatePicker } from 'antd';
import Label from '../../../../components/Label/Label';

interface IDatePicker {
  label: string;
  onChange?: (value: any | null, dateString: string) => void;
  isRow?: boolean;
}

const DatePicker = (props: IDatePicker) => {
  const { label, isRow = false, onChange = (val) => console.log(val) } = props;
  return (
    <Label label={label} isRow={isRow}>
      <DatePicker onChange={onChange} />
    </Label>
  );
};

export default DatePicker;
