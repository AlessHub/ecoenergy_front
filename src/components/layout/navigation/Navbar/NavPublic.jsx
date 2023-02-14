import {
    Toolbar,
    Stack,
    Button,
    Container,
    AppBar
  } from "@mui/material";
import React from "react";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui} from "@mui/material";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



  const NavPublic = () => {
    const pages = ['Profile', 'Forum', 'Log In'];
    const settings = ['Profile', 'Forum', 'Log In'];
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
    }

    return (
      <div>
       <AppBar color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{display:'flex', alignItems: 'center', gap:3}}>
                <img src='#' className="placeHolderLogoPic"/>
                <div className="placeHolderLogo"></div>
                <Typography color='tertiary'>EcoEnergy</Typography>
            </Box>
            <Stack sx={{mr:5 , gap:2, alignItems:'center', display: {xs:'none', sm: 'flex', md: 'flex'}}} direction="row">
            <LinkReact to='/'>
              <LinkMui sx={{}} color='secondary'>Profile</LinkMui>
            </LinkReact>
            
            <LinkReact to='/'>
              <LinkMui color='secondary'>Forum</LinkMui>
            </LinkReact>
            <LinkReact to='/'>
                <LinkMui color='secondary'>Log In</LinkMui>
            </LinkReact>
          </Stack>
          <Box sx={{ flexGrow: 1, justifyContent:'flex-end', display: { xs: 'flex', sm:'none', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        </AppBar>
      </div>
    )};
  
  export default NavPublic;
  