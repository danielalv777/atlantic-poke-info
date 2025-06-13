import { InputText } from '../../../shared/components/InputText';
import useLogin from '../hooks/useLogin';
import backImgLogin from '../../../assets/toppng.com-rayquaza-transparent-deviantart-dragao-lendario-pokemo-740x789.png';

// Constans
import { FIELD_USERNAME, FIELD_USER_PASSWORD } from '../constants/login';

import '../styles/Login.scss';
const Login = () => {
  const {
    formRef,
    errors,
    register,
    handleSubmit,
    submit,
    handleNavigateGuest,
  } = useLogin();
  return (
    <div className="main-login-container">
      <div className="container-login-data">
        <div className="card-login">
          <h3 className="title">Bienvenido a PokeInfo</h3>
          <h4 className="subtitle">
            Inicie sesión con su cuenta o como invitado
          </h4>
          <form
            ref={formRef}
            onSubmit={handleSubmit(submit)}
            className="container-form"
          >
            <InputText
              textLabel="Usuario"
              mainContainerClassname="input-container"
              placeholder="Ingrese usuario"
              customInput={register(FIELD_USERNAME)}
              error={errors[FIELD_USERNAME]?.message}
            />
            <InputText
              textLabel="Contraseña"
              mainContainerClassname="input-container"
              type="password"
              placeholder="Ingrese contraseña"
              customInput={register(FIELD_USER_PASSWORD)}
              error={errors[FIELD_USER_PASSWORD]?.message}
            />
            <button type="submit" className="btn-login">
              Ingresar
            </button>
            <div className="container-guest">
              <span
                className="span-guest"
                onClick={() => handleNavigateGuest()}
              >
                Ingresar como Invitado
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="container-login-img">
        <img src={backImgLogin} alt="backImgLogin" className="back-img" />
      </div>
    </div>
  );
};

export { Login };
