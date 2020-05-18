import React from 'react';
import { View, StyleSheet } from 'react-native';
import Column from './components/Column';

export default () => {
  return (
    <View style={styles.container} testID='board'>
      {boardData.map((board) => {
        return (<Column key={board.columnName} columnName={board.columnName} items={board.data} />);
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '70%', 
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap'
  }
})

const boardData = [{
  columnName: 'B',
  data: ['red', 'No', 'Yes', 'Yes', 'Column1']
}, {
  columnName: 'I',
  data: ['green', 'No', 'Yes', 'Yes', 'No']
}, {
  columnName: 'N',
  data: ['blue', 'No', 'Free', 'Yes', 'Middle Column']
}, {
  columnName: 'G',
  data: ['yellow', 'No', 'Yes', 'Yes', 'No']
}, {
  columnName: 'O',
  data: ['pink', 'No', 'Yes', 'Yes', 'Column 5']
}]