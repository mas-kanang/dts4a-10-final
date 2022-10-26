import React from "react";
import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/layout/NavBar";
import CategoryDetilList from "../components/category/CategoryDetilList";
import { Link, useParams } from "react-router-dom";
import Copyright from "../components/layout/Copyright";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const RecipeByCategory = () => {
  const { id } = useParams();
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
          <Box
            sx={{
              padding: 2,
              display: "flex",
              gap: 2,
              mb: 2,
            }}
          >
            <Link to="/category" style={{ textDecoration: "none" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Category
              </Typography>
            </Link>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              {id.replace(/-/gi, " ")}
            </Typography>
          </Box>
          <CategoryDetilList />
        </Box>
        <Copyright sx={{ m: 3 }} />
      </Container>
    </ThemeProvider>
  );
};

export default RecipeByCategory;
