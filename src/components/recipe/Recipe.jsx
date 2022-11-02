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
import { auth, createFavorite } from "../../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

const Recipe = ({ item }) => {
  const [user] = useAuthState(auth);
  const { enqueueSnackbar } = useSnackbar();

  const onFavoriteClicked = () => {
    if (!user) {
      enqueueSnackbar("Silahkan login untuk menambahkan favorit", {
        variant: "error",
      });
      return;
    }
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
    <Card>
      <Link to={`/detail/${item.key}`} style={{ textDecoration: "none" }}>
        <CardMedia component="img" image={item.thumb} alt={item.key} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
            {item.title}
          </Typography>
        </CardContent>
      </Link>
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
