import React from "react";
import "../../sass/carousel.sass";
import { POSTER_URL } from "../../services/api";
import { useSlider } from "../../hooks/useSlider";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const { nowPlaying } = useSlider();
  return (
    <section className="pb-5">
      <Carousel
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={3000}
      >
        {nowPlaying.slice(0, 8).map((item, i) => (
          <div key={i}>
            <img
              src={`${POSTER_URL}${item.backdrop_path}`}
              className="img-fluid img-transform"
              alt={item.title}
            />
            <div className="legend d-md-block text-start px-2">
              <div className="hero-content max-center">
                <button className={"button btn-warning"}>Play Trailer</button>
                <h1 className={"hero-title"}>{item.title}</h1>
                {item.overview ? (
                  <h6 className={"hero-overview"}>{item.overview}</h6>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
