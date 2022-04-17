import {
  Button, DatePicker, Form, InputNumber, Select, Switch, Space, Input,
} from 'antd';
import dayjs, { isDayjs } from 'dayjs';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import React from 'react';
import css from '../../../../common/css/style.scss';
import useCalcPercentByContract from './useCalcPercentByContract';
import ImportFromTableModal from '../../../../components/ImportFromTableModal/ImportFromTableModal';
import { disabledDate } from '../../../../utils/utils';
import { dateFormat } from '../../../../constants';

const { Option } = Select;

interface IDatePicker {
  disabledDate: Function,
  defaultValue?: any,
  format: string
}

const datePickerProps: IDatePicker = {
  disabledDate,
  format: dateFormat,
};

const selectAfter = (
  <Select defaultValue="day" className="select-before">
    <Option value="day">в день</Option>
    <Option value="month">в месяц</Option>
  </Select>
);

const CalcPercentByContract = (props: ReturnType<typeof useCalcPercentByContract>) => {
  const {
    values: {
      formList,
    },
  } = props;
  const [form] = Form.useForm();
  return (
    <Form form={form} layout="vertical" requiredMark={false} onFinish={(data) => console.log(data)}>
      <div className={css.calcFormRow}>
        <Form.Item label="Обычный отчет">
          <Switch checked />
        </Form.Item>
        <Form.Item label="Бухгалтерский отчет">
          <Switch />
        </Form.Item>
      </div>
      <div className={css.calcFormRow}>
        <Form.Item name="sum" label="Сумма задолженности" rules={[{ required: true }]}>
          <InputNumber prefix="₽" style={{ width: '150px' }} placeholder="1000000" />
        </Form.Item>
        <Form.Item name="percent" label="Процент" rules={[{ required: true }]}>
          <InputNumber prefix="%" style={{ width: '200px' }} addonAfter={selectAfter} placeholder="10" />
        </Form.Item>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '24px',
        }}
        >
          <span> но не более</span>
        </div>
        <Form.Item name="maxPercent" label="&nbsp;" rules={[{ required: true }]}>
          <InputNumber prefix="%" placeholder="100" />
        </Form.Item>
      </div>
      <span className={css.customLabel}>
        Дебет/Кредит
        <ImportFromTableModal onSuccess={(importData) => {
          const currentParlyPayments = form.getFieldsValue().partlyPayments;
          const currentAdditionalLoans = form.getFieldsValue().additionalLoans;
        }}
        />
      </span>
      <div className={css.calcFormRow}>
        {formList.map((it) => (
          <Form.List name={it.name}>
            {(fields, { add, remove }) => (
              <div className={css.calcFormCol}>
                {fields.map(({ key, name, ...restField }, i) => (
                  <Space key={key}>
                    <Form.Item
                      {...restField}
                      label={i === 0 ? 'Дата' : ' '}
                      name={[name, 'date']}
                      rules={[{ required: true, message: 'Добавьте дату' }]}
                    >
                      {/* @ts-ignore */}
                      <DatePicker {...datePickerProps} className={css.datePicker} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      label={i === 0 ? 'Сумма' : ' '}
                      name={[name, 'value']}
                      rules={[{ required: true, message: 'Добавьте сумму' }]}
                    >
                      <InputNumber prefix="₽" className={css.sumInput} />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <div className={css.calcFormRow}>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      {it.addBtnText}
                    </Button>
                  </div>
                </Form.Item>
              </div>
            )}
          </Form.List>
        ))}

      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" shape="round" size="large">
          Расчитать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => {
  const behavior = useCalcPercentByContract();
  return CalcPercentByContract(behavior);
};
