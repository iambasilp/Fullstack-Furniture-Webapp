import React, { useState, createContext } from "react";
import { useFetch } from "../Hooks/useFetch";
import { db } from "../Data/db";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const { data: AllProductData=["a","b"], isLoading, error } = useFetch('http://localhost:3010/products');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && !AllProductData) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ProductContext.Provider value={{ AllProductData }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
