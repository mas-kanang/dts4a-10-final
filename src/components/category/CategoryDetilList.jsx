import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useCategoryListQuery } from "../../services/recipeAPI";
import Recipe from "../recipe/Recipe";

const CategoryDetilList = () => {
  const { id } = useParams();
  const { data, error } = useCategoryListQuery(id);
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

export default CategoryDetilList;
