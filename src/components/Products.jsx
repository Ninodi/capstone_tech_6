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

function Products({filterOptions, setFilterOptions, capitaliseCategory, mainCategory}) {
  const {response, error,loading} = useFetch({url: `http://94.137.187.198:9876/products/`, method: 'GET'})
  const {response: category} = useFetch({url: `http://94.137.187.198:9876/category/`, method: 'GET'})
  const { t } = useTranslation();

  // const [mainCategoryPage, setMainCategoryPage] = useState('')
  // const [subCategoryPage, setsubCategoryPage] = useState('')

  const mainCategoryPage = category && category[mainCategory-1]?.main_cat
  const subCategoryPage = category && category[mainCategory-1]?.secondary_cat

  // const mainCategoryPage = 'huhuu'
  // const subCategoryPage = 'hii'

  const [prodNum, setProdNum] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProd, setFilteredProd] = useState([])

  const pageSize = 9
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const categoryProducts = response?.filter(each => each.category === mainCategory)
  const displayedProducts = filteredProd?.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredProd?.length / pageSize)

  const loadBtn = useRef(null)

  useEffect(() => {
    setFilteredProd(prev => categoryProducts)
    setProdNum(prev => 9)
    setCurrentPage(prev => 1)
  }, [mainCategory, response])
  
  useEffect(() => {
    if(prodNum >= displayedProducts?.length){
      loadBtn.current.style.display = "none"
    }else loadBtn.current.style.display = "unset"
  }, [prodNum])


  const loadMore = () => {
    const remainingProducts = displayedProducts?.length - prodNum
    const productsToLoad = Math.min(remainingProducts, pageSize)

    setProdNum(prevstate => prevstate += pageSize)
    setCurrentPage(prevstate => prevstate + 1)

    if(prodNum + productsToLoad >= displayedProducts?.length) loadBtn.current.style.display = "none"
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
        <div className="breadcrumbs">
          <p>{t('productItemPage.breadcrumbs')} {mainCategoryPage} / {subCategoryPage}</p>
          <SortingOptions activeSorting='Most popular'/>
        </div>
        <div style={{width: '100%', display: 'flex', gap: '20px'}}>
          <ProductFilters 
            filterOptions={filterOptions} 
            setFilterOptions={setFilterOptions}
            categoryProducts={categoryProducts}
            setFilteredProd={setFilteredProd}
            />
          <div className="empty-list">
              {displayedProducts?.length === 0 || error
                ? <h1 style={{textAlign: 'center'}}>No products available</h1>
                : <div className="products-desktop">
                  {displayedProducts?.map((prod, index) => index < prodNum && (
                    <div onClick={() => localStorage.setItem('productId', JSON.stringify(prod.id))} key={prod.id}>
                      <NavLink 
                        to={`/products/women/${prod.product_name.toLowerCase().replaceAll(" ", '-')}`}
                        className="product-item">
                        <div className="prod-image">
                          <img src={prod.image} alt="" />
                        </div>
                        <p style={{color: '#000000', marginTop: '17px'}}>{prod.product_name}</p>
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
          />
        <ProductDisplaySettings displayedProducts={displayedProducts} />
        <div className="products-mobile">
            {displayedProducts?.map((prod, index) => index < prodNum && (
              <NavLink to={`/products/women/${prod.product_name.toLowerCase().replaceAll(" ", '-')}`} className="product-item" key={prod.id}>
                <div className="prod-image">
                  <img src={prod.image} alt="" />
                </div>
                <p style={{color: '#000000', marginTop: '17px'}}>{prod.product_name}</p>
              </NavLink>
              ))}
          </div>
          <p style={{textAlign: 'center', color: '#171717', fontWeight: '700', marginTop: '40px'}} className="prod-num-tracker">Showing {Math.min(prodNum, displayedProducts?.length)} out of {displayedProducts?.length} items</p>
          <button id="load-more" onClick={loadMore} ref={loadBtn}>Load More</button>
      </div>
    </div>
  );
}

export default Products;




