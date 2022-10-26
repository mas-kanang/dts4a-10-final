import { React, useRef } from "react";
import { Button, Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/layout/NavBar";
import Copyright from "../components/layout/Copyright";
import Search from "../components/layout/Search";

import Home from "../components/home/Home";

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    mode: "light",
  },
});

const HomePage = () => {
  const search = useRef(null);
  const setScrollPosition = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  };
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
          }}
        >

            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: "bold",
              }}
            ref={search}
            >
              Resep pilihan kami
            </Typography>

          <Search />
          <Button
            color="neutral"
            variant="contained"
            size="large"
            component="a"
            onClick={() => setScrollPosition(search)}
            sx={{ minWidth: 200 }}
          >
            Cari
          </Button>
        </Box>
        <Copyright sx={{ m: 3 }} />
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
