import dayjs, { Dayjs } from 'dayjs';
import { ListItem, RateItem } from '../../features/calculators/types';
import { calculateDuration, getYearDays, calculatePenalty } from '../utils';

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

const processYearChange = (extendedList: MergedListItem[]) => {
  const result: MergedListItem[] = [];
  for (let i = 0; i < extendedList.length; i += 1) {
    const startYear = extendedList[i].startDate?.year();
    const endYear = extendedList[i].endDate?.year();
    if (startYear && endYear && startYear !== endYear) {
      const currentYearChangeDate = dayjs(`${extendedList[i].startDate.year()}-12-31`, 'YYYY-MM-DD');
      const currentDuration = calculateDuration(extendedList[i].startDate, currentYearChangeDate) + 1;

      const nextYearChangeDate = dayjs(`${extendedList[i].endDate.year()}-01-01`, 'YYYY-MM-DD');
      const nextDuration = calculateDuration(nextYearChangeDate, extendedList[i].endDate) + 1;

      const currentItem: MergedListItem = {
        ...extendedList[i],
        endDate: currentYearChangeDate,
        penny: calculatePenalty({
          amount: extendedList[i].amount,
          interestRate: extendedList[i].rate,
          daysInYear: getYearDays(extendedList[i].startDate),
          days: extendedList[i].duration,
          interestPeriod: 'year',
        }),
        formula: `${extendedList[i].amount} x ${currentDuration} x ${extendedList[i].rate} / ${getYearDays(currentYearChangeDate)}`,
        duration: currentDuration,
      };
      const nextItem: MergedListItem = {
        ...extendedList[i],
        startDate: nextYearChangeDate,
        penny: calculatePenalty({
          amount: extendedList[i].amount,
          interestRate: extendedList[i].rate,
          daysInYear: getYearDays(extendedList[i].startDate),
          days: extendedList[i].duration,
          interestPeriod: 'year',
        }),
        formula: `${extendedList[i].amount} x ${nextDuration} x ${extendedList[i].rate} / ${getYearDays(nextYearChangeDate)}`,
        duration: nextDuration,
      };
      result.push(currentItem);
      result.push(nextItem);
    } else {
      result.push(extendedList[i]);
    }
  }
  return result;
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
          penny: calculatePenalty({
            amount: extendedList[i].amount,
            interestRate: rate,
            daysInYear: getYearDays(rateChangeDate),
            days: duration,
            interestPeriod: 'year',
          }),
          formula: `${extendedList[i].amount} x ${duration} x ${rate} / ${getYearDays(rateChangeDate)}`,
          rate,
          duration,
        };

        // eslint-disable-next-line no-param-reassign
        extendedList[i].endDate = rateChangeDate.subtract(1, 'day');
        // eslint-disable-next-line no-param-reassign
        extendedList[i].duration = calculateDuration(currentDate, rateChangeDate) + 1;
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
  rates: RateItem[],
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

    const currentDate = dayjs(extendedList[i].date, 'DD.MM.YYYY');
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
    mergedList[i].rate = findRateForDate(rates, mergedList[i].date);
    extendedList[i].duration = nextDate
      ? calculateDuration(currentDate, nextDate) + 1
      : calculateDuration(currentDate, endDate) + 1;
    extendedList[i].formula = `${extendedList[i].amount} x ${extendedList[i].duration} x ${extendedList[i].rate.toFixed(2)}% / ${getYearDays(currentDate)}`;
    extendedList[i].penny = extendedList[i].duration
      ? calculatePenalty({
        amount: extendedList[i].amount,
        interestRate: extendedList[i].rate,
        daysInYear: getYearDays(extendedList[i].startDate),
        days: extendedList[i].duration,
        interestPeriod: 'year',
      })
      : null;
  }

  processRateChanges(extendedList, rates);

  return processYearChange(extendedList);
}
