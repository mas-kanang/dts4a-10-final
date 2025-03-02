import React from "react";
import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/layout/NavBar";
import FavoriteList from "../components/favorite/FavoriteList";
import Copyright from "../components/layout/Copyright";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const Favorite = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container variant="main" maxWidth="lg">
        <CssBaseline />

        <Box
          component={Paper}
          sx={{
            boxShadow: 5,
            padding: 3,
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Favorite
          </Typography>
          <FavoriteList />
        </Box>
        <Copyright sx={{ m: 3 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Favorite;
