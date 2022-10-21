import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeAPI = createApi({
  reducerPath: "recipeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://masak-apa-tomorisakura.vercel.app",
  }),
  endpoints: (builder) => ({
    recipes: builder.query({
      query: () => "/api/recipes",
    }),
    recipesDetil: builder.query({
      query: (id) => `/api/recipe/${id}`,
    }),
    category: builder.query({
      query: (id) => `/api/category/recipes`,
    }),
    categoryList: builder.query({
      query: (id) => `/api/category/recipes/${id}`,
    }),
  }),
});

export const {
  useRecipesQuery,
  useRecipesDetilQuery,
  useCategoryQuery,
  useCategoryListQuery,
} = recipeAPI;
