import React from "react";
import { CardMedia, Card } from "@mui/material";

const DetailCard = ({ data }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        // height="140"
        image={data.thumb}
        alt={data.key}
      />
    </Card>
  );
};

export default DetailCard;
