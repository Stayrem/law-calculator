import React, { useState } from 'react';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { calcConfigs, calculatorsDict } from '../../constants';
import CalcPercentByContract from '../../features/calculators/components/CalcPercentByContract/CalcPercentByContract';

type Keys = keyof typeof calculatorsDict;
type Values = typeof calculatorsDict[Keys];
interface ICalcState {
  title: string,
}

const { Title } = Typography;
const calc = {
  [calculatorsDict.percentsByContract]: CalcPercentByContract,
};

const Calculators = () => {
  const params = useParams<{ calcId: Values}>();
  const { calcId } = params;
  const Component = calc[calcId];
  return (
    <div>
      <Title>{calcConfigs[calcId].title}</Title>
      <Component />
    </div>
  );
};

export default Calculators;
