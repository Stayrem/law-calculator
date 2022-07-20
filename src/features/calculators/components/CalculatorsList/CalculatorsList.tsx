import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { calcConfigs } from '../../../../constants';
import pathDict from '../../../../app/pathDict';

import css from './CalculatorsList.scss';

const CalculatorsList = () => {
  const calculatorsList = Object.entries(calcConfigs);
  return (
    <Row gutter={16}>
      {calculatorsList.map((it) => (
        <Col span={24} lg={12} xl={8} key={it[0]}>
          <Link className={css.cardLink} to={pathDict.getCalculatorById(it[0]).pathname}>
            <Card title={it[1].title} bordered>
              Card content
            </Card>
          </Link>
        </Col>

      ))}
    </Row>
  );
};

export default CalculatorsList;
