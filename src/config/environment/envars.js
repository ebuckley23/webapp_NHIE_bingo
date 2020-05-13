export let envars = {
  AWS_REGION: '',
  AWS_USER_POOL_ID: '',
  AWS_USER_POOL_WEB_CLIENT_ID: '',
  OAUTH_SCOPE: [],
  OAUTH_DOMAIN: '',
  OAUTH_REDIRECT_SIGN_IN: '',
  OAUTH_REDIRECT_SIGN_OUT: '',
  API_BASE_URL: '',
  APP_VERSION: '',
  SESSION_ID: '',
}

export default (environmentVars = {}) => {
  envars = { ...envars, ...environmentVars };
};