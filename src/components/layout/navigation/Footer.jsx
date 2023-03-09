import React from "react";
import { BottomNavigation, Container, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BottomNavigationAction } from "@mui/material";
import { Box } from "@mui/system";
import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <>
      <BottomNavigation

        sx={{ minHeight: "100px", width: "100%", marginTop: 2 }}
        
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            pl: 0,
            pr: 0,
          }}
        >
          <Box
            
            sx={{ fontSize: 12, textAlign:"left" }}
            color="main.secondary"
          >
            <Box color="main.primary">Links</Box>
            <LinkButton to='/communityPolicy' text='Community Policy'color='main.secondary'/>
            <LinkButton to='mailto: abc@example.com' text='Contact'color='main.secondary'/>
          </Box>
          <Box
            
            sx={{ fontSize: 12, textAlign:"left" }}
            color="main.secondary"
          >
            <Box color="main.primary">About us</Box>
            <LinkButton to='/' text='Our Works'color='main.secondary'/>
          </Box>
          <Box sx={{ fontSize: 12 }} color="main.primary">
            <Box>Social Media</Box>
            <Box>
              <BottomNavigationAction
                sx={{ color: "main.primary", p: 0, minWidth: "20px" }}
                icon={<TwitterIcon />}
              />
              <BottomNavigationAction
                sx={{ color: "main.primary", p: 0, minWidth: "20px" }}
                icon={<FacebookIcon />}
              />
              <BottomNavigationAction
                sx={{ color: "main.primary", p: 0, minWidth: "20px" }}
                icon={<InstagramIcon />}
              />
            </Box>
          </Box>
        </Container>
      </BottomNavigation>
    </>
  );
};

export default Footer;
