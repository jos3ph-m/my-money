import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
  };

  return { error, isPending, signup };
};
