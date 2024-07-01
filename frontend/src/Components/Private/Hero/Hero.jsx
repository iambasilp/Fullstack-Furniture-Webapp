import React, { useEffect } from "react";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import hero_image from "../../../assets/Hero/hero_image.png";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal(".hero-left", {
      origin: "left",
      distance: "20px",
      duration: 1000,
      delay: 300,
      easing: "ease",
    });
    ScrollReveal().reveal(".hero-right", {
      origin: "right",
      distance: "20px",
      duration: 1000,
      delay: 300,
      easing: "ease",
    });
  }, []);

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Furniture Collection</h2>
        <div className="hero-text">
          <p>Handpicked selections</p>
          <p>for your home</p>
        </div>
        <div className="hero-latest-btn">
          <div>Explore Collection</div>
          <FaLongArrowAltRight className="hero-latest-btn-icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="Furniture Collection" />
      </div>
    </div>
  );
};

export default Hero;
