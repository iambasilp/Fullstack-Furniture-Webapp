import React, { useEffect, useState } from "react";
import "./ListProduct.css";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    image: "",
    new_price: 0,
    old_price: 0,
    description: "",
    rating: 0,
    reviews: 0,
    topTrends: false,
    newCollections: false,
    relatedProducts: [],
    tags: [],
    details: {
      detailOne: "",
      detailTwo: "",
    },
  });

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const removeProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${editProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editProduct),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      fetchInfo();
      setEditProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };



  const handleNewProductInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p> <p>Old Price</p> <p>New Price</p>{" "}
        <p></p> <p>Actions</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <div key={product.id}>
            {editProduct && editProduct.id === product.id ? (
              <div className="listproduct-format-main listproduct-edit">
                <input
                  type="text"
                  name="name"
                  value={editProduct.name}
                  onChange={handleInputChange}
                  className="listproduct-input"
                />
                <input
                  type="number"
                  name="old_price"
                  value={editProduct.old_price}
                  onChange={handleInputChange}
                  className="listproduct-input"
                />
                <input
                  type="number"
                  name="new_price"
                  value={editProduct.new_price}
                  onChange={handleInputChange}
                  className="listproduct-input"
                />
                <input
                  type="text"
                  name="category"
                  value={editProduct.category}
                  onChange={handleInputChange}
                  className="listproduct-input"
                />
                <input
                  type="text"
                  name="image"
                  value={editProduct.image}
                  onChange={handleInputChange}
                  className="listproduct-input"
                />
                <textarea
                  name="description"
                  value={editProduct.description}
                  onChange={handleInputChange}
                  className="listproduct-input"
                ></textarea>
                <div>
                  <button className="listproduct-save" onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button
                    className="listproduct-cancel"
                    onClick={() => setEditProduct(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="listproduct-format-main listproduct-format">
                <p>{product.name}</p>
                <p>₹ {product.old_price}</p>
                <p>₹ {product.new_price}</p>
                <p>{product.category}</p>
                <button
                  className="listproduct-edit-icon"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="listproduct-remove-icon"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ListProduct;
