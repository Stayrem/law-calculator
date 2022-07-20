// eslint-disable-next-line no-shadow

import CalcBy395 from './features/calculators/components/CalculatorsForms/CalcBy395/CalcBy395';
import CalcBy317 from './features/calculators/components/CalculatorsForms/CalcBy317/CalcBy317';
import CalcPenaltyKeyRate
  from './features/calculators/components/CalculatorsForms/CalcPenaltyKeyRate/CalcPenaltyKeyRate';
import CalcDoublePenaltyKeyRate
  from './features/calculators/components/CalculatorsForms/CalcDoublePenaltyKeyRate/CalcDoublePenaltyKeyRate';
import CalcPenaltyByContract
  from './features/calculators/components/CalculatorsForms/CalcPenaltyByContract/CalcPenaltyByContract';

export const calcConfigs = {
  calc395: {
    title: 'Расчёт процентов по ст. 395 ГК РФ',
    component: CalcBy395,
  },
  calc317: {
    title: 'Расчёт процентов задолженности по ст. 317.1 ГК РФ',
    component: CalcBy317,
  },
  calcPenaltyKeyRate: {
    title: 'Расчёт неустойки по 1/300, 1/150 или 1/130 от ключевой ставки ЦБ РФ',
    component: CalcPenaltyKeyRate,
  },
  calcDoublePenaltyKeyRate: {
    title: 'Расчёта неустойки по двойной ключевой ставке ЦБ РФ',
    component: CalcDoublePenaltyKeyRate,
  },
  calcPenaltyByContract: {
    title: 'Расчёта неустойки по договору',
    component: CalcPenaltyByContract,
  },
};

export const dateFormat = 'DD.MM.YYYY';

export enum LoadingStatus {
  NONE = 'NONE',
  LOADING = 'LOADING',
  FINISHED = 'Finished',
  ERROR = 'ERROR',
}
