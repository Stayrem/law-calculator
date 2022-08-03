/* eslint-disable import/prefer-default-export,max-len */

import axios from 'axios';
import apiDict from './apiDict';
import { getAccessToken, removeAccessToken, setAccessToken } from './utils';
import { keysToCamel } from '../utils/utils';
import pathDict from '../app/pathDict';
import { IUserRequest } from '../features/user/userSlice';

const axiosInstance = axios.create({
  baseURL: '/',
});

axiosInstance.interceptors.request.use((config) => ({ ...config, headers: { authorization: `Bearer ${getAccessToken()}` } }), (error) => Promise.reject(error));
/* axiosInstance.interceptors.response.use((response) => response, (error) => {
=======
axiosInstance.interceptors.response.use((response) => response, (error) => {
>>>>>>> origin/development
  if (error.response.status === 401) {
    removeAccessToken();
    window.history.pushState('', '', `/app${pathDict.login}`);
  }
  return error;
<<<<<<< HEAD
}); */

interface IPercentByContractResponse {
  status: boolean,
  data: {
    total_sum: number,
    penalty: number
  }
}

export const fetchReportPercentByContract = async (payload) => axiosInstance
  .post<IPercentByContractResponse>(apiDict.calculators.percentsByContract, payload);

export interface IUserDataResponse {
  accessToken: string;
  tokenType: string;
}

interface IUserNameResponse {
  status: string,
  data: { user: string },
}

export const fetchLogin = async (userData) => axiosInstance
  .post<IUserDataResponse>(apiDict.login, userData)
  .then((res) => keysToCamel(res.data))
  .then((res) => setAccessToken(res.accessToken));

export const fetchAddUser = async (userData) => axiosInstance
  .post<IUserRequest>(apiDict.addUser, userData);

export const fetchCheckUser = async () => axiosInstance
  .get<IUserNameResponse>(apiDict.checkUser)
  .then((res) => res.data.data);
