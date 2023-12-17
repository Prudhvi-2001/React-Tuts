// TodoList.tsx
import React, { useState } from 'react';
import { useGetTodosQuery, useCreateTodoMutation, useGetTodoQuery } from './TodoSlice';

const TodoList: React.FC = () => {
  const { data: todos, isError, isLoading } = useGetTodosQuery();
 const {data:getTodo} = useGetTodoQuery(12);
 console.log(getTodo)

  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [createTodo] = useCreateTodoMutation();
  console.log(isError)

  const handleAddTodo = async () => {
    try {
      await createTodo({ title: newTodoTitle });
      setNewTodoTitle('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError.message}</p>;
  }

  return (
    <div>
      <h2>Todo List:</h2>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}> {todo.id}{todo.title}</li>

        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Todo Title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
