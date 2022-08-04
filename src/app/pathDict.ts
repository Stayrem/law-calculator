/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow,no-unused-vars
const pathDict = {
  root: { pathname: '/home' },
  about: { pathname: '/about' },
  calculators: { pathname: '/calculators' },
  getCalculatorById: (calcId) => ({ pathname: `/calculators/${calcId}` }),
  account: { pathname: '/account' },
} as const;

export default pathDict;
