import React from "react";
import { POSTER_URL } from "../../services/api";
import { Link } from "react-router-dom";

export default function CarouselComponet({
  item: {
    id,
    backdrop_path,
    title,
    overview,
    popularity,
    vote_average,
    release_date,
    genre_ids,
  },
}) {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={`${POSTER_URL}${backdrop_path}`} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{title}</h1>
            <div className="rating flex">
              <div className="rate">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label>{vote_average}(Calificaion)</label>
            </div>
            <p>{overview}</p>
            <div className="cast">
              <h4>
                <span>Popularidad </span>
                {popularity}
              </h4>
              <h4>
                <span>Genres </span>
                {genre_ids}
              </h4>
              <h4>
                <span>Tags </span>
                {/* {tags} */}
              </h4>
            </div>
          </div>
          <div className="palyButton row">
            <Link to={`/movies/${id}`}>
              <button>
                <div className="img">
                  <img src="./images/play-button.png" alt="" />
                  <img src="./images/play.png" className="change" />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
