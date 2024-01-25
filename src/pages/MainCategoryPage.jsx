import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Breadcrumbs from '../components/Breadcrumbs'
import useCapitalise from '../hooks/useCapitalise'
import SubcategoriesList from '../components/SubcategoriesList'
import '../assets/styles/MainCategoryPage.css'

function MainCategoryPage() {
    const {category} = useParams()
    const {response, loading} = useFetch({url: `/category/`, method: 'GET'})
    const capitaliseCategory = useCapitalise(category)

    const filteredResponse = response?.filter(each => each.main_cat.toLowerCase() === category.toLowerCase())
    const subCategories = filteredResponse?.map(each => each.secondary_cat)
    const subCategoriesImages = filteredResponse?.map(each => each.image)

    console.log(subCategoriesImages)

    
  return (
    <div>
        <Header />
            <div className="page-container">
                <Breadcrumbs mainCategory={capitaliseCategory()}/>
                <SubcategoriesList category={category} subCategories={subCategories} subCategoriesImages={subCategoriesImages}/>
            </div>
        <Footer />
    </div>
  )
}

export default MainCategoryPage