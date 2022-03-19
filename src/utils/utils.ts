/* eslint-disable import/prefer-default-export */
<<<<<<< HEAD
import dayjs from 'dayjs';

=======
>>>>>>> origin/development
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
<<<<<<< HEAD

export const disabledDate = (current) => current && current > dayjs(new Date());
=======
>>>>>>> origin/development
