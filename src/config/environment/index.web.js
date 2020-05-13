import Constants from 'expo-constants';
import setEnvironmentVars from './envars';

const { manifest, sessionId } = Constants;
const { version } = manifest;

const envars = {
  APP_VERSION: `${version}.${process.env.REACT_APP_APP_VERSION}`,
  SESSION_ID: sessionId
}

const ENV = {
  test: {
    ...envars,
    AWS_REGION: 'us-east-2',
    AWS_USER_POOL_ID: 'us-east-2_22jyg3JRK',
    AWS_USER_POOL_WEB_CLIENT_ID: '7tqc35b62k1fmng9pcf7vunnjm',
    OAUTH_DOMAIN: '',
    OAUTH_SCOPE: [
      'phone',
      'email',
      'profile',
      'openid',
      'aws.cognito.signin.user.admin'
    ],
    OAUTH_REDIRECT_SIGN_IN: 'https://localhost:19006',
    OAUTH_REDIRECT_SIGN_OUT: 'https://localhost:19006'
  },
  prod: {
    ...envars
  }
}

const getEnvVars = (env = '') => {
  if (env === null || env === undefined || env === '') return ENV.test;
  if (env.indexOf('test') !== -1) return ENV.test;
  if (env.indexOf('prod') !== -1) return ENV.prod;
}

export default () => {
  const result = getEnvVars(process.env.REACT_APP_RELEASE_CHANNEL);
  setEnvironmentVars(result);
}