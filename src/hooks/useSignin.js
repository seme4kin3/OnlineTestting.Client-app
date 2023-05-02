import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signIn = async (email, password) => {
    setIsLoading(true);
    setError(null);

    await axios
      .post(
        'http://localhost:5180/api/Auth/login',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
        if (res.statusText !== 'OK') {
          setIsLoading(false);
          setError(res.status);
        }
        if (res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data));
          dispatch({ type: 'LOGIN', payload: res.data });
          setIsLoading(false);
        }
      });
  };

  return { signIn, isLoading, error };
};
