import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Button, TextInput } from 'react-native-paper';
import Screen from '../../components/Screen';
import FadeInView from '../../components/Animations/FadeInView';
import NewGameOptions from './components/NewGameOptions';

export default ({route, navigation}) => {
  const [session, setSession] = React.useState();
  const [isNewGame, setIsNewGame] = React.useState(false);

  const onOkay = () => {
    // get generated game session

    // navigate to game screen
    navigation.navigate('Game', {
      s_id: 'abc123'
    })
  }

  const onCancel = () => {
    setIsNewGame(false);
  }
  return (
    <Screen>
      <Surface style={{width: '50%', padding: 10}}>
        <Button
          onPress={() => setIsNewGame(true)}
          style={styles.newGame}>
          New Game
        </Button>
        <View style={styles.join}>
          <TextInput
            style={styles.joinInput}
            placeholder='Enter Game Session'
            mode='outlined'
            dense
            onChangeText={setSession}
          />
          {(!!session && !isNewGame) && (
            <FadeInView>
              <Button mode='contained'>Join</Button>
            </FadeInView>
          )}
        </View>
      </Surface>
      <NewGameOptions
        onOkay={onOkay}
        onCancel={onCancel}
        isVisible={isNewGame} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  newGame: {
    elevation: 4,
    width: '100%'
  },
  join: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  joinInput: {
    flexBasis: '80%'
  }
})