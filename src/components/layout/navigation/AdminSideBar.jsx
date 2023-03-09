import { React, useState } from "react";
import PostAdvice from "../organization/PostAdviceForm";
import GridForum from "../organization/GridForum";
import AdviceRender from "../organization/AdviceRender";
import ButtonGreen from "../navigation/ButtonGreen";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";

const drawerWidth = 240;

function AdminSideBar(props) {


  const [currentPage, setCurrentPage] = useState("advices");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    {
      label: "Advices",
      icon: <InboxIcon />,
      id: "advices",
    },
    {
      label: "Add Advice",
      icon: <AddCircleIcon />,
      id: "add advice",
    },
    {
      label: "Forums",
      icon: <MailIcon />,
      id: "forums",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pages.map(({ label, icon, id }) => (
          <ListItem
            key={id}
            disablePadding
            onClick={() => setCurrentPage(id)}
          >
            <ListItemButton>
              <ListItemIcon sx={{color:'main.primary'}}>{icon}</ListItemIcon>
              <ListItemText sx={{color:'white'}} primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderPage = () => {
    switch (currentPage) {
      case "advices":
        return <AdviceRender/>;
      case "forums":
        return <GridForum buttons={[
          <Button variant="contained" sx={{ bgcolor:'main.danger'}} onClick={() => handleDelete(forum.id)}>
            Delete
          </Button>,
          <Button sx={{bgcolor:'main.primary'}} variant="contained">
            Edit Forum
          </Button>,
        ]}/>;
      case "add advice":
        return <PostAdvice/>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", zIndex: "0" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
      
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {renderPage()}
      </Box>
    </Box>
  );
}

export default AdminSideBar;
