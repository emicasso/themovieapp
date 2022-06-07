import React from "react";
import TMDB from "./TMDB.svg";
import "../../sass/navbar.sass";
// import { useListMovie } from "../../hooks/useListMovie";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Navbar() {
  const {searchMovie, setSearchMovie, fetchMovies} = useContext(AppContext)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchMovie);
  };

  return (
    <nav className="navbar py-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={TMDB} alt="" width="auto" height={24} />
        </a>
        <form className="d-flex" onSubmit={handleOnSubmit}>
          <input
            className="form-control me-2 text-white"
            type="search"
            placeholder="🔍 Ingrese nombre"
            aria-label="Search"
            value={searchMovie}
            onChange={(e)=> setSearchMovie(e.target.value)}
          />
          <button className="btn btn-outline-light rounded-pill" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}
