import * as React from 'react';
// import Button from '../components/Button';
// import Typography from '../components/Typography';
import { Button, Typography } from "@mui/material";
import ProductHeroLayout from "./HomeLayout";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../files/background.jpg";

export default function Home() {
    const navigate = useNavigate();
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Cooks
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Cari beberapa pilihan menu resep pilihan kami.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        onClick={() => {
          navigate("/Recipe");
        }}
        sx={{ minWidth: 200 }}
      >
        Resep
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Temukan resep terbaik
      </Typography>
    </ProductHeroLayout>
  );
}
