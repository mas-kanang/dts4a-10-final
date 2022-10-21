import { Grid } from "@mui/material";
import React from "react";
import { useCategoryQuery } from "../services/recipeAPI";
import Category from "./Category";

const CategoryList = () => {
  const { data, error } = useCategoryQuery();
  return (
    <Grid container spacing={3}>
      {error ? (
        <>Ada error loh</>
      ) : (
        data?.results?.map((recipe) => (
          <Grid item xs key={recipe.key}>
            <Category item={recipe} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CategoryList;
