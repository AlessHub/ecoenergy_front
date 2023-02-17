import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper";
import { Container } from "@mui/system";
import {Button} from "@mui/material";
import {Link} from "@mui/material";
import Item from "./Item";
import "swiper/css";
import "swiper/css/pagination";
import sliderinfo from "../../../../utils/sliderinfo.json";
import "swiper/css/navigation";
import { Typography } from "@mui/material";

const Slider = () => {
  return (
    <Container sx={{maxWidth: {xs:'250px', sm:'700px', md:'900px', xl:'1200px'}}}>
      <Typography color="main.tertiary"  sx={{translate:'0px 75px'}} variant="h4">Latest forum posts</Typography>
      <Swiper
        observer={true}
        observeParents={true}
        modules={[FreeMode, Navigation, Pagination, Autoplay]}
        grabCursor={true}
        parallax={true}
        loop={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          620:{
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        
        {sliderinfo.map((item, i) => (
          <SwiperSlide key={item.id} className="swiperSlide">
            <Item item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="#" color="main.primary" sx={{mr:3, mt:2, display:"flex", justifyContent:"flex-end", "&:hover": {
      color:'main.tertiary'
    }}}underline="none" variant="text">More...</Link>
    </Container>
  );
};

export default Slider;
