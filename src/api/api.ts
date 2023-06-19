/* eslint-disable import/prefer-default-export,max-len */

import axios from 'axios';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';
import apiDict from './apiDict';
import { getAccessToken, removeAccessToken, setAccessToken } from './utils';
import { keysToCamel } from '../utils/utils';
import pathDict from '../app/pathDict';
import { IUserRequest } from '../features/user/userSlice';
import { RateItem } from '../features/calculators/types';

dayjs.extend(utc);
dayjs.extend(timezone);

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

const keyRateStartDate = dayjs('13.09.2013', 'DD.MM.YYYY');

export const fetchLogin = async (userData) => axiosInstance
  .post<IUserDataResponse>(apiDict.login, userData)
  .then((res) => keysToCamel(res.data))
  .then((res) => setAccessToken(res.accessToken));

export const fetchAddUser = async (userData) => axiosInstance
  .post<IUserRequest>(apiDict.addUser, userData);

export const fetchCheckUser = async () => axiosInstance
  .get<IUserNameResponse>(apiDict.checkUser)
  .then((res) => res.data.data);

export const fetchRates = () => axiosInstance.get<RateItem[]>('/static/rates.json').then((res) => removeDuplicatesByRate(res.data)
  .map((it) => (
    {
      ...it, timestamp: dayjs(it.timestamp, 'DD.MM.YYYY').unix(),
    }
  )));

function removeDuplicatesByRate(arr: { rate: number; timestamp: string }[]): { rate: number; timestamp: string }[] {
  const result: { rate: number; timestamp: string }[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 || arr[i].rate !== arr[i + 1].rate) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}
