import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductPagination from "./ProductPagination";
import SortingOptions from "./SortingOptions";
import ProductFilters from "./ProductFilters";
import ProductFiltersMobile from "./ProductFiltersMobile";
import ProductDisplaySettings from "./ProductDisplaySettings";
import Banner from "./Banner";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";
import { BounceLoader } from 'react-spinners'
import Breadcrumbs from "./Breadcrumbs";

function Products({filterOptions, setFilterOptions, mainCategory, subcategory}) {
  const {response, error,loading} = useFetch({url: `http://94.137.187.198:9876/products/`, method: 'GET'})
  const {response: category} = useFetch({url: `http://94.137.187.198:9876/category/`, method: 'GET'})
  const { t,i18n } = useTranslation();

  const categoryInfo = category?.filter(each => each.main_cat.toLowerCase().replaceAll(' ', '') === mainCategory.toLowerCase() && each.secondary_cat.toLowerCase().replaceAll(' ', '') === subcategory.toLowerCase())
  let categoryId;
  if (categoryInfo && categoryInfo.length > 0) {
  categoryId = categoryInfo[0].id
  }

  const [prodNum, setProdNum] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProd, setFilteredProd] = useState([])

  const pageSize = 9
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const categoryProducts = response?.filter(each => each.category === categoryId)
  const displayedProducts = filteredProd?.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredProd?.length / pageSize)

  const loadBtn = useRef(null)

  useEffect(() => {
    setFilteredProd(prev => categoryProducts)
    setProdNum(prev => 9)
    setCurrentPage(prev => 1)

  }, [categoryId, response])
  
  useEffect(() => {

    if(prodNum >= categoryProducts?.length){
      loadBtn.current.style.display = "none"
    }else loadBtn.current.style.display = "unset"
  }, [prodNum])


  const loadMore = () => {
    const remainingProducts = filteredProd?.length - prodNum
    const productsToLoad = Math.min(remainingProducts, pageSize)

    setProdNum(prevstate => prevstate += pageSize)
    setCurrentPage(prevstate => prevstate + 1)

    if(prodNum + productsToLoad >= filteredProd?.length) loadBtn.current.style.display = "none"
  }
  
  
  if(loading && !response) 
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
    <div className="prod-list-container">
      <div className="products-desktop-container">
        <div className="breadcrumbs-bar-desktop">
          <Breadcrumbs mainCategory={mainCategory} subcategory={subcategory}/>
          <SortingOptions activeSorting='Most popular'/>
        </div>
        <div style={{width: '100%', display: 'flex', gap: '20px'}}>
          <ProductFilters 
            filterOptions={filterOptions} 
            setFilterOptions={setFilterOptions}
            categoryProducts={categoryProducts}
            setFilteredProd={setFilteredProd}
            subcategory={subcategory}
            mainCategory={mainCategory}
            />
          <div className="empty-list">
              {displayedProducts?.length === 0 || error
                ? <h1 style={{textAlign: 'center'}}>{t("AllProductPage.noProducts")}</h1>
                : <div className="products-desktop">
                  {displayedProducts?.map((prod, index) => index < prodNum && (
                    <div key={prod.id}>
                      <NavLink 
                        to={`/products/${mainCategory}/${subcategory}/${prod.product_name.toLowerCase().replaceAll(" ", '-')}`}
                        className="product-item">
                        <div className="prod-image">
                          <img src={prod.image} alt="" />
                        </div>
                        <p style={{color: '#000000', marginTop: '17px'}}>{i18n.language === 'ka' ? prod.product_name_geo : prod.product_name}</p>
                      </NavLink>
                    </div>
                  ))}
                </div>
              }
            {displayedProducts?.length !== 0 
              ? <ProductPagination 
              totalPages={totalPages} 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              setProdNum={setProdNum}
              />
              : null
            }
          </div>
        </div>
      </div>
      <div className="products-mobile-container">
        <Banner />
        <ProductFiltersMobile  
          filterOptions={filterOptions} 
          setFilterOptions={setFilterOptions}
          categoryProducts={categoryProducts}
          setFilteredProd={setFilteredProd}
          mainCategory={mainCategory}
          subcategory={subcategory}
          />
        <ProductDisplaySettings filteredProd={filteredProd} />
        <div className="products-mobile">
            {filteredProd?.map((prod, index) => index < prodNum && (
              <NavLink to={`/products/${mainCategory}/${subcategory}/${prod.product_name.toLowerCase().replaceAll(" ", '-')}`} className="product-item" key={prod.id}>
                <div className="prod-image">
                  <img src={prod.image} alt="" />
                </div>
                <p style={{color: '#000000', marginTop: '17px'}}>{prod.product_name}</p>
              </NavLink>
              ))}
          </div>
          <p style={{textAlign: 'center', color: '#171717', fontWeight: '700', marginTop: '40px'}} className="prod-num-tracker">Showing {Math.min(prodNum, filteredProd?.length)} out of {filteredProd?.length} items</p>
          <button id="load-more" onClick={loadMore} ref={loadBtn}>Load More</button>
      </div>
    </div>
  );
}

export default Products;




