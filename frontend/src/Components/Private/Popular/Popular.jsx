import {useEffect } from "react";
import "./Popular.css";
import Item from "../../Shared/Item/Item";

import { fetchProducts } from "../../../Redux/Slices/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
const Popular = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts('http://localhost:3010/products'));
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  console.log(products);

  return (
    <div className="popular">
      <h1>TOP FURNITURE TRENDS</h1>
      <hr />
      <div className="popular-item">
        {console.log(products, "==")
        }
        {products?.map((item, i) => {
          if (i < 5 && item.topTrends === true) {
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
          }
        })}
      </div>
    </div>
  );
};

export default Popular;
