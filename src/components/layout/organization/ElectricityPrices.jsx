import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ElectricityPrices = () => {
  const formatHour = (hour) => {
    const firstHour = hour.substring(0, 2);
    return `${firstHour}:00`;
  };
  const [priceNow, setPriceNow] = useState([]);
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://proxy.cors.sh/https://api.preciodelaluz.org/v1/prices/now?zone=PCB",
        {
          headers: {
            "x-cors-api-key": "temp_d3327eae2b0f5beff70458b15678dae8",
          },
        }
      )
      .then((response) => setPriceNow(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://proxy.cors.sh/https://api.preciodelaluz.org/v1/prices/all?zone=PCB",
        {
          headers: {
            "x-cors-api-key": "temp_d3327eae2b0f5beff70458b15678dae8",
          },
        }
      )
      .then((response) => setPrices(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  const [priceNowBgColor, setPriceNowBgColor] = useState("main.primary");
  const [priceNowTextColor, setPriceNowTextColor] = useState("main.secondary");

  useEffect(() => {
    if (priceNow["is-cheap"] && priceNow["is-under-avg"]) {
      setPriceNowBgColor("main.success");
      setPriceNowTextColor("main.secondary");
    } else if (!priceNow["is-cheap"] && priceNow["is-under-avg"]) {
      setPriceNowBgColor("main.warning");
      setPriceNowTextColor("main.secondary");
    } else {
      setPriceNowBgColor("main.danger");
      setPriceNowTextColor("main.secondary");
    }
  }, [priceNow]);

  
  console.log(priceNow);
  return (
    <>
      <Typography
        variant="h5"
        color="main.tertiary"
        sx={{ mb: 2 }}
        fontWeight={600}
      >
        Today's electricity prices
      </Typography>
      <Box
        bgcolor={priceNowBgColor}
        sx={{ mb: 5, width: "100%" }}
        textAlign="center"
        p={2}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          color={priceNowTextColor}
        >
          <Box sx={{outline:'1px solid',
            height:'70px',
            width:'70px',
            borderRadius:'50%',
            outlineOffset:'10px'}}>
            <Typography sx={{fontSize:'0.75rem', mb:1, mt:0.80}}>Price now</Typography>
            <Typography>
              {(() => {
                switch (true) {
                    case !priceNow["is-cheap"] && priceNow["is-under-avg"]:
                    return "Moderate";
                    case !priceNow["is-cheap"] && !priceNow["is-under-avg"]:
                    return "Expensive";
                    default:
                      return "Cheap";
                  }
              })()}
            </Typography>
          </Box>
          <Box>{priceNow.price} €/kWh</Box>
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {Object.values(prices).map((price, index) => {
          let bgColor, textColor;
          switch (true) {
            case !price["is-cheap"] && price["is-under-avg"]:
              bgColor = "main.warning";
              textColor = "main.secondary";
              break;
            case !price["is-cheap"] && !price["is-under-avg"]:
              bgColor = "main.danger";
              textColor = "main.secondary";
              break;
            default:
              bgColor = "main.primary";
              textColor = "main.secondary";
          }

          return (
            <Typography
              key={index}
              variant="body1"
              color={textColor}
              sx={{
                p: 2,
                borderRadius: 3,
                mb: 5,
                width: "80%",
                justifyContent: "center",
                display: "flex",
                bgcolor: bgColor,
                gap: 5,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <AccessTimeIcon sx={{ mr: 1 }} />
                {`${formatHour(price.hour)}`}
              </Box>
              <Box>{`${price.price} €/kWh`}</Box>
            </Typography>
          );
        })}
      </Box>
    </>
  );
};

export default ElectricityPrices;
