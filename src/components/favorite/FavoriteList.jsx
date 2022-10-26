import { Grid, LinearProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { allFavorites } from "../../auth/firebase";
import FavoriteRecipe from "./FavoriteRecipe";

const FavoriteList = () => {
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    allFavorites()
      .then((snapshot) => {
        let favorite = [];
        snapshot.docs.forEach((doc) => {
          favorite.push({ ...doc.data(), id: doc.id });
        });
        favorite.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
        const result = favorite.reduce((final, current) => {
          let obj = final.find((item) => item.key === current.key);
          if (obj) {
            return final;
          }
          return final.concat([current]);
        }, []);
        setFavorite(result);
        setLoading(false);
        return;
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Grid container spacing={3}>
      {loading ? (
        <LinearProgress />
      ) : (
        favorite?.map((recipe, index) => (
          <Grid item xs key={index}>
            <FavoriteRecipe item={recipe} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default FavoriteList;
