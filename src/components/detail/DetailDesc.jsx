import React from "react";
import { Typography, Card } from "@mui/material";

const DetailDesc = ({ data }) => {
  return (
    <Card
      sx={{
        padding: "1em 1em 1em 1em ",
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      <Typography component="div" variant="subtitle1">
        {data.desc}
      </Typography>
    </Card>
  );
};

export default DetailDesc;
