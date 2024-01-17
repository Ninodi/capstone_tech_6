import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductPagination from "./ProductPagination";
import SortingOptions from "./SortingOptions";
import ProductFilters from "./ProductFilters";
import ProductFiltersMobile from "./ProductFiltersMobile";
import ProductDisplaySettings from "./ProductDisplaySettings";
import Banner from "./Banner";
import useFetch from "../hooks/useFetch";

function Products({filterOptions, setFilterOptions, capitaliseCategory, mainCategory}) {
  const {response, error} = useFetch({url: `http://94.137.187.198:9876/products/`, method: 'GET'})
  
  
  const [prodNum, setProdNum] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const finalProd = response?.filter(each => each.category == mainCategory)
  const displayedProducts = finalProd?.slice(startIndex, endIndex)
  
  const totalPages = Math.ceil(finalProd?.length / pageSize)

  const loadBtn = useRef(null)
  
  useEffect(() => {
    if(prodNum >= response?.length){
      loadBtn.current.style.display = "none"
    }else loadBtn.current.style.display = "unset"
  }, [prodNum])

  useEffect(() => {
    setProdNum(prev => 9)
    setCurrentPage(prev => 1)
  }, [capitaliseCategory])

  const loadMore = () => {
    const remainingProducts = response?.length - prodNum
    const productsToLoad = Math.min(remainingProducts, pageSize)

    setProdNum(prevstate => prevstate += pageSize)
    setCurrentPage(prevstate => prevstate + 1)

    if(prodNum + productsToLoad >= response?.length) loadBtn.current.style.display = "none"
  }


  return (
    <div className="prod-list-container">
      <div className="products-desktop-container">
        <div className="breadcrumbs">
          <p>Home / Products / {`${capitaliseCategory()}`}</p>
          <SortingOptions activeSorting='Most popular'/>
        </div>
        <div style={{width: '100%', display: 'flex', gap: '20px'}}>
          <ProductFilters filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
          <div className="empty-list">
              {displayedProducts?.length === 0 || error
                ? <h1 style={{textAlign: 'center'}}>No products available</h1>
                : <div className="products-desktop">
                  {displayedProducts?.map((prod, index) => index < prodNum && (
                    <div onClick={() => localStorage.setItem('productId', JSON.stringify(prod.id))} key={index}>
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
        <ProductFiltersMobile  filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
        <ProductDisplaySettings />
        <div className="products-mobile">
            {response?.map((prod, index) => index < prodNum && (
              <NavLink to={`/products/women/${prod.product_name.toLowerCase().replaceAll(" ", '-')}`} className="product-item" key={index}>
                <div className="prod-image">
                  <img src={prod.image} alt="" />
                </div>
                <p style={{color: '#000000', marginTop: '17px'}}>{prod.product_name}</p>
              </NavLink>
              ))}
          </div>
          <p style={{textAlign: 'center', color: '#171717', fontWeight: '700', marginTop: '40px'}} className="prod-num-tracker">Showing {Math.min(prodNum, response?.length)} out of {response?.length} items</p>
          <button id="load-more" onClick={loadMore} ref={loadBtn}>Load More</button>
      </div>
    </div>
  );
}

export default Products;




