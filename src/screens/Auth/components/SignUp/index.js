import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from './components/Form';

const DEFAULT_STATE = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: ''
}
export default ({onSignUp}) => {
  return (
    <Formik
      initialValues={DEFAULT_STATE}
      validationSchema={validationSchema}
      onSubmit={onSignUp}
    >
      {formProps => (<SignUpForm {...formProps} />)}
    </Formik>
  )
}

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required').min(2, 'Must be at least 2 characters'),
  last_name: Yup.string().required('Last name is required').min(2, 'Must be at least 2 characters'),
  email: Yup.string().email('Must be a valid email').required(),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must have at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Invalid'
    )
    .required(),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
})