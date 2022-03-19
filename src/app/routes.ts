import * as React from 'react';
import AppPaths from './pathDict';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
<<<<<<< HEAD
import Calculators from '../pages/Calculators/Calculators';
import { calculatorsDict } from '../constants';
=======
>>>>>>> origin/development

const routes: Array<{
  path: string;
  component: React.FunctionComponent;
<<<<<<< HEAD
  state?: string;
=======
>>>>>>> origin/development
}> = [
  {
    path: AppPaths.root,
    component: Main,
  },
  {
    path: AppPaths.about,
    component: About,
  },
<<<<<<< HEAD
  {
    path: `${AppPaths.calculators}/:calcId`,
    component: Calculators,
    state: calculatorsDict.percentsByContract,
  },
=======
>>>>>>> origin/development
];

export default routes;
