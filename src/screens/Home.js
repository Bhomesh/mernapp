import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="d-flex m-5 md-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
