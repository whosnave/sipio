import axios from 'axios';

export const url = 'https://upt-puskesmas-pamulang.herokuapp.com/';
export const accessToken = '';

export const server = axios.create({
  baseURL: url,
});
