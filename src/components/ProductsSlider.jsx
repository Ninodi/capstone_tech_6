import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/styles/swiper.css';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import useFetch from '../hooks/useFetch';

const ProductsSlider = ({ header }) => {
  const {response} = useFetch({url: `http://94.137.187.198:9876/products/`, method: 'GET'})
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const newSlidesPerView = window.innerWidth <= 450 ? 1 : 3;
      setSlidesPerView(newSlidesPerView);
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    
    <div className="container">
      
      <h2 className='heading'>{header}</h2>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={143}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {response?.map((product) => (
          <SwiperSlide key={product.id}>
            <img className='slider-image' src={product.image} alt={product.product_name} />
            <h4>{product.product_name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;