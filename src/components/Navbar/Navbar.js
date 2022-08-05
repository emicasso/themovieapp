import React from "react";
import logo from "./MovieLogo.png";
import "../../sass/navbar.sass";
// import { useListMovie } from "../../hooks/useListMovie";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Navbar() {
  const { searchMovie, setSearchMovie, fetchMovies } = useContext(AppContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchMovie);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width={100} height={100} />
        </a>

        <form className="d-flex" onSubmit={handleOnSubmit}>
          <input
            className="form-control me-2 text-white"
            type="search"
            placeholder="🔍 Ingrese nombre"
            aria-label="Search"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <button
            className="btn btn-outline-warning rounded-pill"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}
