import React from "react";
import FilterIcon from "../assets/icons/filterIcon.png";
import SetFilter from "./SetFilter";

function ProductFilters({ setFilterOptions, filterOptions, categoryProducts, setFilteredProd }) {

  const handleFilterChange = (filter) => {
    const updatedFilterOptions = SetFilter(filter, filterOptions, categoryProducts, setFilteredProd)
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
          <label>
            Casual
            <input
              type="checkbox"
              checked={filterOptions.casual.filterState}
              onChange={() => handleFilterChange("casual")}
            />
            <span className="checkmark"></span>
          </label>
          <label>
            Formal
            <input
              type="checkbox"
              checked={filterOptions.formal.filterState}
              onChange={() => handleFilterChange("formal")}
            />
            <span className="checkmark"></span>
          </label>
          <label>
            Party
            <input
              type="checkbox"
              checked={filterOptions.party.filterState}
              onChange={() => handleFilterChange("party")}
            />
            <span className="checkmark"></span>
          </label>
          <label>
            All
            <input
              type="checkbox"
              checked={filterOptions.all.filterState}
              onChange={() => handleFilterChange("all")}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <button id="apply-filter">Apply Filter</button>
      </div>
    </div>
  );
}

export default ProductFilters;
