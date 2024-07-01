import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./Item.css";

const Item = (props) => {
  useEffect(() => {
    ScrollReveal().reveal(`.item-${props.id}`, {
      delay: 100, // Adjust delay based on item id
      duration: 800,
      origin: "bottom",
      distance: "20px",
      easing: "ease",
    });
  }, [props.id]);

  return (
    <div className={`item item-${props.id}`}>
      <div className="item-img">
        <Link to={`/product/${props.id}`}>
          <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
        </Link>
      </div>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">₹{props.new_price}</div>
        <div className="item-price-old">₹{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
