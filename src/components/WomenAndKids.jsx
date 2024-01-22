import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import useFetch from '../hooks/useFetch';
import { IoIosArrowForward } from "react-icons/io";


const WomenAndKids = () => {




  const { response: bestsellerData, onFetch: fetchBestsellers } = useFetch({
    url: 'http://94.137.187.198:9876/bestseller/',
    method: 'GET',
  });

  const { response: productsData, onFetch: fetchProducts } = useFetch({
    url: 'http://94.137.187.198:9876/products/',
    method: 'GET',
  });
  const {response: category} = useFetch({url: `http://94.137.187.198:9876/category/`, method: 'GET'})


  useEffect(() => {
    fetchBestsellers();
    fetchProducts();
    window.scrollTo(0, 0);
  }, [fetchBestsellers, fetchProducts]);

  const getMatchingProducts = () => {
    if (bestsellerData && bestsellerData.length > 0 && productsData && productsData.length > 0) {
      const staticProductOrder = ['product_1', 'product_2', 'product_3', 'product_4'];

      const sortedProducts = staticProductOrder.map((key) => {
        const productId = bestsellerData[0][key];
        return productsData.find((product) => product.id === productId);
      });

      return sortedProducts;
    }

    return [];
  };


  const { t,i18n } = useTranslation();
  return (
    <div className='page-container'>
        <div>
            <h1>{t('productPage.bestSeller')}</h1>
            <div className='women-and-kids'>
              {getMatchingProducts().map((product) => (
                <NavLink className='woman-and-kids-item' to={`/products/${category && category[product.category-1].main_cat}/${category && category[product.category-1].secondary_cat.replaceAll(' ', '')}/${product.product_name.toLowerCase().replaceAll(' ', '-')}`} key={product.id}>
                    <img src={product.image} alt={product.product_name} />
                    <h5 className='category-btn'>{i18n.language === 'ka' && product?.product_name_geo
                    ? product.product_name_geo
                    : product.product_name} <IoIosArrowForward /></h5>
                    
                 </NavLink>
              ))}
            </div>
        </div>
    </div>  
  )
}
export default WomenAndKids