import React from "react";
import { POSTER_URL } from "../../services/api";
import "../../sass/styles.sass";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function Card() {
  const { movies } = useContext(AppContext);
  const movieList = movies.slice(0, 16).map((items, index) => {
    return (
      <div className="col-sm-12 col-xl-3 col-lg-4 col-md-6 d-flex" key={index}>
        <div className="cards">
          <Link to={`/movies/${items.id}`}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {items.poster_path ? (
                    <img
                      src={`${POSTER_URL}${items.poster_path}`}
                      alt="{items.title}"
                      className="flip-card-front"
                    />
                  ) : (
                    <div className="movie-placeholder">No Image found</div>
                  )}
                </div>
                <div className="card-img-overlay text-white">
                  <h4 className="card-title">{items.title}</h4>
                  <small></small>
                  <small className="card-text">
                    Raiting: {items.vote_average}
                  </small>
                  <small className="card-text">
                    Estrenado: {items.release_date}
                  </small>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container py-4">
      <div className="container">
        <div className="row mx-auto">
          <h1>Peliculas 🎬</h1>
        </div>
      </div>
      <div className="row">{movieList}</div>
    </div>
  );
}
