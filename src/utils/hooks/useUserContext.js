import { useContext } from 'react';
import { UserContext } from '../context/providers/userContext';

export default () => {
  const value = useContext(UserContext);
  return value;
}