import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import dashboardSlice from './slices/dashboardSlice';
import authSlice from './slices/authSlice';
import { AWASOURCE_STORE_KEY } from '../constants';
import clientSlice from './slices/clientSlice';
import talentSlice from './slices/talentSlice';

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: AWASOURCE_STORE_KEY,
};

const rootReducer = combineReducers({
  dashboard: dashboardSlice,
  auth: persistReducer(authPersistConfig, authSlice),
  client: clientSlice,
  talent: talentSlice,
});

const configuredStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(thunk),
});

export { configuredStore };
