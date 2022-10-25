import React from "react";
import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/layout/NavBar";
import Copyright from "../components/layout/Copyright";
import Search from "../components/layout/Search";
import { Link } from "react-router-dom";

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
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: "bold",
              }}
            >
              Home
            </Typography>
          </Link>
          <Search />
        </Box>
        <Copyright sx={{ m: 3 }} />
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
