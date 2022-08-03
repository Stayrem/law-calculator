import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Breadcrumb, Typography, Col, Row, Button,
} from 'antd';
import home from './img/home.svg';
import home2 from './img/home2.svg';
import target from './img/target.png';
import checked from './img/checked.png';
import document from './img/document.png';
import shield from './img/shield.png';
import css from './Main.scss';
import pathDict from '../../app/pathDict';

const {
  Title, Paragraph, Text,
} = Typography;

const advantagesList = [
  {
    imagePath: target,
    title: 'Точность расчётов',
    text: 'Программный расчёт исключает ошибки, связанные с человеческим фактором',
  }, {
    imagePath: document,
    title: 'Документ готов для суда',
    text: 'Вам останется только указать реквизиты сторон и судебного дела',
  }, {
    imagePath: shield,
    title: 'Сохранение данных расчёта',
    text: 'Вы сможете вернуться к расчёту в любое время или пересчитать неустойку после претензии для подготовки иска',
  }, {
    imagePath: checked,
    title: 'Актуальность данных',
    text: 'Данные о ставце ЦБ РФ и иные, которые важны для расчёта регулярно обновляются и всегда будут актуальны',
  },
];

const Main = () => {
  const navigate = useNavigate();
  const calcsNavitageHandler = () => navigate(pathDict.calculators);
  return (
    <>
      <Breadcrumb style={{ padding: '16px 0' }}>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
      </Breadcrumb>
      <Row className={css.section}>
        <Col lg={12} className={css.textSubsectionLeft}>
          <Typography>
            <Title level={3}>Юридические калькуляторы</Title>
            <Paragraph>
              Проект создан практикующими юристами
              {' '}
              <br />
              {' '}
              (не без помощи программистов) для других юристов
              и всех тех, кому нужно посчитать что-то для подготовки претензии, искового заявления и
              в иных случаях
            </Paragraph>
            <div className={css.toCalcWrapper}>
              <Button onClick={calcsNavitageHandler} size="large" shape="round" type="primary">Перейти к Калькуляторам</Button>
            </div>
          </Typography>
        </Col>
        <Col className={css.sectionImageWrapper} lg={12}>
          <img className={css.sectionImage} width="400" src={home} alt="justice" />
        </Col>
      </Row>
      <Row className={`${css.section} ${css.sectionBlue}`}>
        <Col lg={12} className={css.sectionImageWrapper}>
          <img className={css.sectionImage} width="200" src={home2} alt="justice" />
        </Col>
        <Col lg={12} className={css.textSubsectionRight}>
          <Typography>
            <Paragraph className={css.textWhite}>
              Наш сервис предназначен для юристов, экспертов и обычных граждан, призван устранить
              головную боль, возникающую у юристов в сегодняшних условиях дефицита времени при
              осуществлении сложных расчётов без потери качественного результата
              и поправок на человеческий фактор.
              Программное обеспечение написано командой профессионалов, имеющих большой опыт
              разработки программного обеспечения и ведения судебных процессов.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row className={css.section}>
        {advantagesList.map((it) => (
          <Col xs={12} lg={6} className={css.advantagesItem}>
            <Text className={css.advantagesTitle}>{it.title}</Text>
            <img width="100" src={it.imagePath} alt={it.title} />
            <Text className={css.advantagesText}>{it.text}</Text>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Main;
