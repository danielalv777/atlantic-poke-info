// Librarys
import * as yup from 'yup';

import { FIELD_USERNAME, FIELD_USER_PASSWORD } from '../constants/login';

const schema = yup.object().shape({
  [FIELD_USERNAME]: yup
    .string()
    .required('El nombre de usaurio es obligatorio'),
  [FIELD_USER_PASSWORD]: yup.string().required('La contraseña es obligatoria'),
});
export default schema;
