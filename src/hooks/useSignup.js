import { useState } from 'react';
import axios from 'axios';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signUp = async (userName, email, password) => {
    setIsLoading(true);
    setError(null);

    await axios.post(
      'http://localhost:5180/api/Auth/register',
      { userName, email, password },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      },
    );
  };

  return {
    signUp,
    error,
    isLoading,
  };
};
