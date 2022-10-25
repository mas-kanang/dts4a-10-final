import { Grid } from "@mui/material";
import React from "react";
import Recipe from "./Recipe";
import { useRecipesQuery } from "../services/recipeAPI";

const RecipeList = () => {
  const { data, error, isLoading } = useRecipesQuery();
  return (
    <Grid container spacing={3}>
      {error ? (
        <>Ada error loh</>
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

export default RecipeList;
