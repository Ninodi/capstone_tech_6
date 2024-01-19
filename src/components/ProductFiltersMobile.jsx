import React from "react";
import SortingOptions from "./SortingOptions";
import SetFilter from "./SetFilter";

function ProductFiltersMobile({ setFilterOptions, filterOptions, categoryProducts, setFilteredProd}) {
  const handleFilterChange = (filter) => {
    const updatedFilterOptions = SetFilter(filter, filterOptions, categoryProducts, setFilteredProd)
    setFilterOptions(updatedFilterOptions)
  };

  let activeSorting = "Most popular"

  return (
    <div className="filters-mobile">
      <h1 style={{ fontSize: "20px", marginBottom: "25px" }}>
        Women's Dresses
      </h1>
      <div className="filter-bar">
        <div className="filters">
          <button
            className={filterOptions.casual.filterState ? "active" : ""}
            onClick={() => handleFilterChange("casual")}
          >
            Casual
          </button>
          <button
            className={filterOptions.formal.filterState ? "active" : ""}
            onClick={() => handleFilterChange("formal")}
          >
            Formal
          </button>
          <button
            className={filterOptions.party.filterState ? "active" : ""}
            onClick={() => handleFilterChange("party")}
          >
            Party
          </button>
          <button
            className={filterOptions.all.filterState ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
        </div>
        <SortingOptions activeSorting={activeSorting} />
      </div>
    </div>
  );
}

export default ProductFiltersMobile;
