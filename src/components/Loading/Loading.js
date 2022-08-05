import React from "react";
import "../../sass/loading.sass";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function Loading() {
  const { movies, backPage, nextPage, page, totalPage } =
    useContext(AppContext);

  const movieList = movies.slice(0, 20).map((items, index) => {
    return (
      <>
        <div className="d-flex justify-content-center py-8">
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="flip-cards">
              <div className="flip-cards-inner">
                <div className="flip-cards-front"></div>
              </div>
            </div>
          </div>
        </div>
      </>
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
