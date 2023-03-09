import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TabsChoice = ({value, handleTabChange}) => {
  

  return (
    <div>
      <Box>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab
            label="All"
            sx={{
              margin: 0,
              padding: 0,
              gap: 0,
              textTransform: "none",
              minWidth: "20vw",
              fontSize: "1rem",
            }}
          />
          <Tab
            label="Electricity"
            sx={{
              margin: 0,
              padding: 0,
              gap: 0,
              textTransform: "none",
              minWidth: "20vw",
              fontSize: "1rem",
            }}
          />
          <Tab
            label="Water"
            sx={{
              margin: 0,
              padding: 0,
              gap: 0,
              textTransform: "none",
              minWidth: "20vw",
              fontSize: "1rem",
            }}
          />
        </Tabs>
      </Box>
    </div>
  );
};
export default TabsChoice;
