import React, { useMemo } from 'react';
import { useForm, Controller, Control } from 'react-hook-form';
import {
  Select, InputNumber,
} from 'antd';
import { Dayjs } from 'dayjs';
import DatePicker from '../../../../../components/DatePicker/DatePicker';
import Label from '../../../../../components/Label/Label';
import DynamicTable from '../../DynamicTable/DynamicTable';
import css from './CalcPenaltyByLoanContract.module.scss';
import { dateFormat } from '../../../../../constants';
import { disabledDebtPaymentDate, disabledEndDate, getIsTableVisible } from '../../../utils';
import { CALC_CONTRACT_PERIOD_OPTIONS } from '../../../constants';
import {
  CalcLoanPenaltyTable,
} from '../../CalculatorsResultTables/CalcLoanContractPenaltyTable/CalcLoanContractPenaltyTable';

export interface IForm {
  endDate: Dayjs;
  percent: number;
  debtList: { id: number; sum: number; date: Dayjs }[];
  paymentsList: { id: number; sum: number; date: Dayjs }[];
  period: 'day' | 'month' | 'year';
}

const useCalcPenaltyByLoanContract = () => {
  const { control, watch } = useForm<IForm>();
  const formCurrentState = watch();
  const isTableVisible = useMemo(() => {
    const isBasicValid = getIsTableVisible(formCurrentState);
    return isBasicValid && formCurrentState.percent;
  }, [formCurrentState]);
  return { values: { control, formCurrentState, isTableVisible } };
};

const SelectAfter = ({ control }: { control: Control<IForm, any> }) => (
  <Controller
    name="period"
    control={control}
    defaultValue={CALC_CONTRACT_PERIOD_OPTIONS[0].value}
    render={({ field: { onChange } }) => (
      <Select style={{ width: '100px' }} options={CALC_CONTRACT_PERIOD_OPTIONS} onChange={onChange} defaultValue={CALC_CONTRACT_PERIOD_OPTIONS[0].value} className="select-after" />
    )}
  />
);

const CalcPenaltyByLoanContractView = (props: ReturnType<typeof useCalcPenaltyByLoanContract>) => {
  const { values: { control, formCurrentState, isTableVisible } } = props;

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
          name="percent"
          control={control}
          defaultValue={2}
          render={({ field: { onChange } }) => (
            <Label label="&nbsp;" style={{ width: '180px' }}>
              <InputNumber prefix="%" onChange={onChange} defaultValue={2} addonAfter={<SelectAfter control={control} />} />
            </Label>
          )}
        />
      </div>
      {/*      {isTableVisible && (
        <CalcLoanPenaltyTable
          tableData={{ ...formCurrentState }}
        />
      )} */}
    </form>
  );
};

export default () => {
  const behavior = useCalcPenaltyByLoanContract();
  return <CalcPenaltyByLoanContractView {...behavior} />;
};
