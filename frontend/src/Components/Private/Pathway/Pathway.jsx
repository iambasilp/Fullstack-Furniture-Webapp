import React from "react";
import "./Pathway.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Pathway = ({product}) => {

  return (
    <div className="breadcrum">
    HOME <MdKeyboardArrowRight size={25} /> SHOP <MdKeyboardArrowRight size={25} />{" "}
    {product.category} <MdKeyboardArrowRight size={25} /> {product.name}
  </div>
  );
};

export default Pathway;


