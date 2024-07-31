import { useState, useEffect } from 'react';

export const useFetch = (url, fallbackData) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetching from server failed, using fallback data:", error);
        setData(fallbackData);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, fallbackData]);

  return { data, isLoading, error };
};
