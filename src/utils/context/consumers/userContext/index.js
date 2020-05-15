import React from 'react';
import { UserContext } from '../../providers/userContext';

export default ({children}) => {
  return (
    <UserContext.Consumer>
      {([userContext]) => {
        return React.Children.map(children, (child, key) => {
          return React.cloneElement(child, {
            userContext
          });
        });
      }}
    </UserContext.Consumer>
  )
}