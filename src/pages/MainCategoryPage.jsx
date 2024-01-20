import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, NavLink, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function MainCategoryPage() {
    const {category} = useParams()
    const {response} = useFetch({url: `http://94.137.187.198:9876/category/`, method: 'GET'})

    const subCategories = response?.filter(each => each.main_cat.toLowerCase() === category.toLowerCase()).map(each => each.secondary_cat)

    console.log(subCategories)
  return (
    <div>
        <Header />
            <div className="page-container">
                {subCategories?.map(subcategory => (
                    <div><Link to={`/products/${category}/${subcategory.replaceAll(" ", '')}`}>{subcategory}</Link></div>
                ))}
            </div>
        <Footer />
    </div>
  )
}

export default MainCategoryPage