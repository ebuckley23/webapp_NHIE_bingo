import React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

export default ({testId, label, isError, value, onChangeText, onBlur, errorMsg}) => {
  return (
    <View>
      <TextInput
        testID={testId}
        error={isError}
        label={label}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        dense
        mode='outlined'
      />
      <HelperText type='error' visible={isError}>
        {errorMsg}
      </HelperText>
    </View>
  )
}