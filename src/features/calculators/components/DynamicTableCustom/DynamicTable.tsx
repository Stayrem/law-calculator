import React, { useState } from 'react';
import {
  Typography, Button, Modal, Input,
} from 'antd';
import { ImportOutlined } from '@ant-design/icons';
import Label from '../../../../components/Label/Label';
import sample from '../../../../common/img/credit-import.png';
import css from './DynamicTable.scss';

const { TextArea } = Input;
const { Text } = Typography;

interface IDynamicTable {
  label: string;
  isRow?: boolean;
}

interface IModalImport {
  visible: boolean;
  title: string;
  handleCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const defaultState: { isModalVisible: boolean } = { isModalVisible: false };

const ModalImport = (props: IModalImport) => {
  const {
    visible, title, handleCancel, handleOk,
  } = props;
  return (
    <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <div>
        <div className={css.wrapper}>
          <TextArea rows={10} placeholder="1000 22.05.2022" />
          <div>
            <img width="200" className={css.sample} src={sample} alt="sample import" />
            <Text type="secondary">пример копирования</Text>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const DynamicTable = (props: IDynamicTable) => {
  const { label, isRow = false } = props;
  const [state, setState] = useState(defaultState);
  const { isModalVisible } = state;
  const setModalVisibility = (isVisible) => setState((prevState) => (
    { ...prevState, isModalVisible: isVisible }
  ));
  return (
    <>
      <Label label={label} isRow={isRow} className={css.dynamicTableLabel}>
        <Button
          className={css.importButton}
          onClick={() => setModalVisibility(true)}
          icon={<ImportOutlined />}
        />
      </Label>
      <ModalImport
        visible={isModalVisible}
        title={label}
        handleCancel={() => setModalVisibility(false)}
        handleOk={() => setModalVisibility(true)}
      />
    </>
  );
};

export default DynamicTable;
