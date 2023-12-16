// src/components/Counter.tsx
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppState, Action } from '../types';

// Define props using the types
type CounterProps = ConnectedProps<typeof connector>;

const Counter: React.FC<CounterProps> = ({ count, increment, decrement,makezero }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={makezero}>Make Zero</button>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state: AppState) => {
  return {
    count: state.count,
  };
};

// Map Redux actions to component props
const mapDispatchToProps = {
  increment: () => ({ type: 'INCREMENT' } as Action),
  decrement: () => ({ type: 'DECREMENT' } as Action),
  makezero:()=>({type:'MAKEZERO'} as Action)
};

// Connect the component to the Redux store
const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Counter);
