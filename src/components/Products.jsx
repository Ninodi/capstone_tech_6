import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductsDesktop from "./ProductsDesktop";
import ProductsMobile from "./ProductsMobile";

function Products({filterOptions, setFilterOptions,}) {
  const {category, subcategory} = useParams()

  const {response, error, loading} = useFetch({url: `/products/`, method: 'GET'})
  const {response: categoryResponse, loading: categoryLoading} = useFetch({url: `/category/`, method: 'GET'})


  const categoryInfo = categoryResponse?.filter(each => each.main_cat.toLowerCase().replaceAll(' ', '') === category.toLowerCase() && each.secondary_cat.toLowerCase().replaceAll(' ', '') === subcategory.toLowerCase())


  let categoryId;
  if (categoryInfo && categoryInfo.length > 0) {
  categoryId = categoryInfo[0].id
  }

  
  const [prodNum, setProdNum] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProd, setFilteredProd] = useState([])

  const pageSize = 9
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const categoryProducts = response?.filter(each => each.category === categoryId)
  const displayedProducts = filteredProd?.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredProd?.length / pageSize)

  

  useEffect(() => {
    setFilteredProd(prev => categoryProducts)
    setProdNum(prev => 9)
    setCurrentPage(prev => 1)

  }, [categoryId, response])
  



  return (
    <div className="prod-list-container">
      <ProductsDesktop 
        mainCategory={category}
        subcategory={subcategory}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        setFilteredProd={setFilteredProd}
        displayedProducts={displayedProducts}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setProdNum={setProdNum}
        prodNum={prodNum}
        categoryProducts={categoryProducts}
        error={error}
        loading={loading}
      />
      <ProductsMobile 
        mainCategory={category}
        subcategory={subcategory}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        filteredProd={filteredProd}
        setFilteredProd={setFilteredProd}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setProdNum={setProdNum}
        prodNum={prodNum}
        categoryProducts={categoryProducts}
        error={error}
      />
    </div>
  );
}

export default Products;




