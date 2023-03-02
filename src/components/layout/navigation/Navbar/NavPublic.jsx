import { Toolbar, Stack, Button, Container, AppBar } from "@mui/material";
import React from "react";
import { Link as LinkReact } from "react-router-dom";
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

const NavPublic = () => {
  const pages = [
    { text: "Profile", href: "/profile" },
    { text: "Forum", href: "/forum" },
    { text: "Log In", href: "/login" },
    { text: "Register", href: "/signup" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <div>
      <AppBar color="main"sx={{position:'sticky'}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <img src="#"  className="placeHolderLogoPic" />
            <LinkReact to="/"><Box className="placeHolderLogo"></Box></LinkReact>
            <LinkReact to="/"><Typography color="main.tertiary">EcoEnergy</Typography></LinkReact>
          </Box>
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
          </Stack>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
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
              {pages.map((page) => (
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
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavPublic;
