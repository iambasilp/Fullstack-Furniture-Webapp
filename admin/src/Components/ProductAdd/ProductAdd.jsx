import React, { useState } from "react";
import "./ProductAdd.css";

const ProductAdd = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    image: "",
    new_price: "",
    old_price: "",
    description: "",
    rating: "",
    reviews: "",
    topTrends: false,
    newCollections: false,
    relatedProducts: [],
    tags: [],
    details: {
      detailOne: "",
      detailTwo: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewProduct({ ...newProduct, [name]: checked });
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      alert("Product added successfully!");
      setNewProduct({
        name: "",
        category: "",
        image: "",
        new_price: "",
        old_price: "",
        description: "",
        rating: "",
        reviews: "",
        topTrends: false,
        newCollections: false,
        relatedProducts: [],
        tags: [],
        details: {
          detailOne: "",
          detailTwo: "",
        },
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product-add">
      <h1>Add New Product</h1>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={handleInputChange}
      />
      <select
        name="category"
        value={newProduct.category}
        onChange={handleSelectChange}
      >
        <option value="">Select Category</option>
        <option value="livingroom">Living Room</option>
        <option value="bedroom">Bedroom</option>
        <option value="dining">Dining</option>
        <option value="decor">Decor</option>
      </select>
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newProduct.image}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="new_price"
        placeholder="New Price"
        value={newProduct.new_price}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="old_price"
        placeholder="Old Price"
        value={newProduct.old_price}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newProduct.description}
        onChange={handleInputChange}
      ></textarea>
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={newProduct.rating}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="reviews"
        placeholder="Reviews"
        value={newProduct.reviews}
        onChange={handleInputChange}
      />
      <label>
        Top Trends:
        <input
          type="checkbox"
          name="topTrends"
          checked={newProduct.topTrends}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        New Collections:
        <input
          type="checkbox"
          name="newCollections"
          checked={newProduct.newCollections}
          onChange={handleCheckboxChange}
        />
      </label>
      <textarea
        name="detailOne"
        placeholder="Detail One"
        value={newProduct.details.detailOne}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            details: { ...newProduct.details, detailOne: e.target.value },
          })
        }
      ></textarea>
      <textarea
        name="detailTwo"
        placeholder="Detail Two"
        value={newProduct.details.detailTwo}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            details: { ...newProduct.details, detailTwo: e.target.value },
          })
        }
      ></textarea>
      <button className="product-add-btn" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default ProductAdd;
