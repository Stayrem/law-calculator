import React, { useState, useRef } from 'react';
import {
  Modal, Button, Input, Radio,
} from 'antd';
import { ImportOutlined } from '@ant-design/icons';
import debitImportExample from '../../common/img/debit-import.png';
import creditImportExample from '../../common/img/credit-import.png';
import debitCreditImportExample from '../../common/img/debet-credit-import.png';
import css from './ImportFromTableModal.scss';
import commonCss from '../../common/css/style.scss';
import { parseTableData } from './utils';
import { IFieldItem } from '../../features/calculators/components/CalcPercentByContract/useCalcPercentByContract';

const exampleImportDict = {
  debit: debitImportExample,
  credit: creditImportExample,
  debitCredit: debitCreditImportExample,
};

interface IImportFromTableModal {
  // eslint-disable-next-line no-unused-vars
  onSuccess: (payload: IFieldItem[]) => void
}

const DEFAULT_RADIO_CHECKED = 'debit';

interface IState {
  isModalVisible: boolean,
  isStrValid: boolean,
  checkedRadio: string,
}

const initialState: IState = {
  isModalVisible: false,
  isStrValid: true,
  checkedRadio: DEFAULT_RADIO_CHECKED,
};

const PLACEHOLDER = `22.05.2021 1024 
22.05.2021 1024`;

const { TextArea } = Input;
const ImportFromTableModal:React.FC<IImportFromTableModal> = (props) => {
  const textAreaRef = useRef(null);
  const { onSuccess } = props;
  const [state, setState] = useState(initialState);

  const SetModalVisibility = (isVisible: boolean) => setState((prevState) => (
    { ...prevState, isModalVisible: isVisible }
  ));

  const setStrValidation = (isValid: boolean) => setState((prevState) => (
    { ...prevState, isStrValid: isValid }
  ));

  const onRadioChange = (e) => setState((prevState) => (
    { ...prevState, checkedRadio: e.target.value }));

  const getTextAreaValue = () => textAreaRef.current.resizableTextArea.textArea.value;
  const handleOk = () => {
    try {
      const textAreaValue = getTextAreaValue();
      if (textAreaValue.length) {
        const result = parseTableData(textAreaValue);
        onSuccess(result);
      }
      SetModalVisibility(false);
    } catch (err) {
      setStrValidation(false);
    }
  };

  const handleCancel = () => {
    SetModalVisibility(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => SetModalVisibility(true)}>
        <ImportOutlined />
        Импорт
      </Button>
      <Modal
        title="Импорт из таблицы"
        visible={state.isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
      >
        <Radio.Group
          onChange={onRadioChange}
          defaultValue={DEFAULT_RADIO_CHECKED}
          className={css.radio}
        >
          <Radio.Button value="debit">Дебет</Radio.Button>
          <Radio.Button value="credit">Кредит</Radio.Button>
          <Radio.Button value="debitCredit">Дебет/Кредит</Radio.Button>
        </Radio.Group>
        <div className={css.container}>
          <TextArea
            className={state.isStrValid ? '' : commonCss.textAreaError}
            ref={textAreaRef}
            placeholder={PLACEHOLDER}
            onChange={(evt) => evt}
            style={{ width: '277px', height: '220px' }}
          />
          <div style={{ width: '300px' }}>
            <p>Скопируйте и вставьте данные из таблицы по примеру</p>
            <img src={exampleImportDict[state.checkedRadio]} className={css.exampleImage} alt="import example" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImportFromTableModal;
