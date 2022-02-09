/* eslint-disable no-restricted-globals */
import dayjs from 'dayjs';
import { dateFormat } from '../../constants';
// type strArrItem = Array<string, string>
const validateArr = (arr) => {
  try {
    return arr.every((it) => dayjs(it[0], dateFormat)
      .isValid() && !isNaN(parseFloat(it[1])) && isFinite(it[1]));
  } catch (err) {
    return false;
  }
};

export const parseTableData = (str: string) => {
  const strNormalizedSpaces = str.replace(/[\t\r]/g, ' ');
  const strArr = strNormalizedSpaces
    .split('\n')
    .map((it) => it
      .split(' '));
  const isValid = validateArr(strArr);
  if (isValid) {
    return strArr.map((it) => (
      { date: dayjs(it[0], dateFormat), value: it[1] }
    ));
  }
  throw new Error('invalid payments data');
};

export const parseDebitCredit = (str: string) => {
  const strNormalizedSpaces = str.replace(/[\t\r]/g, ' ');
  const strArr = strNormalizedSpaces
    .split('\n')
    .map((it) => it
      .split(' '));
};
