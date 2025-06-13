import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useUserStore } from '../../../app/store/useUserStore';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../validators/login.validation';
import {
  DEFAULT_VALUES,
  FIELD_USERNAME,
  FIELD_USER_PASSWORD,
} from '../constants/login';
import { CREDENCIALES_VALIDAS } from '../../../shared/constants/credentials';

export default function useLogin() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const {
    watch,
    register,
    reset,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });

  const submit = () => {
    const username = watch(FIELD_USERNAME);
    const password = watch(FIELD_USER_PASSWORD);

    const validUser = CREDENCIALES_VALIDAS.find(
      (credential) =>
        credential.user === username && credential.password === password
    );

    if (validUser) {
      // Si las credenciales son correctas, guardar los datos en localStorage
      setUser({ username, password });

      // Redirigir al Dashboard
      navigate('/dashboard');
      clearErrors();
      reset();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleNavigateGuest = () => {
    navigate('/dashboard');
  };

  return {
    formRef,
    watch,
    submit,
    register,
    handleSubmit,
    errors,
    handleNavigateGuest,
  };
}
