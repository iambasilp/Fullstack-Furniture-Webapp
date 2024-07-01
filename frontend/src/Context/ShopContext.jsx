import React from "react";
import { createContext } from "react";
import { all_product } from "../Data/Da";

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
    const contextValue = {all_product};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// 1. create context
// 2. create provider
// 3. create context provider  
// 5. use context Hook 
