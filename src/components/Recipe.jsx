import React from "react";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";
import { auth, createFavorite } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Recipe = ({ item }) => {
  const [user] = useAuthState(auth);

  const onFavoriteClicked = () => {
    createFavorite(
      item.key,
      item.thumb,
      item.title,
      item.times,
      item.serving,
      item.difficulty,
      user.email
    );
  };

  return (
    <Card sx={{ minWidth: 345 }}>
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
      <CardActions onClick={onFavoriteClicked}>
        <Button size="sx">
          <FavoriteOutlined />
          Favorite
        </Button>
      </CardActions>
    </Card>
  );
};

export default Recipe;
