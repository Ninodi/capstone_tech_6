import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation, useParams } from 'react-router-dom'
import "../assets/styles/ProductCategoryPage.css"
import Products from '../components/Products'
import useCapitalise from '../hooks/useCapitalise'
 

function ProductCategoryPage() {
    const location = useLocation()
    const { mainCategory } = location.state
  
    const [filterOptions, setFilterOptions] = useState({
      casual: {
        filterState: true,
        id: 1
      },
      formal: {
        filterState: true,
        id: 2
      },
      party: {
        filterState: true,
        id: 3
      },
      all: {
        filterState: true,
        id: 4
      },
    })

    const {category} = useParams()

    const capitaliseCategory = useCapitalise(category);

  return (
    <div>
        <Header/>
        <div className="page-container">
          <Products 
            filterOptions={filterOptions} 
            setFilterOptions={setFilterOptions} 
            capitaliseCategory={capitaliseCategory}
            mainCategory={mainCategory}
            />
        </div>
        <Footer />
    </div>
  )
}

export default ProductCategoryPage
