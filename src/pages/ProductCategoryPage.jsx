import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation, useParams } from 'react-router-dom'
import "../assets/styles/ProductCategoryPage.css"
import Products from '../components/Products'
import useCapitalise from '../hooks/useCapitalise'
import useFetch from '../hooks/useFetch'

 

function ProductCategoryPage() {
    const location = useLocation()
    const { mainCategory } = location.state
    const {response} = useFetch({url: `http://94.137.187.198:9876/filter/`, method: 'GET'})

    const filters = response?.map(eachFilter => (
      {
        filterName: eachFilter.filter,
        id: eachFilter.id,
        filterState: true
      }
      ))
  
      const allCategoryId = filters?.length + 1
      const allCategory = {
        filterName: 'All',
        id: allCategoryId,
        filterState: true
      };

      filters?.push(allCategory)

      const [filterOptions, setFilterOptions] = useState([])

      useEffect(() => {
        setFilterOptions(filters || []);
      }, [response, mainCategory]);

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
