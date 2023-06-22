import dayjs, { Dayjs } from 'dayjs';
import { ListItem, RateItem } from '../../features/calculators/types';
import {
  calculateDuration, calculatePenalty, findRateForDate, getYearDays,
} from '../utils';

type Props = {
  debtList: ListItem[],
  paymentsList?: ListItem[],
  endDate: Dayjs,
  rates: RateItem[],
}

export type MergedListItem = ListItem & {
  startDate: Dayjs;
  sum: number;
  type: 'debt' | 'payment' | 'debtInfo' | 'paymentInfo';
  rate?: number;
  amount?: number;
  endDate?: Dayjs;
  duration?: number;
  penny?: number;
  formula?: string;
  title?: string;
}

const listTypesDict: Record<MergedListItem['type'], MergedListItem['type']> = {
  debt: 'debt', payment: 'payment', debtInfo: 'debtInfo', paymentInfo: 'paymentInfo',
};

const findNextRateChange = (r: RateItem[], startDate: number, endDate: number): RateItem | null => {
  for (let i = r.length - 1; i >= 0; i -= 1) {
    if (r[i].timestamp > startDate && r[i].timestamp < endDate) {
      return r[i];
    }
  }
  return null;
};

const processYearChange = (extendedList: MergedListItem[]) => {
  const result: MergedListItem[] = [];
  for (let i = 0; i < extendedList.length; i += 1) {
    const startYear = extendedList[i].startDate?.year();
    const endYear = extendedList[i].endDate?.year();
    if (startYear && endYear && startYear !== endYear) {
      const currentYearChangeDate = dayjs(`${extendedList[i].startDate.year()}-12-31`, 'YYYY-MM-DD');
      const nextYearChangeDate = dayjs(`${extendedList[i].endDate.year()}-01-01`, 'YYYY-MM-DD');
      const currentItem: MergedListItem = {
        ...extendedList[i],
        endDate: currentYearChangeDate,
      };
      const nextItem: MergedListItem = {
        ...extendedList[i],
        startDate: nextYearChangeDate,
      };
      result.push(currentItem);
      result.push(nextItem);
    } else {
      result.push(extendedList[i]);
    }
  }
  return result;
};

const processCalculation = (list: MergedListItem[], rates: RateItem[]) => list.map((it) => {
  if (it.type === 'debt') {
    const duration = calculateDuration(it.startDate, it.endDate) + 1;
    const rate = findRateForDate(rates, it.startDate);
    const daysInYear = getYearDays(it.startDate);
    const formula = `${it.amount} x ${duration} x ${rate}% / ${daysInYear}`;
    const penny = calculatePenalty({
      amount: it.amount,
      days: duration,
      interestRate: rate,
      interestPeriod: 'year',
      daysInYear,
    });
    return {
      ...it, duration, rate, formula, penny,
    };
  }
  return it;
});

function processRateChanges(extendedList: MergedListItem[], rates: RateItem[]): void {
  for (let i = 0; i < extendedList.length; i += 1) {
    if (extendedList[i].type === 'paymentInfo' || extendedList[i].type === 'debtInfo') {
      // eslint-disable-next-line no-continue
      continue;
    }

    let currentDate = extendedList[i].date;
    const { endDate } = extendedList[i];

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const nextRateChange = findNextRateChange(rates, currentDate.unix(), endDate.unix());

      if (nextRateChange) {
        const rateChangeDate = dayjs.unix(nextRateChange.timestamp);
        const newItem: MergedListItem = {
          ...extendedList[i],
          startDate: rateChangeDate,
          endDate: extendedList[i].endDate,
        };

        // eslint-disable-next-line no-param-reassign
        extendedList[i].endDate = rateChangeDate.subtract(1, 'day');
        extendedList.splice(i + 1, 0, newItem);
        i += 1;

        currentDate = rateChangeDate;
      } else {
        break;
      }
    }
  }
}

export function mergeAndSortDebtsAndPayments(props: Props): MergedListItem[] {
  const {
    debtList, paymentsList, endDate, rates,
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
      : []);

  mergedList.sort((a, b) => a.date.diff(b.date));

  const extendedList: MergedListItem[] = [];

  for (let i = 0; i < mergedList.length; i += 1) {
    if (i !== 0 && mergedList[i].type === 'payment') {
      extendedList.push({
        type: listTypesDict.paymentInfo,
        startDate: mergedList[i].startDate,
        amount: mergedList[i].sum,
        endDate: null,
        title: 'Погашение части долга',
        duration: null,
        rate: null,
        sum: 0,
        date: mergedList[i].startDate,
      });
    } else if (i !== 0 && mergedList[i].type === 'debt') {
      extendedList.push({
        type: listTypesDict.debtInfo,
        startDate: mergedList[i].startDate,
        amount: mergedList[i].sum,
        endDate: null,
        title: 'Дополнительная задолженность',
        duration: null,
        rate: null,
        sum: 0,
        date: mergedList[i].startDate,
      });
    }
    if (mergedList[i].type === 'debt' || mergedList[i].type === 'payment') {
      mergedList[i].amount = i === 0
        ? mergedList[i].sum
        : mergedList[i - 1].amount + (mergedList[i].type === 'debt' ? mergedList[i].sum : -mergedList[i].sum);
    }

    extendedList.push(mergedList[i]);
  }
  for (let i = 0; i < extendedList.length; i += 1) {
    if (extendedList[i].type === 'paymentInfo' || extendedList[i].type === 'debtInfo') {
      // eslint-disable-next-line no-continue
      continue;
    }

    let nextDate: dayjs.Dayjs | null;

    if (i < extendedList.length - 1) {
      nextDate = extendedList[i + 1].date ? extendedList[i + 1].date : null;
      extendedList[i].endDate = nextDate
        ? nextDate.subtract(1, 'day')
        : null;
    } else {
      nextDate = endDate;
      extendedList[i].endDate = endDate;
    }
    extendedList[i].rate = findRateForDate(rates, extendedList[i].startDate);
  }
  processRateChanges(extendedList, rates);
  const listSplitByYear = processYearChange(extendedList);
  return processCalculation(listSplitByYear, rates);
}
