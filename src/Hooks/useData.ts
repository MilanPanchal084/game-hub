import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { T } from "framer-motion/dist/types.d-B50aGbjN";

interface FetchResponse<T>{
  count: number;
  next: string;
  previous: string;
  results: T[];
}


const useData = <T>(endpoint: string)=>{
  const [errors, setErrors] = useState("");
  const [isloading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([])

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false)
      });

    return () => controller.abort();
  }, []);

  return { data, errors, isloading };
}
export default useData;