import React from "react";
import { Typography, CardContent, Card } from "@mui/material";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <Link to={`/category/${item.key}`} style={{ textDecoration: "none" }}>
      <Card sx={{ minWidth: 345 }}>
        <CardContent sx={{ backgroundColor: "#2E7D32" }}>
          <Typography
            gutterBottom
            variant="h5"
            textAlign="center"
            color="white"
          >
            {item.category}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Category;
