import React from "react";
import { Typography, Card, Box } from "@mui/material";

const DetailRight = ({ data }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1em 1em 1em 1em ",
        }}
      >
        <Typography
          component="div"
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
          }}
        >
          Waktu Pembuatan: {data.times}
        </Typography>
        <Typography
          component="div"
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
          }}
        >
          Jumlah Porsi: {data.servings}
        </Typography>
        <Typography
          component="div"
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
          }}
        >
          Tingkat Kesulitan: {data.difficulty}
        </Typography>
      </Card>
      <Card
        sx={{
          padding: "1em 1em 1em 1em ",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        <Typography
          component="div"
          variant="subtitle1"
          sx={{
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Bahan:
        </Typography>
        {data.ingredient.map((ingredients, index) => {
          return (
            <div key={index}>
              <span component="div" variant="subtitle1">
                {ingredients}
              </span>
              {ingredients.length > index + 1 ? ", " : ""}
            </div>
          );
        })}
      </Card>
      <Card sx={{ padding: "1em 1em 1em 1em " }}>
        <Box>
          <Typography
            component="div"
            variant="subtitle1"
            sx={{
              mb: 2,
              fontWeight: "bold",
            }}
          >
            Langkah Pembuatan:
          </Typography>
          {data.step.map((steps, index) => {
            return (
              <div key={index}>
                <Typography component="div" variant="subtitle1">
                  {steps}
                </Typography>
              </div>
            );
          })}
        </Box>
      </Card>
    </>
  );
};

export default DetailRight;
