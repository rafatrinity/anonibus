import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-anonibus-3842b.cloudfunctions.net',
});

export default api;
