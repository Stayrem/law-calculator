import { intervalToDuration } from 'date-fns';
import dayjs from 'dayjs';
import {
  ICalcPenaltyByContract,
} from '../../features/calculators/components/CalculatorsForms/CalcPenaltyBy395Table/CalcPenaltyByContractTable';
import { dateFormat } from '../../constants';

const DAY = 86400000;

export const calculatePenalty = (props: ICalcPenaltyByContract) => {
  const debtList = props.debtList.slice().map((it) => (
    { ...it, date: dayjs.unix(it.date) }));
  const paymentsList = props.paymentsList ? props.paymentsList.slice().map((it) => (
    { ...it, sum: it.sum * -1, date: dayjs.unix(it.date) })) : [];

  const debtCreditList = [...debtList, ...paymentsList]
    .sort((a, b) => a.date.unix() - b.date.unix());
  let debt = 0;
  const result = debtCreditList.reduce((acc, curr, i, arr) => {
    if (i === 0) {
      debt = curr.sum;
      return [
        {
          sum: curr.sum,
          startDate: curr.date.format(dateFormat),
          endDate: arr[i + 1].date.add(-1, 'day').format(dateFormat),
        },
      ];
    }
    debt += curr.sum;
    if (curr.sum > 0) {
      return [
        ...acc,
        { sum: `+${curr.sum}`, startDate: curr.date.format(dateFormat), endDate: 'Дополнительная задолженность' },
        {
          sum: debt,
          startDate: curr.date.format(dateFormat),
          endDate: arr[i + 1]
            ? arr[i + 1].date.format(dateFormat)
            : dayjs.unix(props.endDate).format(dateFormat),
        },
      ];
    }

    return [
      ...acc,
      { sum: curr.sum, startDate: curr.date.format(dateFormat), endDate: 'Погашение задолженности' },
      {
        sum: debt,
        startDate: curr.date.add(1, 'day').format(dateFormat),
        endDate: arr[i + 1]
          ? arr[i + 1].date.format(dateFormat)
          : dayjs.unix(props.endDate).format(dateFormat),
      },
    ];
  }, []);
  console.log(result);
};
window.calculatePenalty = calculatePenalty;
window.props = {
  interestRate: {
    1669852800: 6, // 1.12.2022
    1669939200: 6.5, // 2.12.2022
    1670025600: 6.5, // 3.12.2022
    1670112000: 7, // 4.12.2022
    1670198400: 7, // 5.12.2022
    1670284800: 8, // 6.12.2022
    1670371200: 8, // 7.12.2022
    1670457600: 8, // 8.12.2022
    1670544000: 8, // 9.12.2022
    1670630400: 9, // 10.12.2022
    1670716800: 9, // 11.12.2022
    1670803200: 9, // 12.12.2022
    1670889600: 9, // 13.12.2022
    1670976000: 10, // 14.12.2022
    1671062400: 10, // 15.12.2022
    1671148800: 10, // 16.12.2022
  },
  endDate: 1671202376, // 16.12.2022
  debtList: [
    { date: 1669852800, id: 0, sum: 1000 },
    // 1.12.2022
    { date: 1670025600, id: 1, sum: 500 },
    // 3.12.2022
    { date: 1671062400, id: 1, sum: 500 },
    // 15.12.2022
  ],
  paymentsList: [
    { date: 1670198400, id: 0, sum: 100 },
    // 5.12.2022
    { date: 1670630400, id: 1, sum: 200 },
    // 10.12.2022
  ],
};

calculatePenalty(window.props);
