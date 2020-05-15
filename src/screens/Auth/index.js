import React, { useState, useEffect } from 'react';
import { Text, Snackbar, Dialog, TextInput, Button } from 'react-native-paper';
import { Auth, Hub } from 'aws-amplify';
import Screen from '../../components/Screen';
import SignUp from './components/SignUp';
import Login from './components/Login';
import FadeInView from '../../components/Animations/FadeInView';

export default ({route, navigation}) => {
  const [msg, setMsg] = useState(undefined);
  const [successMsg, setSuccessMsg] = useState(undefined);
  const [isLogin, setIsLogin] = useState(true);
  const [verificationCode, setVerificationCode] = useState(undefined);
  const [verificationEmail, setVerificationEmail] = useState('');
  const text = isLogin ? 'Click here to sign up instead' : 'Click here to sign in instead';
  
  const onCodeVerifyAsync = async () => {
    try {
      await Auth.confirmSignUp(verificationEmail, verificationCode);
    } catch (error) {
      console.error({error})
    }
  }

  const onLoginAsync = async ({email, password}, actions) => {
    try {
      const user = await Auth.signIn(email, password);
      console.log('user', user);
      console.log('get user', Auth.user);
    } catch (error) {
      setMsg(`${error?.name}: ${error?.message}`)
    } finally {
      actions.resetForm();
    }
  }

  const onSignUpAsync = async ({email, first_name, last_name, password}, actions) => {
    try {
      const user = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          given_name: first_name,
          family_name: last_name
        }
      });

      const {user: cognitoUser} = user;
      const {username} = cognitoUser;
      setSuccessMsg(`A verification code has been sent to ${email}.`)
      setVerificationEmail(username);
    } catch (error) {
      setMsg(`${error?.name}: ${error?.message}`)
    } finally {
      actions.resetForm();
    }
  }
  return (
    <Screen>
      {isLogin && <LoginForm onLogin={onLoginAsync} />}
      {!isLogin && <SignUpForm onSignUp={onSignUpAsync} />}
      <Text onPress={() => setIsLogin(!isLogin)}>{text}</Text>
      <SuccessDialog isVisible={!!successMsg} msg={successMsg} code={verificationCode} onSetCode={val => setVerificationCode(val)} onVerify={onCodeVerifyAsync} />
      <Snackbar visible={!!msg} onDismiss={setMsg}>{msg}</Snackbar>
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

const SuccessDialog = ({isVisible, msg, code, onSetCode, onVerify}) => {
  return (
    <Dialog visible={isVisible}>
      <Dialog.Title>Success!</Dialog.Title>
      <Dialog.Content>
        <Text>{msg}</Text>
        <TextInput
          value={code}
          onChangeText={onSetCode}
          mode='outlined'
          dense
        />
        <Button
          onPress={onVerify}
          disabled={!code}>
          Verify
        </Button>
      </Dialog.Content>
    </Dialog>
  )
}