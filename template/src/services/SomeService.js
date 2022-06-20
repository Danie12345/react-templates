import http from '../http-common';

const getStuff = () => http.get('/');

const SomeService = {
  getStuff
};

export default SomeService;
