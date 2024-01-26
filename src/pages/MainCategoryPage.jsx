import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Breadcrumbs from '../components/Breadcrumbs'
import useCapitalise from '../hooks/useCapitalise'
import SubcategoriesList from '../components/SubcategoriesList'
import '../assets/styles/MainCategoryPage.css'
import Loading from '../components/Loading'

function MainCategoryPage() {
    const {category} = useParams()
    const {response, loading} = useFetch({url: `/category/`, method: 'GET'})
    const capitaliseCategory = useCapitalise(category)

    const filteredResponse = response?.filter(each => each.main_cat.replaceAll(' ', '').toLowerCase() === category.replaceAll(' ', '').toLowerCase())
    const subCategories = filteredResponse?.map(each => each.secondary_cat)
    const subCategoriesImages = filteredResponse?.map(each => each.image)

    
  return (
    <div>
        <Header />
          {loading
            ? <Loading />
            :
            <div className="page-container">
              <Breadcrumbs mainCategory={capitaliseCategory()}/>
              <SubcategoriesList category={capitaliseCategory()} subCategories={subCategories} subCategoriesImages={subCategoriesImages}/>
            </div>
          }
        <Footer />
    </div>
  )
}

export default MainCategoryPage