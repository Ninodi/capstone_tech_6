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
    const {response} = useFetch({url: `/category/`, method: 'GET'})
    const capitaliseCategory = useCapitalise(category)


    const subCategories = response?.filter(each => each.main_cat.toLowerCase() === category.toLowerCase()).map(each => each.secondary_cat)

    console.log(subCategories)

    
  return (
    <div>
        <Header />
            <div className="page-container">
                <Breadcrumbs mainCategory={capitaliseCategory()}/>
                <SubcategoriesList category={category} subCategories={subCategories}/>
            </div>
        <Footer />
    </div>
  )
}

export default MainCategoryPage