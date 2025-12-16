import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LoginApis = createApi({
  reducerPath: "LoginApis",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = LoginApis;
