import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Breadcrumb, Typography, Collapse, Row, Col, Skeleton,
} from 'antd';
import { useParams, Link } from 'react-router-dom';
import { calcConfigs, calcQuestions } from '../../constants';
import CalculatorsList from '../../features/calculators/components/CalculatorsList/CalculatorsList';
import pathDict from '../../app/pathDict';
import css from './Calculators.scss';
import { getRates } from '../../features/calculators/calculatorsSlice';
import { RootStore } from '../../store/rootReducer';
import { LoadingStatus } from '../../app/enums';

const { Title } = Typography;
const { Panel } = Collapse;
type calcIdType = 'calc395' | 'calc317' | 'calcPenaltyKeyRate' | 'calcDoublePenaltyKeyRate' | 'calcPenaltyByContract';

const Calculators = () => {
  const dispatch = useDispatch();
  const rates = useSelector((store: RootStore) => store.default.calculators.rates);
  const params = useParams<{ calcId?: calcIdType}>();
  const { calcId } = params;
  const Component = calcId ? calcConfigs[calcId].component : CalculatorsList;
  const title = calcId ? calcConfigs[calcId].title : 'Юридические калькуляторы';
  const accordionList = calcQuestions[calcId] ? calcQuestions[calcId] : [];
  const calcType = calcId ? calcConfigs[calcId].type : null;
  useEffect(() => {
    dispatch(getRates());
  }, []);

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
      {rates.status === LoadingStatus.PENDING && (
      <Skeleton />
      )}
      {rates.status === LoadingStatus.FULFILLED && (
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
          <Component calcType={calcType} />
          {accordionList.length > 0 && (
            <Col lg={24} xl={12}>
              <div className={css.questionsWrapper}>
                <Collapse key={1} accordion>
                  {accordionList.map((it) => (
                    <Panel header={it.title} key={it.title}>
                      <p>{it.description}</p>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </Col>
          )}
        </Row>
      </>
      )}
    </>
  );
};

export default Calculators;
