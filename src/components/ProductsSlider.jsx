import React, { useEffect, useState } from 'react';
import "../assets/styles/productsSlider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/styles/swiper.css';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const ProductsSlider = ({ header,products }) => {
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
  const getRandomItems = (array, numItems) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  const randomItems = getRandomItems(products, 4);
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
        loop={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {randomItems.map((product) => (
          <SwiperSlide key={product.id}>
            <img className='product-slider-image' src={product.image} alt={product.product_name} />
            <h4>{product.product_name}</h4>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default ProductsSlider;