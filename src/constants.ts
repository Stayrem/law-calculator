// eslint-disable-next-line no-shadow
export const calculatorsDict = {
  percentsByContract: 'percentsByContract',
};

export const calcConfigs = {
  [calculatorsDict.percentsByContract]: {
    title: 'Калькулятор расчёта процентов (неустойки) по договору',
  },
};

export const dateFormat = 'DD.MM.YYYY';

export enum LoadingStatus {
  NONE = 'NONE',
  LOADING = 'LOADING',
  FINISHED = 'Finished',
  ERROR = 'ERROR',
}
