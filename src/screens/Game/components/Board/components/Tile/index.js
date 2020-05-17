import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default ({value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tileText}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black', 
    borderWidth: 5, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minWidth: 180, 
    height: 180
  },
  tileText: {
    display: 'flex',
    alignItems: 'center'
  }
})