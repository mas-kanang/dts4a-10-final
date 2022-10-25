import React from "react";
import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import Home from "../components/home/Home";


const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container variant="main" maxWidth="lg">
        <CssBaseline />
        <Home />

        <Box
          component={Paper}
          sx={{
            boxShadow: 5,
            padding: 3,
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >

        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
