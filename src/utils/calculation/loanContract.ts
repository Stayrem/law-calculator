import dayjs, { Dayjs } from 'dayjs';
import { ListItem, RateItem } from '../../features/calculators/types';
import { calculateDuration, getYearDays } from '../utils';

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

function calculatePenalty(amount: number, days: number, interestRate: number, daysInYear: number) {
  const ratePerDay = (interestRate * daysInYear) / 100;
  const pennyPerDay = (ratePerDay * 100) / amount;
  return (days * pennyPerDay) + amount;
}

const listTypesDict: Record<MergedListItem['type'], MergedListItem['type']> = {
  debt: 'debt', payment: 'payment', debtInfo: 'debtInfo', paymentInfo: 'paymentInfo',
};

function findRateForDate(rates: RateItem[], date: Dayjs): number | null {
  for (let i = rates.length - 1; i >= 0; i -= 1) {
    if (i === 0) {
      return rates[i].rate;
    }
    if (date.unix() > rates[i].timestamp && date.unix() < rates[i - 1].timestamp) {
      return rates[i].rate;
    }
  }
  return null;
}

const findNextRateChange = (r: RateItem[], startDate: number, endDate: number): RateItem | null => {
  for (let i = r.length - 1; i >= 0; i -= 1) {
    if (r[i].timestamp > startDate && r[i].timestamp < endDate) {
      return r[i];
    }
  }
  return null;
};

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
        const { rate } = nextRateChange;
        const duration = calculateDuration(rateChangeDate, extendedList[i].endDate) + 1;
        const newItem: MergedListItem = {
          ...extendedList[i],
          startDate: rateChangeDate,
          endDate: extendedList[i].endDate,
          penny: calculatePenalty(extendedList[i].amount, rate, duration, getYearDays(rateChangeDate)),
          formula: `${extendedList[i].amount} x ${duration} x ${rate} / ${getYearDays(rateChangeDate)}`,
          rate,
          duration,
        };

        // eslint-disable-next-line no-param-reassign
        extendedList[i].endDate = rateChangeDate.subtract(1, 'day');
        // eslint-disable-next-line no-param-reassign
        extendedList[i].duration = calculateDuration(currentDate, rateChangeDate);
        // eslint-disable-next-line no-param-reassign
        extendedList[i].formula = `${extendedList[i].amount} x ${extendedList[i].duration} x ${rate} / ${getYearDays(rateChangeDate)}`;

        extendedList.splice(i + 1, 0, newItem);
        i += 1;

        currentDate = rateChangeDate;
      } else {
        break;
      }
    }
  }
}

type Props = {
  debtList: ListItem[],
  paymentsList?: ListItem[],
  endDate: Dayjs,
}

export function mergeAndSortDebtsAndPaymentsLoan(props: Props): MergedListItem[] {
  const {
    debtList, paymentsList, endDate,
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
  let amount = 0;
  for (let i = 0; i < mergedList.length; i += 1) {
    if (i === 0) {
      amount += mergedList[i].sum;
      extendedList.push({ ...mergedList[i], amount });
    }
    if (i !== 0 && mergedList[i].type === 'debt') {
      extendedList.push({
        type: listTypesDict.debtInfo,
        startDate: mergedList[i].startDate,
        amount: mergedList[i].sum,
        endDate: null,
        title: 'Новая задолженность',
        duration: null,
        rate: null,
        sum: 0,
        date: mergedList[i].startDate,
      });
      extendedList.push(mergedList[i]);
    }
    if (i !== 0 && mergedList[i].type === 'payment') {
      extendedList.push({
        type: listTypesDict.paymentInfo,
        startDate: mergedList[i].startDate,
        amount: mergedList[i].sum,
        endDate: null,
        title: 'Оплата долга',
        duration: null,
        rate: null,
        sum: 0,
        date: mergedList[i].startDate,
      });
      extendedList.push(mergedList[i]);
    }
  }
  return extendedList;
}
