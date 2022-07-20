import * as React from 'react';
import AppPaths from './pathDict';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import Calculators from '../pages/Calculators/Calculators';

const routes: Array<{
  path: string;
  component: React.FunctionComponent;
  state?: string;
}> = [
  {
    path: AppPaths.root.pathname,
    component: Main,
  },
  {
    path: AppPaths.about.pathname,
    component: About,
  },
  {
    path: `${AppPaths.calculators.pathname}`,
    component: Calculators,
  },
  {
    path: `${AppPaths.calculators.pathname}/:calcId`,
    component: Calculators,
  },
];

export default routes;
