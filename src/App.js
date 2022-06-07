import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Credits, Home } from "./pages";
import { API_KEY, API_URL } from "./services/api";

export const AppContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const fetchMovies = async (searchMovie) => {
    const type = searchMovie ? "search/movie" : "discover/movie";
    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}`, {
        params: {
          api_key: API_KEY,
          language: "es",
          page: 1,
          query: searchMovie,
        },
      });
      setMovies(results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        searchMovie,
        setSearchMovie,
        fetchMovies,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Credits />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
