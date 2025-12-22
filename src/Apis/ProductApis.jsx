import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApis = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),

     getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = ProductApis;


