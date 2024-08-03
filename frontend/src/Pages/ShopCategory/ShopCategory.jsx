import { useState } from "react";
import "./ShopCategory.css";

import Item from "../../Components/Shared/Item/Item";
import { useSelector } from "react-redux";

const ShopCategory = (props) => {
  const { products = [] } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((item) => {
    if (props.category === item.category) {
      return item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return false;
  });

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>{filteredProducts.length}</span> out of {products.length}{" "}
          products
        </p>

        <div className="shopcategory-search">
          <input
            type="text"
            placeholder="Search by tags..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <button className="shopcategory-loadmore">Explore More</button>
    </div>
  );
};

export default ShopCategory;
