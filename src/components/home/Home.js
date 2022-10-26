import * as React from 'react';
// import Button from '../components/Button';
// import Typography from '../components/Typography';
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductHeroLayout from "./HomeLayout";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../files/background.jpg";

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffb347',
      contrastText: '#000000',
    },
  },
});

export default function Home() {
    const navigate = useNavigate();
  return (
  <ThemeProvider theme={theme}>
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
        Cari beberapa pilihan menu pilihan kami.
      </Typography>
      <Button
        color="neutral"
        variant="contained"
        size="large"
        component="a"
        onClick={() => {
          navigate("/Category");
        }}
        sx={{ minWidth: 250 }}
      >
        Menu
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Temukan resep terbaik
      </Typography>
    </ProductHeroLayout>
  </ThemeProvider>
  );
}
