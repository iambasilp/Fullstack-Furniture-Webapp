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
/*

 {
      "id": 17,
      "name": "Upholstered Storage Bench",
      "category": "bedroom",
      "image": "https://via.placeholder.com/150/FF5733/FFFFFF?text=Bedroom3",
      "new_price": 350,
      "old_price": 450,
      "description": "An upholstered storage bench for practical and stylish seating.",
      "rating": 4.3,
      "reviews": 22,
      "topTrends": true,
      "newCollections": false,
      "relatedProducts": [15, 16, 18],
      "tags": ["upholstered", "storage bench", "seating"],
      "details": {
        "detailOne": "Add versatility to your bedroom with this upholstered storage bench. It features a cushioned seat upholstered in fabric for comfort and style. The storage compartment beneath the seat offers ample space for blankets, pillows, or other essentials.",
        "detailTwo": "The bench's sturdy wooden legs ensure stability and durability, making it suitable for everyday use. Place it at the foot of your bed for additional seating and storage, or use it in an entryway for a convenient spot to put on shoes. Upgrade your home with this functional and elegant piece."
      }
    },
*/
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
