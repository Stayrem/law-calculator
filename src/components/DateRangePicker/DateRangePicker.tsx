import { DatePicker } from 'antd';
import React from 'react';
import css from './DateRangePicker.scss';
import { disabledDate } from '../../utils/utils';
import { dateFormat } from '../../constants';

const { RangePicker } = DatePicker;

const DateRangePicker = () => (
  <RangePicker
    className={css.datePicker}
    format={dateFormat}
  />
);

export default DateRangePicker;
