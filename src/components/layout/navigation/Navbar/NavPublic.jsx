import { Toolbar, Stack, Button, Container, AppBar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import { Link as LinkMui } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import axios from "axios";

const NavPublic = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
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
      text: "Forum",
      href: "/forum",
    },
    {
      text: "Logout",
      href: "/",
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
    // event.preventDefault();
    try {
      const token = localStorage.getItem("token");
          const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          };
      const response = await axios.post('http://127.0.0.1:8000/api/logout',null,{ headers });
      console.log(response);
      console.log(token);
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <AppBar color="main"sx={{position:'sticky'}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <img src="#"  className="placeHolderLogoPic" />
            <LinkReact to="/"><Box className="placeHolderLogo"></Box></LinkReact>
            <LinkReact to="/"><Typography color="main.tertiary">EcoEnergy</Typography></LinkReact>
          </Box>

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
                    color: "main.tertiary",
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
                    color: "main.tertiary",
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
                    color: "main.tertiary",
                  },
                }}
                underline="none"
                color="main.secondary"
              >
                Forum
              </LinkMui>
            </LinkReact>


            <Tooltip title="Logout">
            <Button onClick={handleLogout} sx={{ color: "white" }}>
              <Avatar sx={{ bgcolor: "white", color: "main.primary" }}>
                <AdbIcon />
              </Avatar>
            </Button>
          </Tooltip>
                </Stack>
          ):(
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
                    color: "main.tertiary",
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
                    color: "main.tertiary",
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
                color: "main.tertiary",
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
                color: "main.tertiary",
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
