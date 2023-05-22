import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';
import DatePicker from '../../../../../components/DatePicker/DatePicker';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcBy395.module.scss';
import { dateFormat } from '../../../../../constants';
import { CalcPenaltyTable } from '../CalcPenaltyTable/CalcPenaltyTable';
import { CalcTypes, ListItem } from '../../../types';
import { disabledDebtPaymentDate, disabledEndDate, getIsTableVisible } from '../../../utils';
import { RootStore } from '../../../../../store/rootReducer';

interface Props {
  calcType: CalcTypes;
}
export interface IForm {
  endDate: Dayjs | null;
  debtList: ListItem[];
  paymentsList: ListItem[];
}
const useCalcBy395 = (props: Props) => {
  const { control, watch } = useForm<IForm>();
  const formCurrentState = watch() as IForm;
  const rates = useSelector((store: RootStore) => store.default.calculators.rates.ratesList);
  const isTableVisible = getIsTableVisible(formCurrentState);
  return {
    values: {
      calcType: props.calcType, control, formCurrentState, rates, isTableVisible,
    },
  };
};
const CalcBy365View = (props: ReturnType<typeof useCalcBy395>) => {
  const {
    values: {
      rates, calcType, control, formCurrentState, isTableVisible,
    },
  } = props;
  return (
    <form>
      <div className={css.formRow}>
        <Controller
          name="endDate"
          control={control}
          render={({ field: { onChange } }) => (
            <Label label="Конечная дата просрочки">
              <DatePicker
                disabledDate={disabledEndDate(formCurrentState.debtList)}
                format={dateFormat}
                onChange={(val) => onChange(val)}
              />
            </Label>
          )}
        />
      </div>
      <div className={css.formRow}>
        <Controller
          name="debtList"
          control={control}
          render={({ field: { onChange } }) => (
            <DynamicTable disabledDate={disabledDebtPaymentDate(formCurrentState.endDate)} onChange={onChange} label="Возникновение задолжности" />
          )}
        />
        <Controller
          name="paymentsList"
          control={control}
          render={({ field: { onChange } }) => (
            <DynamicTable disabledDate={disabledDebtPaymentDate(formCurrentState.endDate)} onChange={onChange} label="Частичная оплата задолжности" />
          )}
        />
      </div>
      {isTableVisible && (
        <CalcPenaltyTable
          tableData={{ ...formCurrentState, rates }}
        />
      )}
    </form>
  );
};

export default (props: Props) => {
  const behavior = useCalcBy395(props);
  return <CalcBy365View {...behavior} />;
};
