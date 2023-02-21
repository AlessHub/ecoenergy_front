import React from "react";
import {
  Box,
  Typography,
  Container,
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
    const firstHour = hour.substring(0, 2);
    return `${firstHour}:00`;
  };
  const [priceNow, setPriceNow] = useState([]);
  const [prices, setPrices] = useState([]);

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

  useEffect(() => {
    async function fetchData() {
      try {
        const responseNow = await axios.get(
          "https://proxy.cors.sh/https://api.preciodelaluz.org/v1/prices/now?zone=PCB",
          {
            headers: {
              "x-cors-api-key": "temp_d3327eae2b0f5beff70458b15678dae8",
            },
          }
        );
        setPriceNow(responseNow.data);

        const responseAll = await axios.get(
          "https://proxy.cors.sh/https://api.preciodelaluz.org/v1/prices/all?zone=PCB",
          {
            headers: {
              "x-cors-api-key": "temp_d3327eae2b0f5beff70458b15678dae8",
            },
          }
        );
        setPrices(responseAll.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

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
          <Box
            sx={{
              outline: "1px solid",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
              outlineOffset: "10px",
            }}
          >
            <Typography sx={{ fontSize: "0.75rem", mb: 1, mt: 0.8 }}>
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
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            xl: "row",
          },
          flexWrap: {
            xs: "nowrap",
            sm: "wrap",
            md: "wrap",
            xl: "wrap",
          },
          gap: {
            xs: "0",
            sm: "5px",
            md: "5px",
            xl: "5px",
          },
          marginRight: {
            xs: 0,
            sm: "60px",
            md: "60px",
            xl: "60px",
          },
          marginLeft: {
            xs: 0,
            sm: "60px",
            md: "60px",
            xl: "60px",
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Object.values(currentItems).map((price, index) => {
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
                justifyContent: "center",
                display: "flex",
                bgcolor: bgColor,
                gap: 5,
                minWidth: "250px",
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          color="success"
          onChange={handlePageChange}
          size={isTablet ? "medium" : "small"}
          sx={{ mb: 4 }}
          renderItem={(item) => {
            if (item.type === "next") {
              return <PaginationItem {...item} disabled={!hasNextPage} />;
            }
            return <PaginationItem {...item} />;
          }}
        />
      </Box>
    </>
  );
};

export default ElectricityPrices;
