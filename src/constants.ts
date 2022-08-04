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

export const calcQuestions = {
  calc395: [
    {
      title: 'Что можно рассчитать при помощи данного калькулятора?',
      description: 'Если между вами и иным лицом существует (существовало) какое-либо обязательство и это лицо удерживает у себя денежные средства, не возвращает их или допустило иную просрочку, то вы имеете право требовать уплаты процентов. При помощи данного калькулятора рассчитываются проценты на основании статьи 395 ГК РФ, то есть когда другой порядок не установлен ни законом (например, иной установлен законодательством о защите прав потребителей, трудовым кодексом и в ряде иных случаев), ни договором (обычно речь идёт о неустойке). исключение ',
    },
    {
      title: 'Сумму долга нужно указывать с НДС или без НДС?',
      description: 'Сперва простой ответ - сумму нужно указывать с НДС. Теперь обоснование для тех, кому оно необходимо. В судебной практике не сразу сформировался единообразный подход. В пункте 10 информационного письма Президиума ВАС РФ от 10.12.1996 N 9 “Обзор судебной практики применения законодательства о налоге на добавленную стоимость” было указано, что санкции и проценты, предусмотренные договором либо законом за просрочку оплаты товаров (работ, услуг), подлежат начислению на цену товара без учета налога на добавленную стоимость. Впоследствии данный пункт из обзора был исключён, однако по-прежнему применялся судами. Точку в споре поставил тот же Президиум ВАС РФ, который в постановлении от 22.09.2009 N 5451/09 указал, что проценты за пользование чужими денежными средствами по ст. 395 ГК РФ начисляются на всю сумму задолженности включая НДС. Данная правовая позиция применяется и в настоящее время.',
    },
    {
      title: 'С какого момента начинать расчёт процентов по 395 ГК РФ?',
      description: 'lorem ipsum',
    }, {
      title: 'Можно ли одновременно начислять проценты по 395 ГК РФ и неустойку?',
      description: 'lorem ipsum',
    },
  ],
};

export const dateFormat = 'DD.MM.YYYY';

export enum LoadingStatus {
  NONE = 'NONE',
  LOADING = 'LOADING',
  FINISHED = 'Finished',
  ERROR = 'ERROR',
}
