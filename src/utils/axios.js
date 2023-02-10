import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS
  // baseURL: 'http://localhost:1111/api'
  // baseURL: 'https://638f22044ddca317d7ef59db.mockapi.io/'
});

export default instance