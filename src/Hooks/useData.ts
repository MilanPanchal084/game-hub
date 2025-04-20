import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import genreData from "../Data/genre";
import plateformData from "../Data/platforms";

interface FetchResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [errors, setErrors] = useState("");
  const [isloading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);

    useEffect(
      () => {
        const controller = new AbortController();
  
        setLoading(true);
        if (endpoint === "/genres") {
            setData(genreData as T[]);
            setLoading(false);
          }else if(endpoint === '/platforms/lists/parents'){
            setData(plateformData as T[]);
            setLoading(false);  
        }else{
          apiClient
            .get<FetchResponse<T>>(endpoint, {
              signal: controller.signal,
              ...requestConfig,
            })
            .then((res) => {
              setData(res.data.results);
              setLoading(false);
            })
            .catch((err) => {
              if (err instanceof CanceledError) return;
              setErrors(err.message);
              setLoading(false);
            });
        }
  
        return () => controller.abort();
      },
      deps ? [...deps] : []
    );

  return { data, errors, isloading };
};
export default useData;

// import { useState, useEffect, DependencyList } from "react";
// import apiClient from "../services/api-client";
// import { AxiosRequestConfig, CanceledError } from "axios";
// import genreData from "../Data/genre";
// import plateformData from "../Data/platforms";
// import { Genre } from "../services/globaslInterfaces";

// interface FetchResponse<T> {
//   count: number;
//   next: string;
//   previous: string;
//   results: T[];
// }

// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: any[]
// ) => {
//   const [errors, setErrors] = useState("");
//   const [isloading, setLoading] = useState(false);
//   const [data, setData] = useState<T[]>([]);

//   if(endpoint !== '/genres' && endpoint !== '/platforms/lists/parents'){
//     useEffect(
//       () => {
//         const controller = new AbortController();
  
//         setLoading(true);
//         apiClient
//           .get<FetchResponse<T>>(endpoint, {
//             signal: controller.signal,
//             ...requestConfig,
//           })
//           .then((res) => {
//             setData(res.data.results);
//             setLoading(false);
//           })
//           .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setErrors(err.message);
//             setLoading(false);
//           });
  
//         return () => controller.abort();
//       },
//       deps ? [...deps] : []
//     );
//   }else if(endpoint === '/platforms/lists/parents'){
//     useEffect( () => {  
//       const pltforms = plateformData.map( (pltform: any) => pltform)
//       setData(pltforms)
//     }, deps ? [...deps] : [])
//   }
//   else{
//     useEffect( () => {  
//       const genres = genreData.map( (genre: any) => genre)
//       setData(genres)
//     }, deps ? [...deps] : [])
//   }

//   return { data, errors, isloading };
// };
// export default useData;
