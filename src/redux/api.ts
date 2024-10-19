import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: "dummyjsonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getImage: builder.query({
      query: () => ({
        url: "/image/150",
        responseHandler: async (response) =>
          URL.createObjectURL(await response.blob()),
        cache: "no-cache",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetImageQuery } = imageApi;
