import { useCallback, useEffect, useState } from 'react'
import { API_BASE_URL } from '../apiConfig'; 

function useFetch({url, method}) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(false)
  const [loading,setLoading] = useState(null)

  const onFetch = useCallback (() => {
    fetch(`${API_BASE_URL}${url}`, {
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
    .finally(() => setLoading(false))


    return () => {
      setResponse(null)
      setError(false)
      setLoading(false)
    }
  }, [url, method])

  useEffect(() => {
    onFetch()
  }, [onFetch])

  return {response, error,loading, onFetch}

}

export default useFetch