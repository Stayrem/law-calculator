import React from 'react';
<<<<<<< HEAD
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
=======
>>>>>>> origin/development
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import WithPageContent from '../hocs/WithPageContent/WithPageContent';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import routes from './routes';
import css from './App.scss';

<<<<<<< HEAD
dayjs.locale('ru');

function App() {
  return (
    <Router>
      <ConfigProvider locale={locale}>
        <div className={css.content}>
          <Header />
          <Routes>
            {routes.map((route) => {
              const { path, component } = route;
              const Component = component;
              return (
                <Route
                  key={path}
                  path={path}
                  element={(
                    <WithPageContent>
                      <Component />
                    </WithPageContent>
              )}
                />
              );
            })}
          </Routes>
          <Footer />
        </div>
      </ConfigProvider>
=======
function App() {
  return (
    <Router>
      <div className={css.content}>
        <Header />
        <Routes>
          {routes.map((route) => {
            const { path, component } = route;
            const Component = component;
            return (
              <Route
                key={path}
                path={path}
                element={(
                  <WithPageContent>
                    <Component />
                  </WithPageContent>
              )}
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
>>>>>>> origin/development
    </Router>
  );
}

export default App;
