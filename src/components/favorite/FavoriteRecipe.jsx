import React from "react";
import { Typography, CardMedia, CardContent, Card } from "@mui/material";
import { Link } from "react-router-dom";

const FavoriteRecipe = ({ item }) => {
  return (
    <Card sx={{ minWidth: 345 }}>
      <Link to={`/${item.key}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="140"
          image={item.thumb}
          alt={item.key}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
            {item.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default FavoriteRecipe;
