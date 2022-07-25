import React from 'react';
import { Moment } from 'moment';
import { useForm, Controller } from 'react-hook-form';
import {
  DatePicker, Button, Select, InputNumber,
} from 'antd';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcPenaltyByContract.module.scss';
import { dateFormat } from '../../../../../constants';
import { KeyRates } from '../types';

const { Option } = Select;

interface IForm {
  endDate: string;
  percent: number;
  maxPercent: number;
  debtList: { id: number; sum: number; date: number }[];
  creditList: { id: number; sum: number; date: number }[];
  keyRate: KeyRates;
  keyRateDate: number;
  maxPercentInRuble: number;
}

const useCalcPenaltyByContract = () => {
  const { control, handleSubmit } = useForm<IForm>();
  const onSubmit = handleSubmit((params) => console.log(params));
  return { values: { control }, operations: { handleSubmit: onSubmit } };
};

const selectAfter = (
  <Select defaultValue="в день" className="select-after">
    <Option value="в день">в день</Option>
    <Option value="в месяц">.в месяц</Option>
    <Option value="в год">в год</Option>
  </Select>
);

const CalcPenaltyByContractView = (props: ReturnType<typeof useCalcPenaltyByContract>) => {
  const { values: { control }, operations: { handleSubmit } } = props;

  return (
    <form>
      <div className={css.formRow}>
        <Controller
          name="endDate"
          control={control}
          render={({ field: { onChange } }) => (
            <Label label="Конечная дата просрочки">
              <DatePicker format={dateFormat} onChange={(val: Moment) => onChange(val.unix())} />
            </Label>
          )}
        />
      </div>
      <div className={css.formRow}>
        <Controller
          name="debtList"
          control={control}
          render={({ field: { onChange } }) => (
            <DynamicTable onChange={onChange} label="Возникновение задолжности" />
          )}
        />
        <Controller
          name="creditList"
          control={control}
          render={({ field: { onChange } }) => (
            <DynamicTable onChange={onChange} label="Частичная оплата задолжности" />
          )}
        />
      </div>
      <div className={css.formRow}>
        <Controller
          name="percent"
          control={control}
          render={({ field: { onChange } }) => (
            <Label label="&nbsp;" style={{ width: '180px' }}>
              <InputNumber prefix="%" onChange={onChange} defaultValue={2} addonAfter={selectAfter} />
            </Label>
          )}
        />
        <Controller
          name="maxPercentInRuble"
          control={control}
          render={({ field: { onChange } }) => (
            <Label isRow label="&nbsp;" style={{ width: '350px' }}>
              <span className={css.percentText}>но не боллее</span>
              <InputNumber style={{ width: '150px' }} className={css.maxPercentRubles} prefix="₽" onChange={onChange} />
            </Label>
          )}
        />
      </div>
      <Button className={css.submitButton} type="primary" onClick={handleSubmit}>Рассчитать</Button>
    </form>
  );
};

export default () => {
  const behavior = useCalcPenaltyByContract();
  return <CalcPenaltyByContractView {...behavior} />;
};
