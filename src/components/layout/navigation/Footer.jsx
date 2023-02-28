import React from "react";
import { BottomNavigation, Container, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BottomNavigationAction } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <>
      <BottomNavigation
        sx={{ minHeight: "100px", width: "100%" }}

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
          <Typography
            textAlign="left"
            sx={{ fontSize: 12 }}
            color="main.secondary"
          >
            <Box color="main.tertiary">Links</Box>
            <Box>Community Policy</Box>
            <Box>Contact</Box>
          </Typography>
          <Typography
            textAlign="left"
            sx={{ fontSize: 12 }}
            color="main.secondary"
          >
            <Box color="main.tertiary">About us</Box>
            <Box>Our works</Box>
            <Box>FAQ</Box>
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="main.tertiary">
            <Box>Social Media</Box>
            <Box>
              <BottomNavigationAction
                sx={{ color: "main.secondary", p: 0, minWidth: "20px" }}
                icon={<TwitterIcon />}
              />
              <BottomNavigationAction
                sx={{ color: "main.secondary", p: 0, minWidth: "20px" }}
                icon={<FacebookIcon />}
              />
              <BottomNavigationAction
                sx={{ color: "main.secondary", p: 0, minWidth: "20px" }}
                icon={<InstagramIcon />}
              />
            </Box>
          </Typography>
        </Container>
      </BottomNavigation>
    </>
  );
};

export default Footer;
