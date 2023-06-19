import { Dayjs } from 'dayjs';

export type CalcTypes = 'CalcBy395' | 'CalcBy317' | 'CalcPenaltyKeyRate' | 'CalcDoublePenaltyKeyRate' | 'CalcPenaltyByContract';

export interface ListItem {
  date: Dayjs | null;
  sum: number;
}

export interface RateItem {
  rate: number;
  timestamp: number;
}

export type KeyRatesLabel =
  'на день наступления обязательств'
  | 'на день фактической оплаты'
  | 'по периодам действия ставки'
  | 'на день подачи иска в суд';

export type KeyRateValue = 'byPeriodsOfValidityOfTheRate' | 'onDateOfObligation' | 'onTheDateOfActualPayment'
  | 'onTheDateOfFilingTheClaim';
