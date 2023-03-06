import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { advice } from '../../../services/user-service';
import Toolbar from '@mui/material/Toolbar';
import CardAdvice from '../organization/CardAdvice';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import GridForum from '../organization/GridForum';



const drawerWidth = 240;

function AdminSideBar(props) {
  const [advices, setAdvices] = useState([]);
  const [showForum, setShowForum] = useState(true);

  useEffect(() => {
    const getAdvices = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        const { data } = await advice({ headers });
        setAdvices(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAdvices();
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleForumClick = () => {
    setShowForum(true);
  };

  const handleAdvicesClick = () => {
    setShowForum(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key="Forum" disablePadding>
          <ListItemButton onClick={handleForumClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Forum" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Advices" disablePadding>
          <ListItemButton onClick={handleAdvicesClick}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Advices" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', zIndex: '0' }}>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        {showForum ? <GridForum /> : advices.map((advice) => <CardAdvice key={advice.id} text={advice.content} image="src/assets/avatar_template.png" />)}
      </Box>
    </Box>
  );
}

export default AdminSideBar;