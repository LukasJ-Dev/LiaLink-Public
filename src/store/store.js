import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/user.slice';
import jobsReducer from './features/jobs/jobs.slice';

import logger from 'redux-logger';

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export const setupStore = preloadedState => {
  return configureStore({
    reducer: {
      user: userReducer,
      jobs: jobsReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: ['register', 'rehydrate'],
        },
      }).concat(middlewares),
  });
};