import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/Auth';
import environment from './src/config/environment';
environment();

const RootStack = createStackNavigator();

// Enable Web: https://github.com/react-navigation/react-navigation/issues/6780
export default function App() {
  const navigationRef = useRef();
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  const { getInitialState } = useLinking(navigationRef, {
    prefixes: [],
    config: {}
  });

  useEffect(() => {
    getInitialState().then((state) => {
      if (state) setInitialState(state);
      setIsReady(true);
    })
  }, [getInitialState]);

  if (!isReady) return null;
  return (
    <NavigationContainer initialState={initialState} ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name='Auth' component={AuthScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
