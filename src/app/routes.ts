import * as React from 'react';
import AppPaths from './pathDict';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';

const routes: Array<{
  path: string;
  component: React.FunctionComponent;
}> = [
  {
    path: AppPaths.root,
    component: Main,
  },
  {
    path: AppPaths.about,
    component: About,
  },
];

export default routes;
