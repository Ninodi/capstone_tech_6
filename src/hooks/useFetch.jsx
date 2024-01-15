import React, { useCallback, useEffect, useState } from 'react'

function useFetch({url, method}) {
  const [response, setResponse] = useState(null)

  const onFetch = useCallback (() => {
    fetch('http://94.137.187.198:9876/products/', {
      method,
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => {
      if(!res.ok) throw new Error("Reponse failed")
      return res.json()
    })
    .then(data => {
      setResponse(data)
    })
    .catch(err => console.log(err))
    .finally(() =>  console.log('done'))


    return () => {
      setResponse(null)
    }
  }, [url, method])

  useEffect(() => {
    onFetch()
  }, [onFetch])

  return {response}

}

export default useFetch