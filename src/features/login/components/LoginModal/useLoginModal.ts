import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
  login: string;
  password: string;
}

export const useLoginModal = () => {
  const navigate = useNavigate();

  const [isModalVisible, setModalVisibility] = useState(false);
  const { control, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = handleSubmit((params) => {
    setModalVisibility(false);
    navigate('/account');
  });

  return {
    values: {
      isModalVisible,
      control,
    },
    operations: {
      setModalVisibility,
      onSubmit,
    },
  };
};
