import React from 'react';
import { Moment } from 'moment';
import { useForm, Controller } from 'react-hook-form';
import {
  DatePicker, Button, Select, InputNumber,
} from 'antd';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcDoublePenaltyKeyRate.module.scss';
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
  keyRateMultiplicity: number;
}

const useCalcDoublePenaltyKeyRate = () => {
  const { control, handleSubmit } = useForm<IForm>();
  const onSubmit = handleSubmit((params) => console.log(params));
  return { values: { control }, operations: { handleSubmit: onSubmit } };
};

const CalcDoublePenaltyKeyRateView = (props: ReturnType<typeof useCalcDoublePenaltyKeyRate>) => {
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
          name="keyRate"
          control={control}
          render={({ field: { onChange } }) => (
            <Label label="Ключевая ставка" style={{ width: '290px' }}>
              <Select
                onChange={onChange}
              >
                <Option value="на день наступления обязательств">на день наступления обязательств</Option>
                <Option value="на день фактической оплаты">на день фактической оплаты</Option>
                <Option value="по рериодам действия ставки">по рериодам действия ставки</Option>
                <Option value="на день подачи иска в суд">на день подачи иска в суд</Option>
              </Select>
            </Label>
          )}
        />
        <Controller
          name="keyRateDate"
          control={control}
          render={({ field: { onChange } }) => (
            <Label label="&nbsp;" style={{ width: '150px' }}>
              <DatePicker onChange={onChange} format={dateFormat} />
            </Label>
          )}
        />
      </div>
      <Controller
        name="keyRateMultiplicity"
        control={control}
        render={({ field: { onChange } }) => (
          <Label label="Кратность ключевой ставки" style={{ width: '290px' }}>
            <InputNumber onChange={onChange} defaultValue={2} />
          </Label>
        )}
      />
      <Button className={css.submitButton} type="primary" onClick={handleSubmit}>Рассчитать</Button>
    </form>
  );
};

export default () => {
  const behavior = useCalcDoublePenaltyKeyRate();
  return <CalcDoublePenaltyKeyRateView {...behavior} />;
};
