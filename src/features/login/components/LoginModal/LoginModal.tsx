import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Button, Input, Modal, Divider, Tabs, Typography,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useLoginModal } from './useLoginModal';
import loginImage from './img/justice.svg';
import vk from './img/vk.svg';
import css from './LoginModal.scss';
import Label from '../../../../components/Label/Label';
import { validationDict } from '../../constants';

const { Text } = Typography;
const LoginForm = (props: ReturnType<typeof useLoginModal>) => {
  const {
    values: { control },
    operations: { onSubmit },
  } = props;
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <Controller
        name="login"
        control={control}
        render={({ field: { onChange } }) => (
          <Label label="Логин">
            <Input size="large" onChange={onChange} prefix={<UserOutlined />} placeholder="example@email.ru" />
          </Label>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange } }) => (
          <Label label="Пароль">
            <Input.Password size="large" onChange={onChange} placeholder="example@email.ru" />
          </Label>
        )}
      />
      <Button onSubmit={onSubmit} className={css.submitBtn} size="large" type="primary">Войти</Button>
      <Divider>или</Divider>
      <div className={css.socialsWrapper}>
        <img src={vk} alt="vk" />
      </div>
    </form>
  );
};

const RegisterForm = (props: ReturnType<typeof useLoginModal>) => {
  const {
    values: { control, errors, password },
    operations: { onSubmit, trigger },
  } = props;
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <Controller
        name="login"
        rules={{
          required: true,
          pattern: validationDict.email,
        }}
        control={control}
        render={({ field: { onChange } }) => (
          <Label label="Почта">
            <Input
              status={errors?.login ? 'error' : ''}
              size="large"
              onChange={onChange}
              prefix={<UserOutlined />}
              placeholder="example@email.ru"
              onBlur={() => trigger('login')}
            />
          </Label>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          pattern: validationDict.password,
        }}
        render={({ field: { onChange } }) => (
          <Label label="Пароль">
            <Text>Минимум 8 символов, 1 цифра и 1 буква</Text>
            <Input.Password
              status={errors?.password ? 'error' : ''}
              autoComplete="new-password"
              size="large"
              onChange={onChange}
              onBlur={() => trigger('password')}
            />
          </Label>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: true,
          validate: (val) => val === password,
        }}
        render={({ field: { onChange } }) => (
          <Label label="Повтор пароля">
            <Input.Password
              status={errors?.confirmPassword ? 'error' : ''}
              autoComplete="new-password"
              size="large"
              onChange={onChange}
              onBlur={() => trigger('confirmPassword')}
            />
          </Label>
        )}
      />
      <Button onSubmit={onSubmit} className={css.submitBtn} size="large" type="primary">Зарегестрироваться</Button>
    </form>
  );
};

const LoginModalView = (props: ReturnType<typeof useLoginModal>) => {
  const {
    values: { isModalVisible, control },
    operations: { closeModalHandler, openModalHandler, onSubmit },
  } = props;
  const items = [
    {
      key: '1',
      label: 'Вход',
      children: <LoginForm {...props} />,
    },
    {
      key: '2',
      label: 'Регистрация',
      children: <RegisterForm {...props} />,
    },
  ];
  return (
    <>
      <Button className={css.loginBtn} type="link" onClick={openModalHandler}>Войти</Button>
      <Modal
        title="Добро пожаловать"
        centered
        open={isModalVisible}
        width={1000}
        footer={null}
        onCancel={closeModalHandler}
      >
        <div className={css.wrapper}>
          <Tabs defaultActiveKey="1" items={items} />
          <img width={500} src={loginImage} alt="регистрация" />
        </div>
      </Modal>
    </>
  );
};

export default () => {
  const behavior = useLoginModal();
  return <LoginModalView {...behavior} />;
};
