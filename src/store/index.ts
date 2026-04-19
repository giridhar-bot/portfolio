import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import projectReducer from './projectSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
