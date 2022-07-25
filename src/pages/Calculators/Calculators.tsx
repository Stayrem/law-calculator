import React from 'react';
import { Breadcrumb, Typography } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { calcConfigs } from '../../constants';
import CalculatorsList from '../../features/calculators/components/CalculatorsList/CalculatorsList';
import pathDict from '../../app/pathDict';

const { Title } = Typography;
type calcIdType = 'calc395' | 'calc317' | 'calcPenaltyKeyRate' | 'calcDoublePenaltyKeyRate' | 'calcPenaltyByContract';

const Calculators = () => {
  const params = useParams<{ calcId?: calcIdType}>();
  const { calcId } = params;
  const Component = calcId ? calcConfigs[calcId].component : CalculatorsList;
  const title = calcId ? calcConfigs[calcId].title : 'Юридические калькуляторы';
  const renderBredCrumbs = () => (calcId
    ? (
      <Breadcrumb style={{ padding: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to={pathDict.calculators.pathname}>
            Калькуляторы
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{calcConfigs[calcId].title}</Breadcrumb.Item>
      </Breadcrumb>
    )
    : (
      <Breadcrumb style={{ padding: '16px 0' }}>
        <Breadcrumb.Item>Калькуляторы</Breadcrumb.Item>
      </Breadcrumb>
    ));
  return (
    <div>
      {renderBredCrumbs()}
      <Title level={2}>{title}</Title>
      <Component />
    </div>
  );
};

export default Calculators;
