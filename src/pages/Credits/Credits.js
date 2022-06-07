import React from "react";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { POSTER_URL } from "../../services/api";
import "../../sass/detail.sass";

export default function Credits() {
  const { movieDetail } = useMovieDetail();

  console.log(movieDetail);

  return (
    <div className="container">
      <div className="row py-5">
        <div className="_card py-2">
          <div className="_card-thumbnail">
            <img src={`${POSTER_URL}${movieDetail.poster_path}`} alt="" />
          </div>
          <div className="_card-body">
            <span className="_card-title">{movieDetail.title}</span>
            <p>
              <span>{movieDetail.release_date}</span>
            </p>

            <p className="_card-description">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
