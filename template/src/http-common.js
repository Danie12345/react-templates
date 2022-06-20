import axios from 'axios';

const BASE_URL = 'https://';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
