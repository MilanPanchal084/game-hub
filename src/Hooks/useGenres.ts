// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

// export interface Genre{
//     id: number;
//     name: string;
//     slug: string;
//     image_background: string
// }

// interface GenreResponse {
//   count: number;
//   next: string;
//   previous: string;
//   results: Genre[];
// }

// const useGenres = ()=>{
//   const [errors, setErrors] = useState("");
//   const [isloading, setLoading] = useState(false);
//   const [genres, setGenres] = useState<Genre[]>([])

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true)
//     apiClient
//       .get<GenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results)
//         setLoading(false)
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setErrors(err.message);
//         setLoading(false)
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, errors, isloading };
// }
// export default useGenres;