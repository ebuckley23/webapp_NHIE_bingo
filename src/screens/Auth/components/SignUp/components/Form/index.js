import React from 'react';
import { KeyboardAvoidingView } from 'react-native'
import { Button } from 'react-native-paper';
import FormField from '../../../../../../components/FormField';

export default ({values, touched, errors, handleChange, handleBlur, handleSubmit}) => {
  const valid_first_name = !!(errors.first_name && touched.first_name);
  const valid_last_name = !!(errors.last_name && touched.last_name);
  const valid_email = !!(errors.email && touched.email);
  const valid_password = !!(errors.password && touched.password);
  const valid_confirm_password = !!(errors.confirm_password && touched.confirm_password);

  return (
    <KeyboardAvoidingView>
      <FormField
        testId='signup_firstName'
        label='First name'
        isError={!!valid_first_name}
        value={values.first_name}
        onChangeText={handleChange('first_name')}
        onBlur={handleBlur('first_name')}
        errorMsg={errors.first_name}
      />
      <FormField
        testId='signup_lastName'
        label='Last name'
        isError={valid_last_name}
        value={values.last_name}
        onChangeText={handleChange('last_name')}
        onBlur={handleBlur('last_name')}
        errorMsg={errors.last_name}
      />
      <FormField
        testId='signup_email'
        label='Email'
        isError={valid_email}
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        errorMsg={errors.email}
      />
      <FormField
        testId='signup_password'
        label='Password'
        isError={!!valid_password}
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        errorMsg={errors.password}
      />
      <FormField
        testId='signup_confirmPassword'
        label='Confirm Password'
        isError={!!valid_confirm_password}
        value={values.confirm_password}
        onChangeText={handleChange('confirm_password')}
        onBlur={handleBlur('confirm_password')}
        errorMsg={errors.confirm_password}
      />
      <Button onPress={handleSubmit}>Sign Up</Button>
    </KeyboardAvoidingView>
  )
}