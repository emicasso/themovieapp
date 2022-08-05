import React from "react";
import { Card, Carousel } from "../../components";

export default function Home() {
  return (
    <>
      <section className="home1">
        <Carousel />
      </section>
      <section>
        <Card />
      </section>
    </>
  );
}
