/* eslint-disable import/prefer-default-export */
import dayjs, { Dayjs } from 'dayjs';
import { RateItem } from '../features/calculators/types';

const toCamel = (s) => s.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase()
  .replace('-', '')
  .replace('_', ''));

const isArray = (a) => Array.isArray(a);

const isObject = (o) => o === Object(o) && !isArray(o) && typeof o !== 'function';

export const keysToCamel = (o) => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(o[k]);
      });

    return n;
  } if (isArray(o)) {
    return o.map((i) => keysToCamel(i));
  }

  return o;
};

export const disabledDate = (current) => current && current > dayjs(new Date());

export const calculateDuration = (date1: dayjs.Dayjs, date2: dayjs.Dayjs): number => {
  const date1Round = date1.set('hours', 0).set('minutes', 0).set('seconds', 0).set('milliseconds', 0);
  const date2Round = date2.set('hours', 0).set('minutes', 0).set('seconds', 0).set('milliseconds', 0);
  return date2Round.diff(date1Round, 'day');
};

export const getYearDays = (date: Dayjs): 365 | 366 => (date.year() % 4 === 0 ? 366 : 365);

type InterestPeriod = 'day' | 'month' | 'year';

interface ICalcPenalty {
  amount: number;
  days: number;
  interestRate: number;
  interestPeriod: InterestPeriod;
  daysInYear?: 365 | 366;
}
export const calculatePenalty = (props: ICalcPenalty) => {
  const { daysInYear = 365 } = props;
  if (props.interestPeriod === 'year') {
    return +(props.amount * props.days * ((props.interestRate / 100) / daysInYear)).toFixed(2);
  }
  if (props.interestPeriod === 'day') {
    let totalAmount = props.amount;
    for (let i = 0; i < props.days; i += 1) {
      totalAmount += (totalAmount * props.interestRate) / 100;
    }
    return totalAmount - props.amount;
  }
  return 0;
};

export function findRateForDate(rates: RateItem[], date: Dayjs): number {
  const ratesReversed = rates.slice().reverse();
  let res = null;
  for (let i = 0; i < ratesReversed.length; i += 1) {
    const next = ratesReversed[i + 1];
    const targetTimeStamp = date.set('hours', 0).set('minutes', 0).set('seconds', 0).set('milliseconds', 0)
      .unix();
    if (next && ratesReversed[i].timestamp <= targetTimeStamp && next.timestamp > targetTimeStamp) {
      res = ratesReversed[i].rate;
      break;
    }
    if (!next) {
      res = ratesReversed[i].rate;
      break;
    }
  }
  return res;
}
