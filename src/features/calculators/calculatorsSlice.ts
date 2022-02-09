/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../constants';
import { fetchReportPercentByContract } from '../../api/api';

interface ICalculatorsStore {
  calcPercentByContract: {
    fetchStatus: LoadingStatus
  }
}

const initialState: ICalculatorsStore = {
  calcPercentByContract: {
    fetchStatus: LoadingStatus.NONE,
  },
};

const getReportPercentByContract = createAsyncThunk(
  'calc/getReportPercentByContract',
  async (data) => fetchReportPercentByContract(data),
);

const calculatorsSlice = createSlice({
  name: 'calcStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportPercentByContract.fulfilled, (state: ICalculatorsStore, action) => {
      state.calcPercentByContract.fetchStatus = LoadingStatus.LOADING;
    });
  },
});

export default calculatorsSlice.reducer;
