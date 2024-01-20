import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../assets/styles/ProductCategoryPage.css"
import Products from '../components/Products'
import useCapitalise from '../hooks/useCapitalise'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

 

function ProductCategoryPage() {
    const { category, subcategory } = useParams()
    const {response} = useFetch({url: `http://94.137.187.198:9876/filter/`, method: 'GET'})

    const mainCategory = useCapitalise(category)
    const subCategory= useCapitalise(subcategory)

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
      }, [response, subcategory]);


    const capitaliseCategory = useCapitalise(category);

  return (
    <div>
        <Header/>
        <div className="page-container">
          <Products 
            filterOptions={filterOptions} 
            setFilterOptions={setFilterOptions} 
            capitaliseCategory={capitaliseCategory}
            subcategory={subCategory()}
            mainCategory={mainCategory()}
            />
        </div>
        <Footer />
    </div>
  )
}

export default ProductCategoryPage
