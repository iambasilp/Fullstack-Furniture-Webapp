import React, { useContext, useEffect } from "react";
import "./ProductDisplay.css";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import ScrollReveal from "scrollreveal";
import { CartContext } from "../../../Context/CartContext";
const ProductDisplay = ({ product }) => {

  console.log(product);
  const { addToCart } = useContext(CartContext);
  const filledStars = Math.floor(product.rating);
  const emptyStars = 5 - filledStars;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<BsFillStarFill key={i} size={25} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={`empty-${i}`} size={25} />);
  }

  useEffect(() => {
    // Initialize ScrollReveal for productdisplay-left
    ScrollReveal().reveal(".productdisplay-left", {
      duration: 1000,
      origin: "left",
      distance: "20px",
      delay: 300,
      easing: "ease",
    });

    // Initialize ScrollReveal for productdisplay-right
    ScrollReveal().reveal(".productdisplay-right", {
      duration: 1000,
      origin: "right",
      distance: "20px",
      delay: 300,
      easing: "ease",
    });

    // Initialize ScrollReveal for each image in productdisplay-img-list
    ScrollReveal().reveal(".productdisplay-img-list img", {
      duration: 1000,
      origin: "bottom",
      distance: "20px",
      interval: 200,
      easing: "ease",
    });
  }, []);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product Image 1" className="img-1" />
          <img src={product.image} alt="Product Image 2" className="img-2" />
          <img src={product.image} alt="Product Image 3" className="img-3" />
          <img src={product.image} alt="Product Image 4" className="img-4" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="Main Product Image" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {stars}
          <p>({product.reviews})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₹{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>

        <div onClick={() => addToCart(product.id)}>
          <div className="button">
            <a href="#">ADD TO CART</a>
          </div>
        </div>
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> {product.tags.map((item) => item + ", ")}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
