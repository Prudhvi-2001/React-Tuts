// TodoList.tsx
import React from 'react';
import { useGetTodosQuery } from './CreateSlice';

const TodoList: React.FC = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery();
  console.log(todos)
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(todos)
  if(error){return <p>{error}</p>}

  return (
    <div>
      <h2>Todo List:</h2>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
