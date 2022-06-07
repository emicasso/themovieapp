import React from "react";
import "../../sass/detail.sass";
import StarRatings from "react-star-ratings";
import { POSTER_URL } from "../../services/api";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { useNavigate } from "react-router";

export default function CardDetail() {
  const { movieDetail } = useMovieDetail();
  const navigate = useNavigate();

  function handleOnClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="container">
      <div className="row py-2 justify-content-center">
        <div className="_card py-2">
          <div className="_card-thumbnail">
            {movieDetail.poster_path ? (
              <img
                src={`${POSTER_URL}${movieDetail.poster_path}`}
                alt="{items.title}"
                className="flip-card-front"
              />
            ) : (
              <div className="movie-placeholder text-white">No Image found</div>
            )}
          </div>
          <div className="_card-body">
            <span className="_card-title">{movieDetail.title}</span>
            <div>
              <span className="_card-title">{movieDetail.tagline}</span>
              <span className="stars">
                <StarRatings
                  rating={movieDetail.vote_average}
                  starRatedColor="yellow"
                  numberOfStars={10}
                  name="rating"
                  starDimension="22px"
                  starSpacing="4px"
                />
                <span> {movieDetail.vote_average}</span>
              </span>
            </div>
            <span>Estrenada: {movieDetail.release_date}</span>
            <p className="_card-description">{movieDetail.overview}</p>
            <div className="d-flex">
              <div className="py-2 justify-content-center align-items-center">
                <button
                  className="btn btn-outline-light rounded-pill"
                  onClick={handleOnClick}
                >
                  Volver al Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
