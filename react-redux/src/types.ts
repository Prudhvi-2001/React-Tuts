// src/redux/types.ts
export interface AppState {
    count: number;
  }
  
  export interface IncrementAction {
    type: 'INCREMENT';
  }
  
  export interface DecrementAction {
    type: 'DECREMENT';
  }
  
  export type Action = IncrementAction | DecrementAction;
  