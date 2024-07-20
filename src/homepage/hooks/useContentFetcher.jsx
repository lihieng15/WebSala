import React, { useState, useEffect, useCallback } from "react";
import { fetchContentsByArtName } from "../api/Api";
import { debounce } from "lodash";

const useContentFetcher = (articleName) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchContentsByArtName(articleName);
      setContents(Array.isArray(response.object) ? response.object : []);
    } catch (error) {
      setError(`Error fetching ${articleName} articles: ${error.message}`);
    }
    setLoading(false);
  }, [articleName]);

  useEffect(() => {
    const debouncedFetchData = debounce(fetchData, 300);
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel();
    };
  }, [fetchData]);

  return { contents, loading, error };
};

export default useContentFetcher;
