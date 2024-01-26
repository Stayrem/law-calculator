import React, { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select } from 'antd';
import { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';
import DatePicker from '../../../../../components/DatePicker/DatePicker';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcBy317.module.scss';
import { dateFormat } from '../../../../../constants';
import { KEY_RATE_SELECT } from '../../../constants';
import { disabledDebtPaymentDate, disabledEndDate, getIsTableVisible } from '../../../utils';
import { ListItem, KeyRateValue } from '../../../types';
import { RootStore } from '../../../../../store/rootReducer';
import { findRateForDate } from '../../../../../utils/utils';
import { CalcPenalty317Table } from '../../CalculatorsResultTables/CalculatorsResultsTable317/CalculatorsResultsTable317';

export interface IForm {
  endDate: Dayjs | null;
  debtList: ListItem[];
  paymentsList: ListItem[];
  keyRateType: KeyRateValue;
  keyRateDate: Dayjs | undefined;
}

const useCalcBy317 = () => {
  const { control, watch } = useForm<IForm>();
  const formCurrentState = watch() as IForm;
  const rates = useSelector((store: RootStore) => store.default.calculators.rates.ratesList);
  const targetRates = useMemo(() => {
    if (formCurrentState.keyRateType === 'byPeriodsOfValidityOfTheRate') {
      return rates;
    }
    if (formCurrentState.keyRateDate) {
      const targetRate = {
        timestamp: formCurrentState.keyRateDate.unix(),
        rate: findRateForDate(rates, formCurrentState.keyRateDate),
      };
      return [targetRate];
    }
    return rates;
  }, [formCurrentState.keyRateType, formCurrentState.keyRateDate]);
  const isTableVisible = useMemo(() => {
    const isBasicValid = getIsTableVisible(formCurrentState);
    if (formCurrentState.keyRateType === 'byPeriodsOfValidityOfTheRate') {
      return isBasicValid;
    }
    return isBasicValid && formCurrentState.keyRateDate && formCurrentState.keyRateDate.isValid();
  }, [formCurrentState]);
  return {
    values: {
      control, formCurrentState, targetRates, isTableVisible,
    },
  };
};

const CalcBy317View = (props: ReturnType<typeof useCalcBy317>) => {
  const {
    values: {
      control, formCurrentState, isTableVisible, targetRates,
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
      <div className={css.formRow}>

        <Controller
          name="keyRateType"
          control={control}
          defaultValue={KEY_RATE_SELECT[0].value}
          render={({ field: { onChange } }) => (
            <Label label="Ключевая ставка" style={{ width: '290px' }}>
              <Select
                options={KEY_RATE_SELECT as any}
                onChange={onChange}
                defaultValue={KEY_RATE_SELECT[0].value}
              />
            </Label>
          )}
        />
        <Controller
          name="keyRateDate"
          control={control}
          render={({ field: { onChange } }) => (
            <Label label="&nbsp;" style={{ width: '150px' }}>
              <DatePicker disabled={formCurrentState.keyRateType === 'byPeriodsOfValidityOfTheRate' || !formCurrentState.keyRateType} onChange={onChange} format={dateFormat} />
            </Label>
          )}
        />
      </div>
      {isTableVisible && (
        <CalcPenalty317Table
          tableData={{ ...formCurrentState, rates: targetRates }}
        />
      )}
    </form>
  );
};

export default () => {
  const behavior = useCalcBy317();
  return <CalcBy317View {...behavior} />;
};
