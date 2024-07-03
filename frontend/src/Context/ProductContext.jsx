import React, { useEffect, useState, createContext } from "react";
import { getFetchDataFromApi } from "../DataFetching/FetchData";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const [AllProductData, setAllProductData] = useState([]);

  useEffect(() => {
    getFetchDataFromApi().then((data) => setAllProductData(data));
  }, []);

  return (
    <ProductContext.Provider value={{ AllProductData }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
