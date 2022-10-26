import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Avatar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../../files/background.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { auth, logIn, register } from "../../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import SocialLogin from "./SocialLogin";
import Copyright from "../layout/Copyright";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [error, setError] = React.useState(null);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [user, isLoading] = useAuthState(auth);

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    logIn(credential.email, credential.password);
  };

  const registerHandler = () => {
    register(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
    }
    if (user) {
      navigate("/ ");
    }
  }, [user, isLoading, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          opacity: 0.3,
          backgroundSize: "cover",
        }}
      ></Box>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Box
          component={Paper}
          sx={{
            boxShadow: 10,
            padding: 5,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {loginOrRegister === "login" ? "Login Page" : "Register Page"}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={credential.email}
              onChange={textFieldEmailOnChangeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={credential.password}
              onChange={textFieldPasswordOnChangeHandler}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={buttonLoginOrRegisterOnClickHandler}
              sx={{ mt: 3, mb: 2 }}
            >
              {loginOrRegister === "login" ? "Login" : "Register Account"}
            </Button>
            {loginOrRegister === "login" ? (
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button fullWidth size="small">
                  do you want Register ?
                </Button>
              </Link>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button fullWidth size="small">
                  do you want Login ?
                </Button>
              </Link>
            )}
            {error && <Alert severity="error">{error}</Alert>}

            <SocialLogin setError={setError} />
          </Box>
        </Box>
        <Copyright sx={{ mt: 1 }} />
      </Container>
    </ThemeProvider>
  );
};

export default LoginOrRegisterForm;
