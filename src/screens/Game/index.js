import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../../components/Screen';
import Board from './components/Board';
import UserList from './components/UserList';
import Card from './components/Card';

export default ({route, navigation}) => {

  useEffect(() => {
    const sessionId = route.params?.s_id;
    if (sessionId) {
      // TODO: fetch session from sessionId
      console.log({sessionId})
    }
  }, [route.params?.s_id])
  return (
    <Screen containerStyle={styles.container}>
      <Board />
      <View style={styles.right}>
        <Card />
        <UserList />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  right: {
    flexBasis: '30%',
    display: 'flex',
    borderLeftColor: 'black',
    borderLeftWidth: 4
  }
})