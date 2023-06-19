/* eslint-disable import/prefer-default-export */
import dayjs, { Dayjs } from 'dayjs';

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
  const duration = Math.abs(date1.diff(date2, 'day'));
  return Math.round(duration);
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
    const dailyPercent = props.interestRate / daysInYear; // Процент в день
    let totalAmount = props.amount; // Изначальная сумма
    for (let i = 0; i < props.days; i += 1) {
      totalAmount += (totalAmount * dailyPercent) / 100; // Начисление процента
    }
    return totalAmount - props.amount;
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
