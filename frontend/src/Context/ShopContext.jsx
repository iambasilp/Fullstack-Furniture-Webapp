import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getFetchDataFromApi } from "../DataFetching/FetchData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [AllProductData, setAllProductData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [AddToCartSudio] = useState(new Audio("https://www.fesliyanstudios.com/play-mp3/387"));


  useEffect(() => {
    getFetchDataFromApi().then((data) => setAllProductData(data));
  }, []);

  useEffect(() => {
    if (AllProductData.length > 0) {
      setCartItems(getCartDefaultValue(AllProductData));
    }
  }, [AllProductData]);

  const getCartDefaultValue = (products) => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      cart[products[i].id] = 0; 
    }
    return cart;
  };

  console.log(AllProductData.length);
  console.log(AllProductData);
  console.log(cartItems);

  const addToCart = (prodId) => {
    AddToCartSudio.currentTime = 0; 
    AddToCartSudio.play();

    setCartItems((prev) => ({
      ...prev,
      [prodId]: prev[prodId] + 1,
    }));
  };
  const TotalNumberOfCartedItems = ()=>{
    let total = 0;
    for(let key in cartItems){
     total = total+ cartItems[key]
    }
    return total
  }

  const removeItemfromCart = (prodId)=>{

      setCartItems((prev)=>{
        return {...prev,[prodId]:prev[prodId] - 1}
      })
  }
  const getTotalCartAmount = ()=>{
    let total = 0;
    for(let key in cartItems){
      if(cartItems[key] > 0){
        let info= AllProductData.find((item)=>item.id == Number(key) )
        total = total +  cartItems[key] * info.new_price
      }
      
      
    }
    return total
  }

  return (
    <ShopContext.Provider value={{ AllProductData, cartItems, addToCart,TotalNumberOfCartedItems,removeItemfromCart,getTotalCartAmount }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
