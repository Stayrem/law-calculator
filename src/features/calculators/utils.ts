import { Dayjs } from 'dayjs';
import { ListItem } from './types';

type Props = {
  debtList: ListItem[],
  paymentsList: ListItem[],
  endDate: Dayjs | null,
}
export const getIsTableVisible = ({ endDate, paymentsList, debtList }: Props) => {
  const getIsListValid = (it: ListItem) => it.sum > 0 && it.date && it.date.isValid();
  const isPaymentsListValid = !paymentsList ? true : paymentsList.every(getIsListValid);
  const isDebtListValid = debtList && debtList.every(getIsListValid);
  return isPaymentsListValid && isDebtListValid && endDate;
};

export const disabledEndDate = (debtList: ListItem[]) => (current: Dayjs) => {
  if (debtList && debtList?.length > 0) {
    return debtList.every((it: ListItem) => (
      it.date ? it.date.unix() > current.unix() : true));
  }
  return false;
};
export const disabledDebtPaymentDate = (endDate: Dayjs) => (current: Dayjs) => {
  if (endDate) {
    return (endDate as Dayjs).unix() < current.unix();
  }
  return false;
};
