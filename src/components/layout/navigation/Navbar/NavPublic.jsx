import React, { useState, useEffect } from "react";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import { Toolbar, Stack, Button, Container, AppBar } from "@mui/material";
import { Link as LinkMui } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { logout } from "../../../../services/user-service";

const NavPublic = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const pagesLoggedIn = [
    {
      text: "Profile",
      href: "/profile",
    },
    {
      text: "Advice",
      href: "/advice",
    },
    {
      text: "Admin",
      href: "/dashBoard",
    },
    {
      text: "Logout",
      href: "/",
    },
    {
      text: "Forum",
      href: "/forum",
    },
  ];

  const pagesLoggedOut = [
    {
      text: "Login",
      href: "/login",
    },
    {
      text: "Register",
      href: "/signup",
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:600px)");
  const isDesktop = useMediaQuery("(min-width:600px)");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };      
      const {data} = await logout(null,{headers})
      console.log(data);
      console.log(token);
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AppBar color="main" sx={{ position: "sticky" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <LinkReact to="/">
              <CardMedia
                sx={{
                  minWidth: "30%",
                  height: 45,
                  width: 45,
                  borderRadius: 20,
                }}
                image="src/assets/logoEco.svg"
              />
            </LinkReact>
            <LinkReact to="/">
              <Typography color="main.primary">EcoEnergy</Typography>
            </LinkReact>
          </Box>

          {isDesktop && (
            <Box>
              {isLoggedIn ? (
                <Stack
                  sx={{
                    mr: 5,
                    gap: 2,
                    alignItems: "center",
                    display: { xs: "none", sm: "flex", md: "flex" },
                  }}
                  direction="row"
                >
                  <LinkReact to="/profile">
                    <LinkMui
                      sx={{
                        "&:hover": {
                          color: "main.primary",
                        },
                      }}
                      underline="none"
                      color="main.secondary"
                    >
                      Profile
                    </LinkMui>
                  </LinkReact>

                  <LinkReact to="/advice">
                    <LinkMui
                      sx={{
                        "&:hover": {
                          color: "main.primary",
                        },
                      }}
                      underline="none"
                      color="main.secondary"
                    >
                      Advice
                    </LinkMui>
                  </LinkReact>

                  <LinkReact to="/forum">
                    <LinkMui
                      sx={{
                        "&:hover": {
                          color: "main.primary",
                        },
                      }}
                      underline="none"
                      color="main.secondary"
                    >
                      Forum
                    </LinkMui>
                  </LinkReact>
                  <LinkReact to="/dashBoard">
                    <LinkMui
                      sx={{
                        "&:hover": {
                          color: "main.primary",
                        },
                      }}
                      underline="none"
                      color="main.secondary"
                    >
                      Admin
                    </LinkMui>
                  </LinkReact>

                  <Tooltip title="Logout">
                    <Button onClick={handleLogout} sx={{ color: "white" }}>
                      <Avatar sx={{ bgcolor: "white", color: "main.tertiary" }}>
                        <LogoutIcon />
                      </Avatar>
                    </Button>
                  </Tooltip>
                </Stack>
              ) : (
                <Box
                  sx={{
                    flexGrow: 1,
                    justifyContent: "flex-end",
                    display: { xs: "flex", sm: "none", md: "none" },
                  }}
                >
                  <LinkReact to="/login">
                    <LinkMui
                      sx={{
                        "&:hover": {
                          color: "main.primary",
                        },
                      }}
                      underline="none"
                      color="main.secondary"
                    >
                      Log In
                    </LinkMui>
                  </LinkReact>

                  <LinkReact to="/signup">
                    <LinkMui
                      sx={{
                        "&:hover": {
                          color: "main.primary",
                        },
                      }}
                      underline="none"
                      color="main.secondary"
                    >
                      Register
                    </LinkMui>
                  </LinkReact>
                </Box>
              )}
            </Box>
          )}

          {isMobile && (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Menu
            color="main.secondary"
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { color: "white", xs: "block", md: "none" },
            }}
          >
            {isLoggedIn
              ? pagesLoggedIn.map((page) => (
                  
                    <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                      <LinkReact to={page.href}>
                        <LinkMui
                          sx={{
                            "&:hover": {
                              color: "main.primary",
                            },
                          }}
                          underline="none"
                          color="main.secondary"
                        >
                          {page.text}
                        </LinkMui>
                      </LinkReact>
                    </MenuItem>
                    
                ))
              : pagesLoggedOut.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <LinkReact to={page.href}>
                      <LinkMui
                        sx={{
                          "&:hover": {
                            color: "main.primary",
                          },
                        }}
                        underline="none"
                        color="main.secondary"
                      >
                        {page.text}
                      </LinkMui>
                    </LinkReact>
                  </MenuItem>
                ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavPublic;
