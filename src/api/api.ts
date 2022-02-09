/* eslint-disable import/prefer-default-export,max-len */

import axios from 'axios';
import apiDict from './apiDict';
import { getAccessToken, removeAccessToken, setAccessToken } from './utils';
import { keysToCamel } from '../utils/utils';
import { IUserRequest } from '../features/user/userSlice';

const axiosInstance = axios.create({
  baseURL: process.env.HOST,
});

axiosInstance.interceptors.request.use((config) => ({ ...config, headers: { authorization: `Bearer ${getAccessToken()}` } }), (error) => Promise.reject(error));
/* axiosInstance.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    removeAccessToken();
    window.history.pushState('', '', `/app${pathDict.login}`);
  }
  return error;
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
