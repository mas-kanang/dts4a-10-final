import { Grid, LinearProgress } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useCategoryListQuery } from "../../services/recipeAPI";
import Recipe from "../recipe/Recipe";

const CategoryDetilList = () => {
  const { id } = useParams();
  const { data, isLoading } = useCategoryListQuery(id);
  return (
    <Grid container spacing={3}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        data?.results?.map((recipe) => (
          <Grid item xs key={recipe.key}>
            <Recipe item={recipe} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CategoryDetilList;
