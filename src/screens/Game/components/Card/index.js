import React from 'react';
import { View, Text } from 'react-native';

export default ({}) => {
  return (
    <View style={{flexBasis: '25%'}}>
      {users.map(x => <Text>{x}</Text>)}
    </View>
  )
}

const users = ['Emmanuel Buckley', 'Cortez Ashley']