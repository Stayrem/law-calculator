import dayjs, { Dayjs } from 'dayjs';
import { CalcTypes, ListItem, RateItem } from '../../features/calculators/types';

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

function calculatePenalty(amount: number, days: number, interestRate: number) {
  const dailyInterestRate = interestRate / 100 / 365;
  return amount * dailyInterestRate * days;
}

const listTypesDict: Record<MergedListItem['type'], MergedListItem['type']> = {
  debt: 'debt', payment: 'payment', debtInfo: 'debtInfo', paymentInfo: 'paymentInfo',
};

function findRateForDate(rates: RateItem[], date: Dayjs): number | null {
  for (let i = 0; i < rates.length - 1; i += 1) {
    if (date.unix() >= rates[i].timestamp && date.unix() < rates[i + 1].timestamp) {
      return rates[i].rate;
    }
  }

  if (date.unix() >= rates[rates.length - 1].timestamp) {
    return rates[rates.length - 1].rate;
  }

  if (date.unix() < rates[0].timestamp) {
    return rates[0].rate;
  }

  return null;
}

function calculateDuration(date1: dayjs.Dayjs, date2: dayjs.Dayjs): number {
  const duration = Math.abs(date1.diff(date2, 'day'));
  return Math.round(duration);
}

const findNextRateChange = (r: RateItem[], startDate: number, endDate: number): RateItem | null => {
  // eslint-disable-next-line no-restricted-syntax
  for (const rate of r) {
    if (rate.timestamp > startDate && rate.timestamp < endDate) {
      return rate;
    }
  }
  return null;
};

const getYearDays = (date: Dayjs): 365 | 366 => (date.year() % 4 === 0 ? 366 : 365);

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
      const nextYearChange = currentDate.year() !== endDate.year() ? dayjs(`${endDate.year()}-01-01`, 'YYYY-MM-DD') : null;

      if (nextRateChange || nextYearChange) {
        const rateChangeDate = nextRateChange
          ? dayjs.unix(nextRateChange.timestamp)
          : nextYearChange;
        const rate = nextRateChange ? nextRateChange.rate : extendedList[i].rate;
        const duration = calculateDuration(rateChangeDate, extendedList[i].endDate);
        const newItem: MergedListItem = {
          ...extendedList[i],
          startDate: rateChangeDate,
          endDate: extendedList[i].endDate,
          penny: calculatePenalty(extendedList[i].amount, rate, duration),
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
    mergedList[i].rate = findRateForDate(rates, mergedList[i].date);

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
    extendedList[i].duration = nextDate
      ? calculateDuration(currentDate, nextDate)
      : calculateDuration(currentDate, endDate);
    extendedList[i].formula = `${extendedList[i].amount} x ${extendedList[i].duration} x ${extendedList[i].rate.toFixed(2)} / ${getYearDays(currentDate)}`;
    extendedList[i].penny = extendedList[i].duration
      ? calculatePenalty(extendedList[i].amount, extendedList[i].rate, extendedList[i].duration)
      : null;
  }

  processRateChanges(extendedList, rates);

  return extendedList;
}
