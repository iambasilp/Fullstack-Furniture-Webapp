import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item-img">
        <a href="#">
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
        </a>
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