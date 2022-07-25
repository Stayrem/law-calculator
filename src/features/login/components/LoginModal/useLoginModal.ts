import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ILoginForm {
  login: string;
  password: string;
}

export const useLoginModal = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const { control, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = handleSubmit((params) => console.log(params));

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
