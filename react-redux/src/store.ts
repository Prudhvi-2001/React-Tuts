// src/redux/store.ts
import { createStore, Reducer } from 'redux';
import { AppState, Action } from './types';

const initialState: AppState = {
  count: 0,
};

const reducer: Reducer<AppState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
