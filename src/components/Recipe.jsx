import React, { useEffect } from "react";
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
import { useSnackbar } from "notistack";

const Recipe = ({ item }) => {
  const [user] = useAuthState(auth);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("Favorit berhasil ditambahkan!", { variant });
  };

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

  useEffect(() => {
    handleClickVariant("success");
  }, [handleClickVariant]);

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
