import axios from "axios";
import type { jsonData } from "../types";

const fetchData = async (data: jsonData) => {
  try {
    const response = await axios.get(`/data/${data}.json`);
    return response.data;
  }
  catch (error) {
    console.error("Something went wrong", error);
  }
}

export default fetchData