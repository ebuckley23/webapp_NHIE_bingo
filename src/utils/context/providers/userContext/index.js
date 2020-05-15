import React from 'react';
import { Auth } from 'aws-amplify';

export const UserContext = React.createContext({});

const refreshUserContext = (state, setState) =>
  async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        const {attributes} = user;
        const {email, email_verified, family_name, given_name, sub} = attributes;
        setState({
          ...state,
          sub,
          email,
          isAuthenticated: email_verified,
          firstName: given_name,
          lastName: family_name
        })
      }
    } catch (error) {
      
    }
  }
export default React.memo(({children}) => {
  const [state, setState] = React.useState(DEFAULT_CONTEXT);

  return (
    <UserContext.Provider
      value={{
        ...state,
        resetContext: () => setState(DEFAULT_CONTEXT),
        refreshUserContext: refreshUserContext(state, setState)
      }}
    >
      {children}
    </UserContext.Provider>
  )
})

const DEFAULT_CONTEXT = {
  sub: '',
  firstName: '',
  lastName: '',
  email: '',
  isAuthenticated: false
}