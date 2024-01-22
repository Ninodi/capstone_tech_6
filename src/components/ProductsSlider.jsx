import React, { useEffect, useState } from 'react';
import "../assets/styles/productsSlider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/styles/swiper.css';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductsSlider = ({ header, products, category, subcategory }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const newSlidesPerView = window.innerWidth <= 640 ? 1 : 3;
      setSlidesPerView(newSlidesPerView);
      setShowArrows(window.innerWidth > 450);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const sortedProducts = Array.isArray(products) ? [...products].sort(() => 0.5 - Math.random()) : [];
  const randomItems = sortedProducts.slice(0, 6);
  const {  i18n } = useTranslation();


  return (
    <div className="page-container">
      <h2 className='heading'>{header}</h2>
      <div className="swiper-container">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={143}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={showArrows}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {randomItems.map((product) => (
            <SwiperSlide key={product.id}>
              <div>
                <NavLink to={`/products/${category}/${subcategory}/${product.product_name.toLowerCase().replaceAll(' ', '-')}`}>
                  <img className='product-slider-image' src={product.image} alt={product.product_name} />
                  <h4 className='product-title'>
                    {i18n.language === 'ka' && product.product_name_geo
                      ? product.product_name_geo
                      : product.product_name}
                  </h4>
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlider;