import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import SortingOptions from "./SortingOptions";
import ProductFilters from "./ProductFilters";
import ProductPagination from "./ProductPagination";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";


function ProductsDesktop({
  mainCategory,
  subcategory,
  filterOptions,
  setFilterOptions,
  displayedProducts,
  setFilteredProd,
  totalPages,
  currentPage,
  setCurrentPage,
  prodNum,
  setProdNum,
  categoryProducts,
  error,
  loading,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div className="products-desktop-container">
      <div className="breadcrumbs-bar-desktop">
        <Breadcrumbs mainCategory={mainCategory} subcategory={subcategory} />
        <SortingOptions setFilteredProd={setFilteredProd}/>
      </div>
      <div style={{ width: "100%", display: "flex", gap: "20px" }}>
        <ProductFilters
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          categoryProducts={categoryProducts}
          setFilteredProd={setFilteredProd}
          subcategory={subcategory}
          mainCategory={mainCategory}
        />
        <div className="empty-list">
          {error ? (
            <h1 style={{ textAlign: "center" }}>
              {t("AllProductPage.noProducts")}
            </h1>
          ) : (
            <div>
              {loading ? (
                <Loading />
              ) : displayedProducts?.length > 0 ? (
                <div className="products-desktop">
                  {displayedProducts?.map(
                    (prod, index) =>
                      index < prodNum && (
                        <div key={prod.id}>
                          <NavLink
                            to={`/products/${mainCategory}/${subcategory}/${prod.product_name
                              .toLowerCase()
                              .replaceAll(" ", "-")}`}
                            className="product-item"
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
                        </div>
                      )
                  )}
                </div>
              ) : (
                <h1 style={{ textAlign: "center" }}>
                  {t("AllProductPage.noProducts")}
                </h1>
              )}
            </div>
          )}
          {displayedProducts?.length !== 0 ? (
            <ProductPagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setProdNum={setProdNum}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProductsDesktop;
