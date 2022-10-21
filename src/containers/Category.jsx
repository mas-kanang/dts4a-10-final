import React from "react";
import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import CategoryList from "../components/CategoryList";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const Category = () => {
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
              fontFamily: "monospace",
              fontStyle: "oblique",
            }}
          >
            Category
          </Typography>
          <CategoryList />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Category;
