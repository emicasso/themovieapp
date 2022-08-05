import React, { useState } from "react";
import logo from "./MovieLogo.png";
import "./Navbar.css";
// import { useListMovie } from "../../hooks/useListMovie";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Navbar() {
  const { searchMovie, setSearchMovie, fetchMovies } = useContext(AppContext);
  const [Mobile, setMobile] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchMovie);
  };

  return (
    // <nav className="navbar">
    //   <div className="container">
    //     <a className="navbar-brand" href="/">
    //       <img src={logo} alt="" width={100} height={100} />
    //     </a>

    //     <form className="d-flex" onSubmit={handleOnSubmit}>
    //       <input
    //         className="form-control me-2 text-white"
    //         type="search"
    //         placeholder="🔍 Ingrese nombre"
    //         aria-label="Search"
    //         value={searchMovie}
    //         onChange={(e) => setSearchMovie(e.target.value)}
    //       />
    //       <button
    //         className="btn btn-outline-warning rounded-pill"
    //         type="submit"
    //       >
    //         Buscar
    //       </button>
    //     </form>
    //   </div>
    // </nav>
    <>
      <header>
        <div className="container flexSB mx-auto">
          <nav className="flexSB align-items-center">
            <div className="logo">
              <img src="./images/MovieLogo.png" alt="" />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Series</a>
              </li>
              <li>
                <a href="/">Movies</a>
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <form className="d-flex" onSubmit={handleOnSubmit}>
              <input
                className="form-control me-2 text-black"
                type="search"
                placeholder="🔍 Ingrese nombre"
                aria-label="Search"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
              />
              <button className="btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
            <button className="btn btnbg">Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
}
