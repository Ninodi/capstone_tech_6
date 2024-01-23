import {  NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../assets/styles/bestseller.css';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { BounceLoader } from 'react-spinners';

const BestSeller = () => {
  const { t, i18n } = useTranslation();

  const { response: bestsellerData, onFetch: fetchBestsellers } = useFetch({
    url: '/bestseller/',
    method: 'GET',
  });

  const { response: productsData, loading: productsLoading, onFetch: fetchProducts } = useFetch({
    url: '/products/',
    method: 'GET',
  });

  const {response: category} = useFetch({url: `/category/`, method: 'GET'})

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

  if(productsLoading) 
  return <div className='loader'>
    <BounceLoader
        className='spiner'
        color= {'#FF6767'} 
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>

  return (
    <div>
      <div className="page-container best-seller-container">
        <div className="best-seller-section">
          <h2>{t('productPage.bestSeller')}</h2>
          <hr />
        </div>
        <div className="product-section">
          <div className="best-seller-links">
            {getMatchingProducts().map((product) => (
              <NavLink to={`/products/${category && category[product.category-1].main_cat}/${category && category[product.category-1].secondary_cat.replaceAll(' ','')}/${product.product_name.toLowerCase().replaceAll(' ','-')}`} key={product.id}>
                <div
                  className="best-seller-links-item"
                  onClick={() => localStorage.setItem('productId', JSON.stringify(product.id))}
                >
                  <img src={product.image} alt="" />
                  <h5>{i18n.language === 'ka' && product?.product_name_geo
                    ? product.product_name_geo
                    : product.product_name}</h5>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;