import React from "react";
import FilterIcon from "../assets/icons/filterIcon.png";
import SetFilter from "./SetFilter";
import { v4 as uuidv4 } from 'uuid';

function ProductFilters({ setFilterOptions, filterOptions, categoryProducts, setFilteredProd }) {

  const handleFilterChange = (filterName) => {
    const updatedFilterOptions = SetFilter(filterName, filterOptions, categoryProducts, setFilteredProd)
    setFilterOptions(prev => updatedFilterOptions)

  };


  return (
    <div className="filters-desktop">
      <div className="filter-bar-title">
        <p>Filters</p>
        <div>
          <img src={FilterIcon} alt="" />
        </div>
      </div>
      <div className="filter-options-bar">
        <p>Dress Style</p>
        <div className="filter-options">
          {filterOptions?.map(filter => (
            <label key={uuidv4()}>
              {filter.filterName}
              <input
                type="checkbox"
                checked={filter.filterState}
                onChange={() => handleFilterChange(filter.filterName)}
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
        {/* <button id="apply-filter">Apply Filter</button> */}
      </div>
    </div>
  );
}

export default ProductFilters;
