import { useCallback, useEffect, useState } from 'react'

function useFetch({url, method}) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(false)

  const onFetch = useCallback (() => {
    fetch('http://94.137.187.198:9876/products/', {
      method,
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => {
      if(!res.ok) {
        setError(true)
        throw new Error("Reponse failed")
      }
      return res.json()
    })
    .then(data => {
      setResponse(data)
    })
    .catch(err => console.log(err))
    .finally(() =>  console.log('done'))


    return () => {
      setResponse(null)
      setError(false)
    }
  }, [url, method])

  useEffect(() => {
    onFetch()
  }, [onFetch])

  return {response, error}

}

export default useFetch