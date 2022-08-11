import React from "react";
import "../../sass/styles.sass";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { POSTER_URL } from "../../services/api";
import { Loading } from "../../components";

export default function Card() {
  const { movies, backPage, nextPage, page, totalPage, loading } =
    useContext(AppContext);

  const movieList = movies.slice(0, 20).map((items, index) => {
    return (
      <div
        className="col-sm-12 col-xl-3 col-lg-6 col-md-6 d-flex justify-content-center"
        key={index}
      >
        <div className="cards">
          <Link to={`/movies/${items.id}`}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front border border-white">
                  {items.poster_path ? (
                    <img
                      src={`${POSTER_URL}${items.poster_path}`}
                      alt="{items.title}"
                      className="flip-card-front"
                    />
                  ) : (
                    <div className="_movie-placeholder text-white">
                      No Image found
                    </div>
                  )}
                </div>
                <div className="card-img-overlay text-white">
                  <h4 className="card-title">{items.title}</h4>
                  <small></small>
                  <span className="stars">
                    <StarRatings
                      rating={items.vote_average}
                      starRatedColor="yellow"
                      numberOfStars={10}
                      name="rating"
                      starDimension="20px"
                      starSpacing="4px"
                    />
                    <span> {items.vote_average}</span>
                  </span>
                  <small className="card-text">
                    Fecha Estreno: {items.release_date}
                  </small>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  if (loading) {
    return (
      <div className="row">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container py-4">
      <div className="container">
        <div className="row mx-auto">
          <h1>Peliculas 🎬</h1>
        </div>
      </div>
      <div className="row">{movieList}</div>
      <div className="row text-center pt-5">
        <div className="container">
          {page !== 1 ? (
            <button
              onClick={backPage}
              className="btn btn-outline-warning rounded-pill mx-2"
            >
              Prev
            </button>
          ) : null}
          <span>
            Pagina {page} de {totalPage}
          </span>
          {page + 1 === totalPage ? null : (
            <button
              onClick={nextPage}
              className="btn btn-outline-warning rounded-pill mx-2"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
