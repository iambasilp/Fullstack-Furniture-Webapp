import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getFetchDataFromApi } from "../DataFetching/FetchData";

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const [AllProductData, setAllProductData] = useState([]);
  console.log(AllProductData);
  useEffect(() => {
    getFetchDataFromApi().then((data) => setAllProductData(data));
  },[]);

  return (
    <ShopContext.Provider value={{ AllProductData }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// 1. create context
// 2. create provider
// 3. create context provider
// 5. use context Hook
