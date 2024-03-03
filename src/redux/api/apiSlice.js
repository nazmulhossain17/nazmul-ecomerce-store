import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "api/v1/products",
    }),
    singleProduct: builder.query({
      query: (id) => `api/v1/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useSingleProductQuery } = api;
