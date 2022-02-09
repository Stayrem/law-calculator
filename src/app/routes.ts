import * as React from 'react';
import AppPaths from './pathDict';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import Calculators from '../pages/Calculators/Calculators';
import { calculatorsDict } from '../constants';

const routes: Array<{
  path: string;
  component: React.FunctionComponent;
  state?: string;
}> = [
  {
    path: AppPaths.root,
    component: Main,
  },
  {
    path: AppPaths.about,
    component: About,
  },
  {
    path: `${AppPaths.calculators}/:calcId`,
    component: Calculators,
    state: calculatorsDict.percentsByContract,
  },
];

export default routes;
