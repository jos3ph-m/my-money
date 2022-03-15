import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    // reset error everytime signup is called
    setError(null);
    setIsPending(true);

    try {
      // signup user
    } catch (err) {}
  };

  return { error, isPending, signup };
};
