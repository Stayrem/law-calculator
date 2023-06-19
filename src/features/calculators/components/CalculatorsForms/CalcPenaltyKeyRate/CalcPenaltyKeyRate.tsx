import React, { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { Dayjs } from 'dayjs';
import DatePicker from '../../../../../components/DatePicker/DatePicker';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcPenaltyKeyRate.module.scss';
import { dateFormat } from '../../../../../constants';
import { KEY_RATE_SELECT, KEY_RATE_SHARE } from '../../../constants';
import { disabledDebtPaymentDate, disabledEndDate, getIsTableVisible } from '../../../utils';
import { CalcPenaltyTable } from '../CalcPenaltyTable/CalcPenaltyTable';
import { RootStore } from '../../../../../store/rootReducer';
import { ListItem, KeyRateValue } from '../../../types';

interface IForm {
  endDate: Dayjs | null;
  debtList: ListItem[];
  paymentsList: ListItem[];
  keyRateType: KeyRateValue;
  keyRateDate: Dayjs | undefined;
  keyRateShare: 300 | 150 | 130;
}

const useCalcPenaltyKeyRate = () => {
  const { control, watch } = useForm<IForm>();
  const formCurrentState = watch() as IForm;
  const rates = useSelector((store: RootStore) => store.default.calculators.rates.ratesList);
  const targetRates = useMemo(() => {
    if (formCurrentState.keyRateType === 'byPeriodsOfValidityOfTheRate' || formCurrentState.keyRateDate) {
      return rates.map((it) => ({ ...it, rate: it.rate / formCurrentState.keyRateShare }));
    }
    const targetRate = { timestamp: 0, rate: 0 };
    if (formCurrentState?.keyRateDate) {
      const targetRateDateUnix = formCurrentState.keyRateDate.unix();
      for (let i = 0; i < rates.length; i += 1) {
        if (rates[i].timestamp < targetRateDateUnix && rates[i + 1].timestamp) {
          targetRate.rate = rates[i].rate / formCurrentState.keyRateShare;
          break;
        }
      }
    }

    return [targetRate];
  }, [formCurrentState.keyRateType, formCurrentState.keyRateDate, formCurrentState.keyRateShare]);
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

const CalcPenaltyKeyRateView = (props: ReturnType<typeof useCalcPenaltyKeyRate>) => {
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
      <Controller
        name="keyRateShare"
        control={control}
        defaultValue={KEY_RATE_SHARE[0].value}
        render={({ field: { onChange } }) => (
          <Label label="Доля от ключевой ставки" style={{ width: '290px' }}>
            <Select
              onChange={onChange}
              options={KEY_RATE_SHARE as any}
              defaultValue={KEY_RATE_SHARE[0]}
            />
          </Label>
        )}
      />
      {isTableVisible && (
        <CalcPenaltyTable
          tableData={{ ...formCurrentState, rates: targetRates }}
        />
      )}
    </form>
  );
};

export default () => {
  const behavior = useCalcPenaltyKeyRate();
  return <CalcPenaltyKeyRateView {...behavior} />;
};
