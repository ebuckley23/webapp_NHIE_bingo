import { Linking } from 'expo';
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Amplify from 'aws-amplify';
import { envars } from '../environment/envars';

/** https://levelup.gitconnected.com/a-complete-flow-for-social-login-with-react-native-expo-and-amplify-2c9eacc501fe */
/** Amplify documentation */
const urlOpenerExpo = async (url, redirectUrl) => {
  console.log('>>>>>>>>>> in urlOpener');
  // On Expo, use WebBrowser.openAuthSessionAsync to open the Hosted UI pages
  const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
    url,
    redirectUrl
  );

  console.log({ type, newUrl });
  if (type === 'success') {
    await WebBrowser.dismissBrowser();

    if (Platform.OS === 'ios') {
      return Linking.openURL(newUrl);
    }
  }
};

export default () => {
  Amplify.configure({
    Auth: {
      region: envars.AWS_REGION,
      userPoolId: envars.AWS_USER_POOL_ID,
      userPoolWebClientId: envars.AWS_USER_POOL_WEB_CLIENT_ID,
      oauth: {
        domain: envars.OAUTH_DOMAIN,
        scope: envars.OAUTH_SCOPE,
        redirectSignIn: envars.OAUTH_REDIRECT_SIGN_IN,
        redirectSignOut: envars.OAUTH_REDIRECT_SIGN_OUT,
        responseType: 'code'
      },
      urlOpener: urlOpenerExpo
    }
  });
};