import React from "react";
import "../../sass/cast.sass";
import { POSTER_URL } from "../../services/api";
import { useCredits } from "../../hooks/useCredits";

export default function Cast() {
  const { cast } = useCredits();

  const castList = cast.slice(0, 16).map((items, i) => {
    return (
      <div className="col-sm-6 col-xl-3 col-lg-4 col-md-6" key={i}>
        <div className="cards">
          <div className="_flip-card mx-auto">
            <div className="_flip-card-inner">
              <div className="_flip-card-front">
                {items.profile_path ? (
                  <img
                    src={`${POSTER_URL}${items.profile_path}`}
                    alt="{items.title}"
                    className="flip-card-front"
                  />
                ) : (
                  <div className="movie-placeholder">No Image found</div>
                )}
              </div>
              <div className="card-img-overlay text-white">
                <h4 className="card-title">{items.character}</h4>
                <small></small>
                <small className="card-text">Actor: {items.name}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container py-4">
      <div className="row justify-content-center">{castList}</div>
    </div>
  );
}
