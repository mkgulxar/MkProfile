// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Swiperslide = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
          delay:2500,
          disableOnInteraction: false
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide> 
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
  );
};
export default Swiperslide;
