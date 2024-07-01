import React, { useEffect } from "react";
import "./DescriptionBox.css";
import ScrollReveal from "scrollreveal";

const DescriptionBox = () => {
  useEffect(() => {
    ScrollReveal().reveal(".descriptionbox-nav-box", {
      delay: 300,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      reset: true,
    });

    ScrollReveal().reveal(".descriptionbox-description p", {
      delay: 400,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      reset: true,
    });
  }, []);

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our furniture store, where you can explore a wide range
          of exquisite pieces designed to enhance your living spaces.
          Discover high-quality furniture crafted with precision and style,
          available exclusively online. Our virtual showroom offers a
          seamless shopping experience, allowing you to browse through our
          curated collection from the comfort of your home.
        </p>
        <p>
          Each piece in our collection is meticulously selected to blend
          functionality with aesthetic appeal, catering to diverse tastes
          and preferences. Whether you're furnishing a cozy corner or
          redesigning an entire room, our furniture pieces promise
          durability, comfort, and timeless elegance. Explore detailed
          product descriptions, stunning imagery, and competitive pricing to
          make informed decisions. We provide comprehensive information on
          dimensions, materials, and customization options, ensuring each
          product page delivers the insights you need to transform your
          space.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
