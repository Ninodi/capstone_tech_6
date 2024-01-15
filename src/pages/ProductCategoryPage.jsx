import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation, useParams } from 'react-router-dom'
import "../assets/styles/ProductCategoryPage.css"
import Products from '../components/Products'
 

function ProductCategoryPage() {
    const location = useLocation()
    const { mainCategory } = location.state
  
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
          <Products 
            filterOptions={filterOptions} 
            setFilterOptions={setFilterOptions} 
            capitalizeCategory={capitalizeCategory}
            mainCategory={mainCategory}
            />
        </div>
        <Footer />
    </div>
  )
}

export default ProductCategoryPage
