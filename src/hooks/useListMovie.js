// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { API_KEY, API_LISTMOVIES, API_SEARCH, API_URL } from "../services/api";

// export function useListMovie() {
//   const [movies, setMovies] = useState([]);
//   const [searchMovie, setSearchMovie] = useState("");

//   const fetchMovies = async (searchMovie) => {
//     const type = searchMovie ? "search/movie" : "discover/movie"
//     try {
//       const {
//         data: { results },
//       } = await axios.get(`${API_URL}/${type}`, {
//         params: {
//           api_key: API_KEY,
          
//           query: searchMovie,
//         },
//       });
//       setMovies(results);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return {
//     movies,
//     searchMovie,
//     setSearchMovie,
//     fetchMovies
//   };
// }
