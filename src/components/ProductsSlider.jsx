import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/styles/swiper.css';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const ProductsSlider = ({ slides, header }) => {
  return (
    <div className="container">
      <h2 className='heading'>{header}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={143}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt={slide.alt} />
            <h4>{slide.heading}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;