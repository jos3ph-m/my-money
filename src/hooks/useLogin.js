import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign the user in
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      //dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });
    } catch (err) {
      if (!isCancelled) {
      }
    }
  };

  return { login, error, isPending };
};
