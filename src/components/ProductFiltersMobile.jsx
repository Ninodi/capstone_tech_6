import React from "react";
import SortingOptions from "./SortingOptions";
import SetFilter from "./SetFilter";
import { v4 as uuidv4 } from 'uuid';

function ProductFiltersMobile({ setFilterOptions, filterOptions, categoryProducts, setFilteredProd, mainCategoryPage, subCategoryPage}) {
  const handleFilterChange = (filterName) => {
    const updatedFilterOptions = SetFilter(filterName, filterOptions, categoryProducts, setFilteredProd)
    setFilterOptions(updatedFilterOptions)
  };

  let activeSorting = "Most popular"

  return (
    <div className="filters-mobile">
      <h1 style={{ fontSize: "20px", marginBottom: "25px" }}>
        {mainCategoryPage} / {subCategoryPage}
      </h1>
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
        <SortingOptions activeSorting={activeSorting} />
      </div>
    </div>
  );
}

export default ProductFiltersMobile;
