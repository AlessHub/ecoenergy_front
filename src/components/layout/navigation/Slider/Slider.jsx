import { react, useState, useEffect } from "react";
import Item from "./Item";
import { Container } from "@mui/system";
import { Box, Link, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { forum } from "../../../../services/user-service";


const Slider = () => {
  const [forums, setForums] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
  

    const getForums = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          };
        
        const { data } = await forum({headers});
        setForums(data)
      } catch (error) {
        console.error(error)
      }
    }
    getForums()
  }, [])

  



  return (
    <>
      {isLoggedIn ? (
      <Container
        sx={{
          maxWidth: { xs: "250px", sm: "700px", md: "900px", xl: "1200px" },
        }}
      >
        <Typography color="main.tertiary"
        sx={{ mt: "3rem", mb: "1rem", fontWeight: 'bold' }}
        variant="h4">New Forum Posts</Typography>
        <Swiper
          freeMode={true}
          observer={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          observeParents={true}          
          modules={[FreeMode, Navigation, Autoplay]}
          grabCursor={true}
          loop={true}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
        >
          {forums.slice(0, 6).map((item, i) => (
            <SwiperSlide key={item.id} className="swiperSlide">
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link
          href="/forum"
          underline="none"
          variant="text"
        >
          <Box
          color="main.buttons"
          sx={{
            mr: 3,
            mt: 2,
            fontWeight:'900',
            display: "flex",
            justifyContent: "flex-end",
            "&:hover": {
              color: "main.tertiary",
            },
          }}
          
          >
          More...

          </Box>
        </Link>
      </Container>
      ):(<div></div>)}
    </>
  );
};

export default Slider;
