import { Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { allFavorites } from "../../auth/firebase";
import FavoriteRecipe from "./FavoriteRecipe";

const FavoriteList = () => {
  const [favorite, setFavorite] = useState([]);
  const [error, setError] = useState("");

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
        return;
      })
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Grid container spacing={3}>
      {error ? (
        <>Ada error loh</>
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
