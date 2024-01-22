import React from 'react'
import SingleCol from '../assets/img/singleColumnDisplay.png'
import TwoCol from '../assets/img/twoColumnDisplay.png'

function ProductDisplaySettings({filteredProd, setToggleColumns}) {
  return (
    <div className='prod-display-sett'>
        <p>Products</p>
        <div className="display-settings">
            <p>{filteredProd?.length} items</p>
            <div className="display-options">
                <div className="single-column" style={{width: '20px', height: '20px'}} onClick={prev => setToggleColumns(true)}> 
                    <img src={SingleCol} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="two-columns" style={{width: '20px', height: '20px'}} onClick={prev => setToggleColumns(false)}>
                    <img src={TwoCol} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplaySettings