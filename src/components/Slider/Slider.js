import React from "react";
import '../../sass/carousel.sass'
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
            <div className="legend d-md-block bgcaption text-start px-2">
              <h1 className="text-center">{item.title}</h1>
              <h6>
                <em>{item.overview}</em>
              </h6>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
