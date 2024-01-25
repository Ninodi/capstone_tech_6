import React, { useState, useEffect, useRef } from "react";
import SortingArrow from '../assets/img/sortingArrow.png'
import { use } from "i18next";

function SortingOptions() {
  const [activeSorting, setActiveSorting] = useState('New First')
  const [showSortings, setShowSortings] = useState(false)

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSortings(false)
      }
    };

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    };
  }, [])

  const selectSorting = (value) => {
    setActiveSorting(prev => value)
    setShowSortings(false)
  }
  return (
    <div className="sortings" ref={dropdownRef}>
      <div className="sorting-button" onClick={() => setShowSortings(prev => !prev)}>
        <p>
          <span>Sort by: </span>
          {activeSorting}
        </p>
        <div className="sorting-arrow">
          <img src={SortingArrow} alt="" />
        </div>
      </div>
      <div className={`sorting-options ${showSortings ? 'visible' : ''}`}>
        <div className="sorting-option" onClick={() => selectSorting('New First')}>New First</div>
        <div className="sorting-option" onClick={() => selectSorting('Old First')}>Old First</div>
        <div className="sorting-option" onClick={() => selectSorting('A to Z')}>A to Z</div>
        <div className="sorting-option" onClick={() => selectSorting('Z to A')}>Z to A</div>
      </div>
    </div>
  );
}

export default SortingOptions;
