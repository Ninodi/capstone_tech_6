import React from "react";
import SortingOptions from "./SortingOptions";
import SetFilter from "./SetFilter";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";
import Breadcrumbs from "./Breadcrumbs";

function ProductFiltersMobile({ setFilterOptions, filterOptions, categoryProducts, setFilteredProd, mainCategory, subcategory}) {
  const { t } = useTranslation();
  const handleFilterChange = (filterName) => {
    const updatedFilterOptions = SetFilter(filterName, filterOptions, categoryProducts, setFilteredProd, t)
    setFilterOptions(updatedFilterOptions)
  };


  return (
    <div className="filters-mobile">
      <div style={{marginBottom: '25px', color: '#171717', fontSize: '16px', fontWeight: '600'}}>
        <Breadcrumbs mainCategory={mainCategory} subcategory={subcategory}/>
      </div>
      <div className="filter-bar">
        <div className="filters">
          {filterOptions?.map(filter => (
            <button
              key={uuidv4()}
              className={filter.filterState ? "active" : ""}
              onClick={() => handleFilterChange(filter.filterName)}
            >
              {filter.filterName}
            </button>
          ))}
        </div>
        <SortingOptions setFilteredProd={setFilteredProd}/>
      </div>
    </div>
  );
}

export default ProductFiltersMobile;
