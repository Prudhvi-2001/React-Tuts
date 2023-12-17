import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface Title{
    title:string
}
interface Id{
    id:number
}
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
    getTodo: builder.query<any,number>({
        query:(id)=>`todos/${id}`
    }),
    createTodo: builder.mutation<any, Title>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation,useGetTodoQuery, } = todoApi
