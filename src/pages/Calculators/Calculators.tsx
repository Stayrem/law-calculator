import React from 'react';
import {
  Breadcrumb, Typography, Collapse, Row, Col,
} from 'antd';
import { useParams, Link } from 'react-router-dom';
import { calcConfigs, calcQuestions } from '../../constants';
import CalculatorsList from '../../features/calculators/components/CalculatorsList/CalculatorsList';
import pathDict from '../../app/pathDict';
import css from './Calculators.scss';

const { Title } = Typography;
const { Panel } = Collapse;
type calcIdType = 'calc395' | 'calc317' | 'calcPenaltyKeyRate' | 'calcDoublePenaltyKeyRate' | 'calcPenaltyByContract';

const Calculators = () => {
  const params = useParams<{ calcId?: calcIdType}>();
  const { calcId } = params;
  const Component = calcId ? calcConfigs[calcId].component : CalculatorsList;
  const title = calcId ? calcConfigs[calcId].title : 'Юридические калькуляторы';
  const accordionList = calcQuestions[calcId] ? calcQuestions[calcId] : [];
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
    <>
      <Row>
        <Col span={24}>
          <div>
            {renderBredCrumbs()}
            <Title level={2}>{title}</Title>
          </div>
        </Col>
      </Row>
      <Row className={css.calcWrapper}>
        <Col span={24} xl={12}>
          <Component />
        </Col>
        <Col span={24} lg={12}>
          {accordionList.length > 0 && (
          <div className={css.questionsWrapper}>
            <Collapse key={1} accordion>
              {accordionList.map((it) => (
                <Panel header={it.title} key={it.title}>
                  <p>{it.description}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Calculators;
