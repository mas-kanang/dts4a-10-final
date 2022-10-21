import { Typography } from "@mui/material";
import React from "react";

function Copyright(props) {
  return (
    <Typography
      color="text.secondary"
      align="center"
      {...props}
      variant="body2"
    >
      {"Copyright © "}
      DTS4A - Pair 10 - Resep Nusantara {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
