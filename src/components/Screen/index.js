import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default ({children, containerStyle}) => (
  <SafeAreaView style={[styles.screen, containerStyle]}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})