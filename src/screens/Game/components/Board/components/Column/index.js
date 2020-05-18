import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';
import Tile from '../Tile';

export default ({columnName, items}) => {
  return (
    <View style={styles.container}>
      <Headline style={styles.header}>{columnName}</Headline>
      {items.map(x => {
        return (
          <Tile value={x} />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: '1 1 20%',
    flexGrow: 1
  },
  header: {
    textAlign: 'center'
  }
})