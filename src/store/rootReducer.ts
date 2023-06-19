import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import calculatorsReducer from '../features/calculators/calculatorsSlice';

const rootReducer = combineReducers({ user: userReducer, calculators: calculatorsReducer });

export type RootStore = { default: ReturnType<typeof rootReducer> }
export default rootReducer;
