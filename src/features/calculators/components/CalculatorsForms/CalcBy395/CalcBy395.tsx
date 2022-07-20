import React from 'react';
import { Moment } from 'moment';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker, Button } from 'antd';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcBy395.module.scss';
import { dateFormat } from '../../../../../constants';

interface IForm {
  endDate: string;
  percent: number;
  maxPercent: number;
  debtList: { id: number; sum: number; date: number }[];
  creditList: { id: number; sum: number; date: number }[];
}

const useCalcBy395 = () => {
  const { control, handleSubmit } = useForm<IForm>();
  const onSubmit = handleSubmit((params) => console.log(params));
  return { values: { control }, operations: { handleSubmit: onSubmit } };
};

const CalcBy365View = (props: ReturnType<typeof useCalcBy395>) => {
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
      <Button className={css.submitButton} type="primary" onClick={handleSubmit}>Рассчитать</Button>
    </form>
  );
};

export default () => {
  const behavior = useCalcBy395();
  return <CalcBy365View {...behavior} />;
};
