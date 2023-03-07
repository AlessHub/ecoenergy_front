import { useState, useEffect } from "react";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import TabsChoice from "../components/layout/navigation/TabsChoice";
import CardAdvice from "../components/layout/organization/CardAdvice";
import Footer from "../components/layout/navigation/Footer";

import { adviceAll } from "../services/user-service";

import { Typography, Box } from "@mui/material";

const Advice = () => {
  const [value, setValue] = useState(0);
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const { data } = await adviceAll({ headers });
        setAdvice(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAdvice();
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredAdvice = advice.filter((a) => {
    if (value === 1 && a.type === "1") {
      return true;
    } else if (value === 2 && a.type === "2") {
      return true;
    } else if (value === 0) {
      return true;
    }
    return false;
  });

  return (
    <>
      <NavPublic />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          gap: 3,
          margin: 2,
          scrollMarginBottom: 2,
        }}
      >
        <Typography color="main.tertiary" sx={{ mb: 1 }} variant="h3">
          Advice
        </Typography>

        <TabsChoice value={value} handleTabChange={handleTabChange} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            minHeight: "80vh",
            gap: "4rem",
          }}
        >
          {filteredAdvice.map((a) => (
            <CardAdvice key={a.id} text={a.content} tab={a.type} />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Advice;
