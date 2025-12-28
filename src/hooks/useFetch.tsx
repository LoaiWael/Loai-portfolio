import axios from "axios";
import type { jsonData } from "../types";
import { useEffect, useState } from "react";


const useFetch = <T,>(url: jsonData): [T | null] => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async (data: jsonData) => {
      try {
        const response = await axios.get<T>(`data/${data}.json`);
        setData(response.data);
      }
      catch (error) {
        console.error("Something went wrong", error);
      }
    }
    fetchData(url);
  }, [url]);

  return [data];
}

export default useFetch;