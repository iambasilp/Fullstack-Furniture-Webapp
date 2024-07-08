import React, { useEffect, useState } from "react";
import "./ListProduct.css";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);
  const fetchInfo = async () => {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();
    setAllProducts(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    });
    fetchInfo();
  };

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p> <p>Name</p> <p>Old Price</p> <p>New Price</p>{" "}
        <p>Category</p> <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <div key={product.id}>
            <div className="listproduct-format-main listproduct-format">
              <img
                className="listproduct-product-icon"
                src={`${product.image}`}
                alt={product.name}
              />
              <p className="cartitems-product-title">{product.name}</p>
              <p>
                 ₹
                {product.old_price}
              </p>
              <p>
                 ₹  
                {product.new_price}
              </p>
              <p>{product.category}</p>
              <button
                className="listproduct-remove-icon"
                onClick={() => removeProduct(product.id)}
              >
                Remove
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
