import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LoginForm from './components/Form';

const DEFAULT_STATE = {
  email: '',
  password: ''
}

export default ({onLogin}) => {
  return (
    <Formik
      initialValues={DEFAULT_STATE}
      validationSchema={validationSchema}
      onSubmit={onLogin}
    >
      {formProps => (<LoginForm {...formProps} />)}
    </Formik>
  )
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required(),
  password: Yup.string().required()
})