import React from "react";
import {
  Box,
  Typography, 
  useTheme,
  useMediaQuery,
  PaginationItem,
  Pagination,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


const ElectricityPrices = () => {

  const formatHour = (hour) => {
    // Esto nos dara una string vacia si el lenght es menor de 2, y sino sacará los 2 primeros para obtener la hora
    // de esta manera el test funcionará en Jest
    if (typeof hour !== "string" || hour.length < 2) {
      return "";
    }
    const firstHour = hour.substring(0, 2);
    return `${firstHour}:00`;
  };

  const [priceNow, setPriceNow] = useState([]);
  const [prices, setPrices] = useState([]);

  const [priceNowBgColor, setPriceNowBgColor] = useState("main.primary");
  const [priceNowTextColor, setPriceNowTextColor] = useState("main.secondary");

  useEffect(() => {
    if (priceNow["is-cheap"] && priceNow["is-under-avg"]) {
      setPriceNowBgColor("main.primary");
      setPriceNowTextColor("main.secondary");
    } else if (!priceNow["is-cheap"] && priceNow["is-under-avg"]) {
      setPriceNowBgColor("main.warning");
      setPriceNowTextColor("main.secondary");
    } else {
      setPriceNowBgColor("main.danger");
      setPriceNowTextColor("main.secondary");
    }
  }, [priceNow]);

  const API_URL_NOW =
    "https://proxy.cors.sh/https://api.preciodelaluz.org/v1/prices/now?zone=PCB";

  const API_URL_ALL =
    "https://proxy.cors.sh/https://api.preciodelaluz.org/v1/prices/all?zone=PCB";

  const headers = {
    headers: {
      "x-cors-api-key": "temp_60f4b6691b98d4695b2cba8636278353",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseNow, responseAll] = await Promise.all([
          axios.get(API_URL_NOW, headers),
          axios.get(API_URL_ALL, headers),
        ]);
        setPriceNow(responseNow.data);
        setPrices(responseAll.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [pageCount, setPageCount] = useState(5);

  useEffect(() => {
    if (isLaptop) {
      setPageCount(3);
      setItemsPerPage(8);
    } else if (isTablet) {
      setPageCount(4);
      setItemsPerPage(6);
    } else {
      setPageCount(6);
      setItemsPerPage(4);
    }
  }, [isLaptop, isTablet]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Object.values(prices).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(Math.ceil(value));
  };
  const hasNextPage = indexOfLastItem < Object.values(prices).length;

  return (
    <>
      <Typography
        color="main.tertiary"
        sx={{ mt: "3rem", mb: "1rem", fontWeight: 'bold' }}
        variant="h4"
      >
        Today's Electricity Prices
      </Typography>
      <Box
        bgcolor={priceNowBgColor}
        sx={{ mb: 5, width: "100%" }}
        textAlign="center"
        p={2}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          color={priceNowTextColor}
        >
          <Box
            sx={{
              outline: "1px solid",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
              outlineOffset: "10px",
            }}
          >
            <Typography
              data-testid="price-now"
              sx={{ fontSize: "0.75rem", mb: 1, mt: 0.8 }}
            >
              Price now
            </Typography>
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
          <Typography>{priceNow.price} €/kWh</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          flexWrap: {
            xs: "nowrap",
            sm: "wrap",
          },
          gap: {
            xs: "0",
            sm: "5px",
          },
          marginRight: {
            xs: 0,
            sm: "60px",
          },
          marginLeft: {
            xs: 0,
            sm: "60px",
          },
          alignItems: "center",
          justifyContent: "center",
          p: {
            lg: 5,
          },
        }}
      >
        {Object.values(currentItems).map((price, index) => {
          let bgColor, textColor;
          switch (true) {
            case !price["is-cheap"] && price["is-under-avg"]:
              bgColor = "main.danger";
              textColor = "white";
              break;
            case !price["is-cheap"] && !price["is-under-avg"]:
              bgColor = "main.warning";
              textColor = "white";
              break;
            default:
              bgColor = "main.primary";
              textColor = "white";
          }

          return (
            <Typography
              key={index}
              variant="div"
              color={textColor}
              sx={{
                p: 2,
                borderRadius: 3,
                mb: 5,
                justifyContent: "center",
                display: "flex",
                bgcolor: bgColor,
                gap: 5,
                minWidth: "250px",
              }}
            >
              <Typography variant="body1" sx={{ display: "flex" }}>
                <AccessTimeIcon sx={{ mr: 1 }} />
                {`${formatHour(price.hour)}`}
              </Typography>
              <Typography>{`${price.price} €/kWh`}</Typography>
            </Typography>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          test-page={currentPage}
          count={pageCount}
          page={currentPage}
          data-testid="pagination-current-page"
          color="success"
          onChange={handlePageChange}
          size={isTablet ? "medium" : "small"}
          sx={{ mb: 4}}
          renderItem={(item) => {
            if (item.type === "next") {
              return (
                <PaginationItem
                  {...item}
                  data-testid="next-button"
                  disabled={!hasNextPage}
                />
              );
            }
            return <PaginationItem {...item} />;
          }}
        />
      </Box>
    </>
  );
};

export default ElectricityPrices;
