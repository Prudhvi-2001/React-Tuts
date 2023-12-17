// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './TodoSlice';
const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export default store;
