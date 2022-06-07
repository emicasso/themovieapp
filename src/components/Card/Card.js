import React from "react";
import { POSTER_URL } from "../../services/api";
import { useListMovie } from "../../hooks/useListMovie";
import "../../sass/styles.sass";

export default function Card() {
  const { movies } = useListMovie();
  const movieList = movies.slice(0, 16).map((items, index) => {
    return (
      <div className="col-sm-12 col-xl-3 col-lg-4 col-md-6 d-flex" key={index}>
        <div className="cards">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={`${POSTER_URL}${items.poster_path}`}
                  alt="{items.title}"
                  className="flip-card-front"
                />
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
        </div>
      </div>
    );
  });

  return (
    <div className="container py-4">
      <div className="row">{movieList}</div>
    </div>
  );
}
