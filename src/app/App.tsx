import React from 'react';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
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
    </Router>
  );
}

export default App;
