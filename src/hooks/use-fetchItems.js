import { useCallback } from "react";

const useFetchItem = () => {
  const fetchItem = useCallback(async (url) => {
    let fetchedData;
    let loadingError = null;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      fetchedData = await response.json();
    } catch (error) {
      loadingError = error.message;
    }

    return {
      fetchedData: fetchedData,
      loadingError: loadingError,
    };
  }, []);

  return fetchItem;
};

export default useFetchItem;
