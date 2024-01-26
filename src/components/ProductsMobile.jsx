import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductFiltersMobile from "./ProductFiltersMobile";
import ProductDisplaySettings from "./ProductDisplaySettings";
import Banner from "./Banner";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";

function ProductsMobile({
  mainCategory,
  subcategory,
  filterOptions,
  setFilterOptions,
  filteredProd,
  setFilteredProd,
  setCurrentPage,
  prodNum,
  setProdNum,
  categoryProducts,
  pageSize,
  error,
  loading,
}) {
  const [toggleColumns, setToggleColumns] = useState(false);
  const loadBtn = useRef(null);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (prodNum >= categoryProducts?.length) {
      loadBtn.current.style.display = "none";
    } else loadBtn.current.style.display = "unset";
  }, [prodNum])

  const loadMore = () => {
    const remainingProducts = filteredProd?.length - prodNum
    const productsToLoad = Math.min(remainingProducts, pageSize)

    setProdNum((prevstate) => (prevstate += pageSize))
    setCurrentPage((prevstate) => prevstate + 1)

    if (prodNum + productsToLoad >= filteredProd?.length)
      loadBtn.current.style.display = "none"
  };
  return (
    <div className="products-mobile-container">
      <Banner />
      <ProductFiltersMobile
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        categoryProducts={categoryProducts}
        setFilteredProd={setFilteredProd}
        mainCategory={mainCategory}
        subcategory={subcategory}
      />
      <ProductDisplaySettings
        setToggleColumns={setToggleColumns}
        filteredProd={filteredProd}
      />
      {loading ? (
        <div className="loader">
            <Loading />
        </div>
      ) : filteredProd?.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No products available</h1>
      ) : (
        <div className={`products-mobile ${toggleColumns ? "one-column" : ""}`}>
          {filteredProd?.map(
            (prod, index) =>
              index < prodNum && (
                <NavLink
                  to={`/products/${mainCategory}/${subcategory}/${prod.product_name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="product-item"
                  key={prod.id}
                >
                  <div className="prod-image">
                    <img src={prod.image} alt="" />
                  </div>
                  <p style={{ color: "#000000", marginTop: "17px" }}>
                    {i18n.language === "ka"
                      ? prod.product_name_geo
                      : prod.product_name}
                  </p>
                </NavLink>
              )
          )}
        </div>
      )}
      <p
        style={{
          textAlign: "center",
          color: "#171717",
          fontWeight: "700",
          marginTop: "40px",
        }}
        className="prod-num-tracker"
      >
        Showing {Math.min(prodNum, filteredProd?.length)} out of{" "}
        {filteredProd?.length} items
      </p>
      <button id="load-more" onClick={loadMore} ref={loadBtn}>
        Load More
      </button>
    </div>
  );
}

export default ProductsMobile;
