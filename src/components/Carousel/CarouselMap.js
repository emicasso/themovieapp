import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselComponet from "./CarouselComponet";
import { useSlider } from "../../hooks/useSlider";

export default function CarouselMap() {
  const { nowPlaying } = useSlider();

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i class="fa fa-chevron-left"></i>
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="homeContainer">
        <Slider {...settings}>
          {nowPlaying.slice(0, 8).map((item, i) => (
            <CarouselComponet key={i} item={item} />
          ))}
        </Slider>
      </div>
    </>
  );
}
