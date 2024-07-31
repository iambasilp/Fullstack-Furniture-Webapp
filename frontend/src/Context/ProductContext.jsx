import React, { useEffect, useState, createContext } from "react";
import { useFetch } from "../Hooks/useFetch";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const { data:AllProductData, isLoading, error } = useFetch('http://localhost:3010/products');


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <ProductContext.Provider value={{ AllProductData }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
