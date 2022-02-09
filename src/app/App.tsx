import React from 'react';
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
    </Router>
  );
}

export default App;
