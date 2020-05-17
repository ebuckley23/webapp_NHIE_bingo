import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dialog, Button, TextInput, RadioButton, Text, Caption } from 'react-native-paper';

export default ({isVisible, onOkay, onCancel}) => {
  const [playerCount, setPlayerCount] = useState(2);
  const [playerCountIsValid, setPlayerCountIsValid] = useState(false);
  const [gameMode, setGameMode] = useState('NHIE');

  const changePlayerCount = (value) => {
    if (/^\d+$/.test(value) || !value) {
      console.log('val', value);
      setPlayerCount(value);
      if (value >= 2 && value <= 25) {
        setPlayerCountIsValid(true);
      } else {
        setPlayerCountIsValid(false);
      }
    }
  }
  return (
    <Dialog visible={isVisible}>
      <Dialog.Title>New Game Options</Dialog.Title>
      <Dialog.Content>
        <PlayerCount onPress={changePlayerCount} value={playerCount} />
        <GameModeSelect value={gameMode} onPress={setGameMode} />
      </Dialog.Content>
      <Dialog.Actions>
        <Button disabled={!playerCountIsValid && !gameMode} onPress={onOkay}>Start</Button>
        <Button onPress={onCancel}>Cancel</Button>
      </Dialog.Actions>
    </Dialog>
  )
}

const PlayerCount = ({value, onPress}) => {
  return (
    <TextInput
      dense
      mode='outlined'
      onChangeText={onPress}
      value={value}
      label={'# of players (Min: 2, Max 25)'}
      keyboardType='numeric'/>
  )
}

const GameModeSelect = ({value, onPress}) => {
  return (
    <View>
      <Caption>Game Mode</Caption>
      <RadioButton.Group
        onValueChange={onPress}
        value={value}
      >
        <View style={styles.option}>
          <RadioButton value={'NHIE'} />
          <Text>Never Have I Ever</Text>
        </View>
      </RadioButton.Group>
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})