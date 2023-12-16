// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './store';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React-Redux Example</h1>
        <Counter />
      
      </div>
    </Provider>
  );
};

export default App;
