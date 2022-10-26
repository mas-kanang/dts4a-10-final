import { GitHub, Google } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = ({ setError }) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Box>
      <Divider>Or Login With</Divider>
      <Box display="flex" justifyContent="center">
        <IconButton
          color="error"
          size="large"
          onClick={signInWithGoogle}
          title="Login With Google Account"
        >
          <Google fontSize="inherit" />
        </IconButton>
        <IconButton
          sx={{ color: "#000000" }}
          size="large"
          onClick={signInWithGithub}
          title="Login With Github Account"
        >
          <GitHub fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SocialLogin;
