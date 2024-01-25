import React from 'react'
import { BounceLoader } from "react-spinners";


function Loading() {
  return (
    <div className="loader">
        <BounceLoader
            className="spiner"
            color={"#FF6767"}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
}

export default Loading