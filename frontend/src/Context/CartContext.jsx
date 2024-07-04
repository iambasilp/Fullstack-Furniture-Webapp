import React, { useEffect, useState, createContext, useContext } from "react";
import { ProductContext } from "./ProductContext";
import CartItems from "../Components/Private/CartItems/CartItems";
export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const { AllProductData } = useContext(ProductContext);
  console.log(AllProductData);
  const [cartItems, setCartItems] = useState({});
  const [CartAudio] = useState(new Audio("https://www.fesliyanstudios.com/play-mp3/387"));

  

  useEffect(() => {
    const StoredCartItems = JSON.parse(localStorage.getItem('Cartitems'))
    if(StoredCartItems){
       setCartItems(StoredCartItems)
    }
    else if (AllProductData.length > 0) {
      setCartItems(getCartDefaultValue(AllProductData));
    }
  }, [AllProductData]);
  useEffect(()=>{
   localStorage.setItem('Cartitems',JSON.stringify(cartItems))
  },[cartItems])

  const getCartDefaultValue = (products) => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      cart[products[i].id] = 0; 
    }
    return cart;
  };

  const addToCart = (prodId) => {
    CartAudio.currentTime = 0; 
    CartAudio.play();

    setCartItems((prev) => ({
      ...prev,
      [prodId]: (prev[prodId] || 0) + 1,
    }));
  };

  const TotalNumberOfCartedItems = () => {
    let total = 0;
    for (let key in cartItems) {
      total += cartItems[key];
    }
    return total;
  };

  const removeItemfromCart = (prodId) => {
    CartAudio.currentTime = 0; 
    CartAudio.play();
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [prodId]: prev[prodId] - 1 > 0 ? prev[prodId] - 1 : 0,
      };
      if (updatedCart[prodId] === 0) {
        delete updatedCart[prodId];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (let key in cartItems) {
      if (cartItems[key] > 0) {
        console.log(typeof key);
        let info = AllProductData.find((item) => item.id === key);
            console.log(info)
    
        if (info) {
          total += cartItems[key] * info.new_price;
        }
      }
    }
    return total;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, TotalNumberOfCartedItems, removeItemfromCart, getTotalCartAmount }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
