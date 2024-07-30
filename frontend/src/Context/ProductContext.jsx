import React, { useEffect, useState, createContext } from "react";
import { getFetchDataFromApi } from "../DataFetching/FetchData";
import { useFetch } from "../Hooks/useFetch";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const { data:AllProductData, } = useFetch('http://localhost:3010/products');
 

  return (
    <ProductContext.Provider value={{ AllProductData }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
