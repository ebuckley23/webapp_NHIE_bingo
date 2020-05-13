import Amplify from 'aws-amplify';
import { envars } from '../environment/envars';

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
      }
    }
  });
};