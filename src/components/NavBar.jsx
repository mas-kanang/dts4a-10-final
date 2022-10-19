import React, { useEffect } from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

// Di sini kita akan menggunakan useNavigate untuk bisa keluar dari halaman HomePage dan
// beralih ke halaman Login
import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

import { auth, logOut } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user, isLoading] = useAuthState(auth);
  // Gunakan hooks useNavigate
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = () => {
    logOut();
    // navigate("/login")
  };

  useEffect(() => {
    if (isLoading) {
      // return;
    }
    if (!user) {
      navigate("/login ");
    }
  }, [user, isLoading, navigate]);

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
            Belajar Firebase Authentication
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
            {/* {user.email ? user.email : ''} */}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
