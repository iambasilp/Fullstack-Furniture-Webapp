import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from "../../Components/Shared/Item/Item";

const ShopCategory = (props) => {
  const { AllProductData } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>
            {
              AllProductData.filter((item) => item.category === props.category)
                .length
            }
          </span>{" "}
          out of {AllProductData.length} products
        </p>

        <div className="shopcategory-sort">
          <p>Sort by</p>
          <div className="shopcategory-sort-icon">
            <RiArrowDropDownLine size={28} />
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {AllProductData.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <button className="shopcategory-loadmore">Explore More</button>
    </div>
  );
};

export default ShopCategory;
