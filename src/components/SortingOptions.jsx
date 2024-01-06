import React from "react";
import SortingArrow from '../assets/img/sortingArrow.png'

function SortingOptions({activeSorting}) {
  return (
    <div className="sortings">
      <div className="sorting-button">
        <p>
          <span>Sort by: </span>
          {activeSorting}
        </p>
        <div className="sorting-arrow">
          <img src={SortingArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SortingOptions;
