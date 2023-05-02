import axios from 'axios';

export const BASE_URL = 'http://localhost:5180/api/';
const token = JSON.parse(localStorage.getItem('user'));

export const ENDPOINTS = {
  quiz: 'Quiz',
  auth: 'Auth',
  result: 'Result',
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + '/';
  return {
    fetch: async () =>
      await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }),

    fetchById: async (id) =>
      await axios.get(url + id, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }),

    delete: async (id) => await axios.delete(url + id),

    post: async (test) =>
      await axios.post(url, test, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }),

    fetchStatUser: async () =>
      await axios.get(url + token.userId, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }),
  };
};
