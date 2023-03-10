import React, { useState, useEffect } from "react";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import AvatarPlaceholder from "../../src/assets/avatar_template2.png";
import { Container } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import SimpleBarCharts from "../components/layout/organization/SimpleBarCharts";
import Footer from "../components/layout/navigation/Footer";
import Buttons from "../components/layout/buttons/Buttons";
import BarData from "../components/layout/organization/BarData";
import jwt_decode from "jwt-decode";
import { userSingle } from "../services/user-service";

const kWhPrice = 0.1781;
const kgCO2PerKWh = 0.26
const data1 = [
  { name: "Jan", expense: 60 },
  { name: "Feb", expense: 70 },
  { name: "Mar", expense: 65 },
  { name: "Apr", expense: 85 },
  { name: "May", expense: 48 },
  { name: "Jun", expense: 69 },
  { name: "Jul", expense: 78 },
  { name: "Aug", expense: 85 },
  { name: "Sep", expense: 48 },
  { name: "Oct", expense: 69 },
  { name: "Nov", expense: 78 },
  { name: "Dec", expense: 78 },
];
const data2 = [
  { name: "Jan", expense: 50 },
  { name: "Feb", expense: 60 },
  { name: "Mar", expense: 75 },
  { name: "Apr", expense: 85 },
  { name: "May", expense: 68 },
  { name: "Jun", expense: 79 },
  { name: "Jul", expense: 88 },
  { name: "Aug", expense: 85 },
  { name: "Sep", expense: 58 },
  { name: "Oct", expense: 49 },
  { name: "Nov", expense: 98 },
  { name: "Dec", expense: 98 },
];

const calculateCarbonFootprint = (data) => {
  let totalCarbonFootprint = 0;
  for (let i = 0; i < data.length; i++) {
    totalCarbonFootprint += data[i].expense/kWhPrice * kgCO2PerKWh;
  }
  return totalCarbonFootprint.toFixed(0);
};

function Profile() {
  const carbonFootprint = calculateCarbonFootprint(data1);
  const [selectedOption, setSelectedOption] = useState("electric");
  const color = selectedOption === "electric" ? "#42CF94" : "#1263ce";
  const data = selectedOption === "electric" ? data1 : data2;

  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const user_id = decodedToken.sub;

  useEffect(() => {
    const getSingleuser = async () => {
      if (user_id) {
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await userSingle(user_id, { headers });
        const profile = await response.data;

        setUser(profile);
      }
    };

    getSingleuser();
  }, [user_id]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <NavPublic />
      <Container
        sx={{
          p: { xs: 0, sm: 0, md: 0, xl: 0 },
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          alt="thumbnail"
          image={AvatarPlaceholder}
          sx={{
            overflow: "hidden",
            width: "140px",
            height: "140px",
            maxWidth: "150px",
            mt: "20px",
          }}
        />

        <Typography color="main.tertiary" variant="h4" fontWeight="bold">
          {user?.name}
        </Typography>
        <Typography color="main.tertiary" sx={{ mb: "5rem", fontWeight:'700' }} variant="h6">
           {carbonFootprint} kg CO2
        </Typography>
      </Container>
      <Container sx={{ p: { xs: 0, sm: 0, md: 20, lg: 10, xl: 4 } }}>
        <Typography color="main.tertiary" variant="h5" fontWeight="bold">
          Monthly Costs
        </Typography>

        <Buttons handleOptionClick={handleOptionClick} />

        <SimpleBarCharts color={color} data={data} />
        {data.map((datas, id) => {
          return <BarData color={color} datas={datas} key={id} />;
        })}
      </Container>

      <Footer />
    </>
  );
}

export default Profile;
