import axios from "axios";
import { useCallback } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import { Credits, Home } from "./pages";
import { API_KEY, API_URL } from "./services/api";

export const AppContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");

  const fetchMovies = useCallback(async (searchMovie) => {
    const type = searchMovie ? "search/movie" : "discover/movie";
    try {
      const {
        data: { results, total_pages },
      } = await axios.get(`${API_URL}/${type}`, {
        params: {
          api_key: API_KEY,
          language: "es",
          page: page,
          query: searchMovie,
        },
      });
      setMovies(results);
      setTotalPage(total_pages)
    } catch (error) {}
  },[page])

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  function backPage() {
    if(page > 1){
      setPage((page) => page - 1);
    }
  }

  function nextPage() {
    if(page + 1 !== totalPage){
      setPage((page) => page + 1);
    }
  }

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        searchMovie,
        setSearchMovie,
        fetchMovies,
        backPage,
        nextPage,
        page,
        totalPage
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Credits />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
