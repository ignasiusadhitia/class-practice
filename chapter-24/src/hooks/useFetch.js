// TODO: Delete later
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL + url);
        const data = await response?.data;

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, isError };
};

export default useFetch;
