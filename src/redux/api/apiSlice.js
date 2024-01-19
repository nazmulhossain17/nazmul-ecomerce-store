import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nazmul-ecomerce-server-1wnx.vercel.app/",
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
