import React, { useEffect, useState, createContext, useContext } from "react";
import { ProductContext } from "./ProductContext";
import CartItems from "../Components/Private/CartItems/CartItems";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const { AllProductData } = useContext(ProductContext);
  console.log(AllProductData);
  const [cartItems, setCartItems] = useState({});
  const [CartAudio] = useState(new Audio("https://www.fesliyanstudios.com/play-mp3/387"));
  const {CurrentUser} = useContext(UserContext)
  const Navigate = useNavigate()
  

  useEffect(()=>{
   if(CurrentUser){
      fetchCartData()
   }
  },[CurrentUser])
  useEffect(()=>{
    if(CurrentUser){

      saveCardData();
    }
  },[CurrentUser,cartItems])


const fetchCartData = async()=>{
  try{ 
    const response = await fetch(`http://localhost:3000/users/${CurrentUser.id}`)
    const user = await response.json()
    setCartItems(user.cart || {})
  }catch(error){
    console.log(error);
  }
}
const saveCardData = async()=>{
  try{
    const response = await fetch(`http://localhost:3000/users/${CurrentUser.id}`,{
      method:"PUT",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({...CurrentUser,cart:cartItems})
    })
    if(!response.ok){
      console.log("Error");
    }
  }catch(error){
    console.log(error);
  }
}

  const addToCart = (prodId) => {

    
    if(CurrentUser){
      CartAudio.currentTime = 0; 
      CartAudio.play();
      setCartItems((prev) => ({
        ...prev,
        [prodId]: (prev[prodId]+1 || 1),
      }));
    }else{
      Navigate("/login")
    }

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
