import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import "../assets/styles/ProductCategoryPage.css"
import Products from '../components/Products'
 

function ProductCategoryPage() {
    const [filterOptions, setFilterOptions] = useState({
      casual: false,
      formal: false,
      party: false,
      all: false,
    })

    const {category} = useParams()

    const capitalizeCategory = () => {
      let firstLetter = category[0].toLocaleUpperCase()
      return firstLetter + category.slice(1)
    }
  return (
    <div>
        <Header/>
        <div className="page-container">
          <Products filterOptions={filterOptions} setFilterOptions={setFilterOptions} capitalizeCategory={capitalizeCategory}/>
        </div>
        <Footer />
    </div>
  )
}

export default ProductCategoryPage


            {/* <div className="products-mobile-container">
              <Banner />
              <ProductFiltersMobile  />
              <ProductDisplaySettings />
            </div>
            <div className="desktop-container">
              <div className="breadcrumbs">
                  <p>Home / Products / {capitalizeCategory()}</p>
                  <SortingOptions activeSorting='Most popular'/>
              </div>
              <ProductFilters filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
              <Products />
            </div> */}