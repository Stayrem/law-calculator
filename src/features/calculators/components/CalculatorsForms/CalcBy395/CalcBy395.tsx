import React from 'react';
import { Moment } from 'moment';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker, Button } from 'antd';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcBy395.module.scss';
import { dateFormat } from '../../../../../constants';
import { CalcPenaltyBy395Table } from '../CalcPenaltyBy395Table/CalcPenaltyByContractTable';

const mock = {
  endDate: 1671202376,
  debtList: [
    { date: 1669906376, id: 0, sum: 1000 },
    { date: 1670079176, id: 1, sum: 500 },
    { date: 1671115976, id: 1, sum: 500 },
  ],
  paymentsList: [
    { date: 1670251976, id: 0, sum: 100 },
    { date: 1670683976, id: 1, sum: 200 },
  ],
};
interface IForm {
  endDate: number;
  debtList: { id: number; sum: number; date: number }[];
  paymentsList: { id: number; sum: number; date: number }[];
}

const useCalcBy395 = () => {
  const { control, handleSubmit, watch } = useForm<IForm>();
  const onSubmit = handleSubmit((params) => console.log(params));
  const formCurrentState = watch();
  return { values: { control, formCurrentState }, operations: { handleSubmit: onSubmit } };
};

const CalcBy365View = (props: ReturnType<typeof useCalcBy395>) => {
  const { values: { control, formCurrentState }, operations: { handleSubmit } } = props;

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
          name="paymentsList"
          control={control}
          render={({ field: { onChange } }) => (
            <DynamicTable onChange={onChange} label="Частичная оплата задолжности" />
          )}
        />
      </div>
      <Button className={css.submitButton} type="primary" onClick={handleSubmit}>Рассчитать</Button>
      {true
       && <CalcPenaltyBy395Table {...mock} />}
    </form>
  );
};

export default () => {
  const behavior = useCalcBy395();
  return <CalcBy365View {...behavior} />;
};
