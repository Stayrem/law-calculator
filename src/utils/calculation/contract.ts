import { Dayjs } from 'dayjs';
import { ListItem, RateItem } from '../../features/calculators/types';
import { MergedListItem } from './395';
import { calculateDuration, calculatePenalty, getYearDays } from '../utils';

const listTypesDict: Record<MergedListItem['type'], MergedListItem['type']> = {
  debt: 'debt', payment: 'payment', debtInfo: 'debtInfo', paymentInfo: 'paymentInfo',
};

export type ContractProps = {
  debtList: ListItem[],
  paymentsList?: ListItem[],
  endDate: Dayjs,
  percent: number;
  maxPercent: number;
  period: 'day' | 'month' | 'year';
}

// eslint-disable-next-line import/prefer-default-export
export const mergeAndCreateContractTable = (props: ContractProps): MergedListItem[][] => {
  const {
    debtList, paymentsList, endDate, percent,
  } = props;
  const mergedList: MergedListItem[] = debtList
    .map((item) => ({
      ...item, type: listTypesDict.debt, startDate: item.date,
    }))
    .concat(paymentsList
      ? paymentsList.map((item) => ({
        ...item,
        type: listTypesDict.payment,
        startDate: item.date,
      }))
      : [])
    .sort((a, b) => a.date.diff(b.date));
  function groupByTypeAndDate(items: MergedListItem[]): MergedListItem[][] {
    const result: MergedListItem[][] = [];
    let currentGroup: MergedListItem[] = [];
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].type === 'debt') {
        if (currentGroup.length > 0) {
          result.push(currentGroup);
        }
        currentGroup = [];
      }
      if (items[i].type === 'payment') {
        currentGroup.push({
          type: listTypesDict.paymentInfo,
          startDate: items[i].startDate,
          amount: items[i].sum,
          endDate: items[i].startDate,
          title: 'Погашение части долга',
          duration: null,
          rate: null,
          sum: 0,
          date: items[i].startDate,
        });
      }
      currentGroup.push(items[i]);
      if (i === items.length - 1) {
        result.push(currentGroup);
      }
    }
    return result;
  }
  const groupedItems: MergedListItem[][] = groupByTypeAndDate(mergedList);
  const groupItemsWithValues = (items: MergedListItem[][]) => items.map((item) => {
    let amount = 0;

    return item.map((it, i) => {
      const nextDate = item[i + 1] && item[i + 1].endDate;
      const endCurrentDate = nextDate ? nextDate.subtract(1, 'day') : endDate;
      const duration = nextDate
        ? calculateDuration(it.startDate, endCurrentDate) + 2
        : calculateDuration(it.startDate, endDate) + 2;
      const getFormula = () => (props.period === 'year'
        ? `${amount} x ${duration} / ${getYearDays(it.startDate)} x ${percent}%`
        : `${amount} x ${duration} x ${percent}%`);
      const penny = it.type !== 'paymentInfo'
        ? calculatePenalty({
          amount: it.sum + amount,
          interestRate: percent,
          days: duration,
          interestPeriod: props.period,
          daysInYear: getYearDays(it.startDate),
        })
        : null;

      if (it.type === 'debt') {
        amount += it.sum;
        return {
          ...it,
          endDate: endCurrentDate,
          formula: getFormula(),
          duration,
          amount,
          penny,
        };
      }
      if (it.type === 'payment') {
        amount -= it.sum;
      }
      return {
        ...it,
        endDate: endCurrentDate,
        amount: it.type === 'payment' ? amount : it.amount,
        formula: it.type === 'payment' ? getFormula() : null,
        duration,
        penny,
      };
    });
  });
  return groupItemsWithValues(groupedItems);
};
