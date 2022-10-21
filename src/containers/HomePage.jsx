import React from "react";
import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const HomePage = () => {
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
            // alignItems: "center",
          }}
        >
          <Typography variant="h3">HomePage</Typography>
          <Typography variant="h5">HomePage</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
