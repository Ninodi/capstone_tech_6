import { useState, useEffect } from 'react';


// this file not used





function useFetch(url, method, requestObj) {


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

          const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(requestObj),
        });

        if (!response.ok) {
          //throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, requestObj]);

  return { data, error, loading };
}

export default useFetch;
