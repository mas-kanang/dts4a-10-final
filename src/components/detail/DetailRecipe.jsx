import { Typography, LinearProgress, Grid } from "@mui/material";
import React from "react";
import { useRecipesDetilQuery } from "../../services/recipeAPI";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";
import DetailDesc from "./DetailDesc";
import DetailRight from "./DetailRight";

const DetailRecipe = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useRecipesDetilQuery(id);

  return (
    <>
      {error ? (
        <>Ada error disini</>
      ) : isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginBottom: "1em", fontWeight: "bold" }}
          >
            {data.results.title}
          </Typography>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12} s={6} md={6}>
              <DetailCard data={data.results} />
              <DetailDesc data={data.results} />
            </Grid>
            <Grid item xs={12} s={6} md={6}>
              <DetailRight data={data.results} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default DetailRecipe;
