import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import "../assets/styles/ProductCategoryPage.css";
import Products from '../components/Products';
import useCapitalise from '../hooks/useCapitalise';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';

function ProductCategoryPage() {
  const { category, subcategory } = useParams()
  const {response} = useFetch({url: `/filter/`, method: 'GET'})

  const mainCategory = useCapitalise(category)
  const subCategory= useCapitalise(subcategory)

  const { t,i18n } = useTranslation();

  const filters = response?.map(eachFilter => ({
    filterName: i18n.language === 'ka' && eachFilter?.filter_geo
      ? eachFilter.filter_geo
      : eachFilter.filter,
    id: eachFilter.id,
    filterState: true
  }));
  

  const allCategoryId = filters?.length + 1;
  const allCategory = {
    filterName: t("AllProductPage.all"),
    id: allCategoryId,
    filterState: true
  };

  filters?.push(allCategory);

  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setFilterOptions(filters || []);
  }, [response, category, t]);

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
  );
}

export default ProductCategoryPage;
