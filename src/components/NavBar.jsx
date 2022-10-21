import * as React from "react";
import {
  Restaurant,
  FavoriteOutlined,
  CategoryOutlined,
  Logout,
  Login,
} from "@mui/icons-material";
import { Avatar, Button, ListItemIcon, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logOut } from "../auth/firebase";

export default function MenuAppBar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Restaurant
            fontSize="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, verticalAlign: "center", mt: 1 }}
          >
            Resep Nusantara
          </Typography>

          {user ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography>
                {user?.displayName ??
                  user?.reloadUserInfo?.screenName ??
                  user?.email}
              </Typography>
              <Tooltip title="Menus">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }} src={user?.photoURL} />
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              color="inherit"
              startIcon={<Login />}
            >
              Login
            </Button>
          )}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Link to="/category" style={{ textDecoration: "none" }}>
                <ListItemIcon>
                  <CategoryOutlined fontSize="small" />
                </ListItemIcon>
                Category
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/favorite" style={{ textDecoration: "none" }}>
                <ListItemIcon>
                  <FavoriteOutlined fontSize="small" />
                </ListItemIcon>
                Favorite
              </Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
