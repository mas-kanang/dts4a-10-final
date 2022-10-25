import React from "react";
import { CardMedia, Card, Skeleton } from "@mui/material";

const DetailCard = ({ data }) => {
  return (
    <>
      {data.thumb ? (
        <Card>
          <CardMedia component="img" image={data.thumb} alt={data.key} />
        </Card>
      ) : (
        <Skeleton variant="rectangular" height={200} />
      )}
    </>
  );
};

export default DetailCard;
