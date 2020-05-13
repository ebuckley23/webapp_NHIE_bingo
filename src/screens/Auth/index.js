import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import Screen from '../../components/Screen';
import SignUp from './components/SignUp';
import Login from './components/Login';
import FadeInView from '../../components/Animations/FadeInView';

export default ({route, navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  const text = isLogin ? 'Click here to sign up instead' : 'Click here to sign in instead';

  return (
    <Screen>
      {isLogin && <LoginForm onLogin={() => {}} />}
      {!isLogin && <SignUpForm onSignUp={() => {}} />}
      <Text onPress={() => setIsLogin(!isLogin)}>{text}</Text>
    </Screen>
  )
}

const LoginForm = ({onLogin}) => (
  <FadeInView>
    <Login onLogin={onLogin} />
  </FadeInView>
)

const SignUpForm = ({onSignUp}) => {
  return (
    <FadeInView>
      <SignUp onSignUp={onSignUp} />
    </FadeInView>
  )
}