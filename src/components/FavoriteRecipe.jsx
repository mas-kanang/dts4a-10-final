import React from "react";
import { Typography, CardMedia, CardContent, Card } from "@mui/material";

const FavoriteRecipe = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.thumb}
        alt={item.key}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FavoriteRecipe;
