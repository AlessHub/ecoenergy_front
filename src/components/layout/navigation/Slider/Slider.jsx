import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import { Container } from "@mui/system";

import { Link } from "@mui/material";
import Item from "./Item";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { forum } from "../../../../services/user-service";

const Slider = () => {
  const [forums, setForums] = useState([])
 

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
      <Typography color="main.tertiary" sx={{ m: '2rem' }} variant="h4">
        Latest forum posts
      </Typography>
      <Container
        sx={{
          maxWidth: { xs: "250px", sm: "700px", md: "900px", xl: "1200px" },
        }}
      >
        <Swiper
          freeMode={true}
          observer={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          observeParents={true}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
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
          color="main.primary"
          sx={{
            mr: 3,
            mt: 2,
            display: "flex",
            justifyContent: "flex-end",
            "&:hover": {
              color: "main.tertiary",
            },
          }}
          underline="none"
          variant="text"
        >
          More...
        </Link>
      </Container>
    </>
  );
};

export default Slider;
