import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com',
  prepareHeaders: (headers, { getState }) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },

}),
  endpoints: (builder) => ({
    getTodos: builder.query<any, void>({
      query: () => 'todos',
    }),
    createTodo: builder.mutation<any, Partial<{ title: string }>>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todoApi
