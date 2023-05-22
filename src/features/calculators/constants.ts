import { KeyRatesLabel, KeyRateValue } from './types';

export const KEY_RATE_SELECT: { value: KeyRateValue; label: KeyRatesLabel }[] = [
  { value: 'byPeriodsOfValidityOfTheRate', label: 'по периодам действия ставки' },
  { value: 'onDateOfObligation', label: 'на день наступления обязательств' },
  { value: 'onTheDateOfActualPayment', label: 'на день фактической оплаты' },
  { value: 'onTheDateOfFilingTheClaim', label: 'на день подачи иска в суд' },
];

export const KEY_RATE_SHARE = [
  { value: 300, label: '1/300' },
  { value: 150, label: '1/150' },
  { value: 130, label: '1/130' },
] as const;
