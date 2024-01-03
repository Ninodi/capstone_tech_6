import React, { useEffect, useRef, useState } from "react";
import products from "./ProductList";
import { NavLink } from "react-router-dom";
import ProductPagination from "./ProductPagination";
import SortingOptions from "./SortingOptions";
import ProductFilters from "./ProductFilters";
import ProductFiltersMobile from "./ProductFiltersMobile";
import ProductDisplaySettings from "./ProductDisplaySettings";
import Banner from "./Banner";

function Products({filterOptions, setFilterOptions, capitalizeCategory}) {
  const [prodNum, setProdNum] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9
  const totalPages = Math.ceil(products.length / pageSize)

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const displayedProducts = products.slice(startIndex, endIndex)

  const loadBtn = useRef(null)
  
  useEffect(() => {
    console.log(prodNum)
    if(prodNum >= products.length){
      loadBtn.current.style.display = "none"
    }else loadBtn.current.style.display = "unset"
  }, [prodNum])

  const loadMore = () => {
    const remainingProducts = products.length - prodNum
    const productsToLoad = Math.min(remainingProducts, pageSize)

    setProdNum(prevstate => prevstate += pageSize)
    setCurrentPage(prevstate => prevstate + 1)

    if(prodNum + productsToLoad >= products.length) loadBtn.current.style.display = "none"
  }
  return (
    <div className="prod-list-container">
      <div className="products-desktop-container">
        <div className="breadcrumbs">
          <p>Home / Products / {`${capitalizeCategory()}`} / Dresses</p>
          <SortingOptions activeSorting='Most popular'/>
        </div>
        <div style={{display: 'flex', gap: '20px'}}>
          <ProductFilters filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
          <div>
            <div className="products-desktop">
                {displayedProducts.map((prod, index) => (
                  <NavLink to={`/products/women/${prod.name.toLowerCase().replaceAll(" ", '-')}`} className="product-item" key={index}>
                    <div className="prod-image">
                      <img src={prod.img} alt="" />
                    </div>
                    <p style={{color: '#000000', marginTop: '17px'}}>{prod.name}</p>
                  </NavLink>
                ))}
            </div>
            <ProductPagination 
              totalPages={totalPages} 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              setProdNum={setProdNum}
            />
          </div>
        </div>
      </div>
      <div className="products-mobile-container">
        <Banner />
        <ProductFiltersMobile  filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
        <ProductDisplaySettings />
        <div className="products-mobile">
            {products.map((prod, index) => index < prodNum && (
              <NavLink to={`/products/women/${prod.name.toLowerCase().replaceAll(" ", '-')}`} className="product-item" key={index}>
                <div className="prod-image">
                  <img src={prod.img} alt="" />
                </div>
                <p style={{color: '#000000', marginTop: '17px'}}>{prod.name}</p>
              </NavLink>
              ))}
          </div>
          <p style={{textAlign: 'center', color: '#171717', fontWeight: '700', marginTop: '40px'}} className="prod-num-tracker">Showing {Math.min(prodNum, products.length)} out of {products.length} items</p>
          <button id="load-more" onClick={loadMore} ref={loadBtn}>Load More</button>
      </div>
    </div>
  );
}

export default Products;




