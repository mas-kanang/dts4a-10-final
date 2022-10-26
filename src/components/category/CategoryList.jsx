import { Grid, LinearProgress } from "@mui/material";
import React from "react";
import { useCategoryQuery } from "../../services/recipeAPI";
import Category from "./Category";

const CategoryList = () => {
  const { data, isLoading } = useCategoryQuery();
  return (
    <Grid container spacing={3}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        data?.results?.map((recipe) => (
          <Grid item xs={12} md={6} lg={4} key={recipe.key}>
            <Category item={recipe} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CategoryList;
