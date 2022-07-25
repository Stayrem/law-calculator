import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Button, Input, Modal, Divider,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useLoginModal } from './useLoginModal';
import loginImage from './img/justice.svg';
import vk from './img/vk.svg';
import css from './LoginModal.scss';
import Label from '../../../../components/Label/Label';

const LoginModalView = (props: ReturnType<typeof useLoginModal>) => {
  const {
    values: { isModalVisible, control },
    operations: { setModalVisibility, onSubmit },
  } = props;
  return (
    <>
      <Button className={css.loginBtn} type="link" onClick={() => setModalVisibility(true)}>Войти</Button>
      <Modal
        title="Добро пожаловать"
        centered
        visible={isModalVisible}
        width={1000}
        footer={null}
      >
        <div className={css.wrapper}>
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
