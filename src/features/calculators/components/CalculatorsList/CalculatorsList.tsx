import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { calcConfigs } from '../../../../constants';
import pathDict from '../../../../app/pathDict';

import css from './CalculatorsList.scss';

const CalculatorsList = () => {
  const calculatorsList = Object.entries(calcConfigs);
  return (
    <div>

      {calculatorsList.map((it) => (
        <Link className={css.cardLink} to={pathDict.getCalculatorById(it[0]).pathname}>
          <Card title={it[1].title} bordered>
            {it[1].description}
          </Card>
        </Link>

      ))}
    </div>
  );
};

export default CalculatorsList;
