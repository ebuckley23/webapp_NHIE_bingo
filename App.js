import React, { useRef, useState, useEffect } from 'react';
import { Provider as PaperProvider, Portal } from 'react-native-paper';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/Auth';
import environment from './src/config/environment';
import authentication from './src/config/authentication';
import UserProvider from './src/utils/context/providers/userContext';
import useUserContext from './src/utils/hooks/useUserContext';
import StartScreen from './src/screens/Start';
import GameScreen from './src/screens/Game';

environment();
authentication();

const RootStack = createStackNavigator();

// Enable Web: https://github.com/react-navigation/react-navigation/issues/6780
function App() {
  const navigationRef = useRef();
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const { refreshUserContext, isAuthenticated } = useUserContext();

  const { getInitialState } = useLinking(navigationRef, {
    prefixes: [],
    config: {}
  });

  useEffect(() => {
    getInitialState().then((state) => {
      if (state) setInitialState(state);
      setIsReady(true);
      refreshUserContext();
    })
  }, [getInitialState]);

  if (!isReady) return null;
  return (
    <NavigationContainer initialState={initialState} ref={navigationRef}>
      <RootStack.Navigator>
        {!isAuthenticated
          ? (
            <RootStack.Screen name='Auth' component={AuthScreen} />
          )
          : (
            <>
            <RootStack.Screen name='Start' component={StartScreen} />
            <RootStack.Screen name='Game' component={GameScreen} />
            </>
          )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default (props) => {
  return (
    <UserProvider>
      <PaperProvider>
        <Portal>
          <App {...props} />
        </Portal>
      </PaperProvider>
    </UserProvider>
  )
}