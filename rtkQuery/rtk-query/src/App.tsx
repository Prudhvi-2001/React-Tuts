// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './todo/TodoList';
import store from './todo/TodoStore';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>RTK Query Example</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
