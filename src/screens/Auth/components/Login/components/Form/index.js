import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import FormField from '../../../../../../components/FormField';

export default ({values, touched, errors, handleChange, handleBlur, handleSubmit}) => {
  const valid_email = !!(errors.email && touched.email);
  const valid_password = !!(errors.password && touched.password);
  return (
    <KeyboardAvoidingView>
      <FormField
        testId='login_email'
        label='Email'
        isError={valid_email}
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        errorMsg={errors.email}
      />
      <FormField
        testId='login_password'
        label='Password'
        isError={!!valid_password}
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        errorMsg={errors.password}
      />
      <Button onPress={handleSubmit}>Login</Button>
    </KeyboardAvoidingView>
  )
}
