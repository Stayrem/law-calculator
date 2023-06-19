import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  login: string;
  password: string;
  confirmPassword?: string;
}

export const useLoginModal = () => {
  const navigate = useNavigate();

  const [isModalVisible, setModalVisibility] = useState(false);
  const { control, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = handleSubmit((params) => {
    setModalVisibility(false);
    navigate('/account');
  });

  const [isModalVisible, setModalVisibility] = useState(false);
  const {
    trigger, control, watch, handleSubmit, formState: { errors },
  } = useForm<ILoginForm>({ mode: 'onSubmit' });
  const closeModalHandler = () => setModalVisibility(false);
  const openModalHandler = () => setModalVisibility(true);
  const onSubmit = handleSubmit((params) => {
    closeModalHandler();
    navigate('/account');
  });
  const password = watch('password');
  return {
    values: {
      isModalVisible,
      control,
      errors,
      password,
    },
    operations: {
      closeModalHandler,
      openModalHandler,
      onSubmit,
      trigger,
    },
  };
};
