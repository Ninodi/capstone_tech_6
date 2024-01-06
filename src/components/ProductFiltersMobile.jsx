import React from 'react'
import SortingOptions from './SortingOptions'

function ProductFiltersMobile() {
    let activeSorting = 'Most popular'

    const toggleActive = (e) => {
      e.target.classList.toggle('active')

    }
  return (
    <div className='filters-mobile'>
        <h1 style={{fontSize: '20px', marginBottom: '25px'}}>Women's Dresses</h1>
        <div className="filter-bar">
            <div className="filters">
                <button className='casual' onClick={toggleActive}>Casual</button>
                <button className='formal' onClick={toggleActive}>Formal</button>
                <button className='party' onClick={toggleActive}>Party</button>
                <button className='all' onClick={toggleActive}>All</button>
            </div>
            <SortingOptions activeSorting={activeSorting}/>
        </div>
    </div>
  )
}

export default ProductFiltersMobile