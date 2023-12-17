// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getTodos: builder.query<any, void>({
      query: () => 'todos',
    }),
    getTodo: builder.query<any,void>({
        query:(id)=>`todos/${id}`
    })
    
    
  }),
});

export const { useGetTodosQuery } = api;
