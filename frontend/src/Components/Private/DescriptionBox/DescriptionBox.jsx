import React, { useEffect } from "react";
import "./DescriptionBox.css";
import ScrollReveal from "scrollreveal";

const DescriptionBox = ({product}) => {
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
        <div className="descriptionbox-nav-box fade">{`Reviews (${product.reviews})`}</div>
      </div>
      <div className="descriptionbox-description">
        
      <p>{product.details.detailOne}</p>
          <p>
         {product.details.detailTwo}
          </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
