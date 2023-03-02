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



  const NavLoggedIn = () => {
    const pages = ['Profile', 'Forum', 'Log In'];
    const settings = ['Profile', 'Forum', 'Logout'];
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
       <AppBar color="main" sx={{position:'sticky'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{display:'flex', alignItems: 'center', gap:3}}>
                <img src='#' className="placeHolderLogoPic"/>
                <div className="placeHolderLogo"></div>
                <Typography color='tertiary'>EcoEnergy</Typography>
            </Box>
          <Box sx={{ flexGrow: 0, display:'flex' }}>
          <Stack sx={{mr:5 , gap:2, alignItems:'center', display: {xs:'none', sm: 'flex', md: 'flex'}}} direction="row">

            <LinkReact to='/'>
              <LinkMui sx={{}} color='main.secondary'>Profile</LinkMui>
              
            </LinkReact>
            
            <LinkReact to='/'>
              <LinkMui color='main.secondary'>Forum</LinkMui>
            </LinkReact>
            <LinkReact to='/'>
                <LinkMui color='main.secondary'>Log Out</LinkMui>
            </LinkReact>
          </Stack>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
        </AppBar>
      </div>
    )};
  
export default NavLoggedIn;
  