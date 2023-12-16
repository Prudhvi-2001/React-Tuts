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

  export interface Makezero{
    type:"MAKEZERO";
  }
  
  export type Action = IncrementAction | DecrementAction | Makezero;
  