/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../app/enums';
import { fetchRates, fetchReportPercentByContract } from '../../api/api';
import { RateItem } from './types';

interface IAuthStore {

}

const initialState: ICalculatorsStore = {
  calcPercentByContract: {
    fetchStatus: LoadingStatus.NONE,
  },
  rates: {
    status: LoadingStatus.NONE,
    ratesList: [],
  },
};

const getReportPercentByContract = createAsyncThunk(
  'calc/getReportPercentByContract',
  async (data) => fetchReportPercentByContract(data),
);

export const getRates = createAsyncThunk(
  'calc/getRates',
  () => fetchRates(),
);

const calculatorsSlice = createSlice({
  name: 'calcStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportPercentByContract.fulfilled, (state: ICalculatorsStore, action) => {
      state.calcPercentByContract.fetchStatus = LoadingStatus.LOADING;
    });
    builder.addCase(getRates.fulfilled, (state, action) => {
      state.rates.status = LoadingStatus.FULFILLED;
      state.rates.ratesList = action.payload;
    });
    builder.addCase(getRates.pending, (state) => {
      state.rates.status = LoadingStatus.PENDING;
    });
    builder.addCase(getRates.rejected, (state) => {
      state.rates.status = LoadingStatus.FAILED;
    });
  },
});

export default calculatorsSlice.reducer;
