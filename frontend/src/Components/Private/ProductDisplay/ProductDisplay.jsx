import React, { useContext, useEffect } from "react";
import "./ProductDisplay.css";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import ScrollReveal from "scrollreveal";

const ProductDisplay = ({ product }) => {
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
  }, []);
  /*

    {
      "id": 4,
      "name": "Wooden TV Stand",
      "category": "livingroom",
      "image": "https://via.placeholder.com/150/FF5733/FFFFFF?text=LivingRoom4",
      "new_price": 700,
      "old_price": 900,
      "description": "A sturdy wooden TV stand with ample storage space.",
      "rating": 4.4,
      "reviews": 27,
      "topTrends": true,
      "newCollections": false,
      "relatedProducts": [1, 2, 3],
      "tags": ["wooden", "TV stand", "storage"],
      "details": {
        "detailOne": "This wooden TV stand is crafted from durable hardwood, providing a sturdy base for your television. It features multiple shelves and compartments for organizing media devices, gaming consoles, and more. The natural wood finish adds a touch of warmth to any living room.",
        "detailTwo": "The TV stand's spacious design accommodates large TVs and offers plenty of storage space without sacrificing style. It's easy to assemble and maintain, making it a practical choice for any home entertainment setup."
      }
    },
*/
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
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

        <button>ADD TO CART</button>
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
