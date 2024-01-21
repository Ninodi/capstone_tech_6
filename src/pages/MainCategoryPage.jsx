import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { v4 as uuidv4 } from 'uuid'
import Breadcrumbs from '../components/Breadcrumbs'
import useCapitalise from '../hooks/useCapitalise'

function MainCategoryPage() {
    const {category} = useParams()
    const {response} = useFetch({url: `http://94.137.187.198:9876/category/`, method: 'GET'})
    const capitaliseCategory = useCapitalise(category)

    const subCategories = response?.filter(each => each.main_cat.toLowerCase() === category.toLowerCase()).map(each => each.secondary_cat)

    
  return (
    <div>
        <Header />
            <div className="page-container">
                <Breadcrumbs mainCategory={capitaliseCategory()}/>
                {subCategories?.map(subcategory => (
                    <div key={uuidv4()}><Link to={`/products/${category}/${subcategory.replaceAll(" ", '')}`}>{subcategory}</Link></div>
                ))}
            </div>
        <Footer />
    </div>
  )
}

export default MainCategoryPage