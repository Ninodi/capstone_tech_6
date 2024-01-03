import React from "react";
import FilterIcon from "../assets/icons/filterIcon.png";
function ProductFilters({ setFilterOptions, filterOptions }) {

  const handleCheckboxChange = (filter) => {
    const updatedFilterOptions = { ...filterOptions }
    updatedFilterOptions[filter] = !updatedFilterOptions[filter]

    if (filter === "all") {
      if (updatedFilterOptions.all) {
        Object.keys(updatedFilterOptions).forEach((key) => {
          updatedFilterOptions[key] = true
        })
      } else {
        Object.keys(updatedFilterOptions).forEach((key) => {
          if (key !== "all") {
            updatedFilterOptions[key] = false
          }
        })
      }
    } else {
      updatedFilterOptions.all = false
    }
    setFilterOptions(updatedFilterOptions)
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
              checked={filterOptions.casual}
              onChange={() => handleCheckboxChange("casual")}
            />
            <span className="checkmark"></span>
          </label>
          <label>
            Formal
            <input
              type="checkbox"
              checked={filterOptions.formal}
              onChange={() => handleCheckboxChange("formal")}
            />
            <span className="checkmark"></span>
          </label>
          <label>
            Party
            <input
              type="checkbox"
              checked={filterOptions.party}
              onChange={() => handleCheckboxChange("party")}
            />
            <span className="checkmark"></span>
          </label>
          <label>
            All
            <input
              type="checkbox"
              checked={filterOptions.all}
              onChange={() => handleCheckboxChange("all")}
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
