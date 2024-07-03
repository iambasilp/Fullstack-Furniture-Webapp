import React, { useContext } from "react";
import "./CartItems.css";
import { ImCross } from "react-icons/im";
import { ProductContext } from "../../../Context/ProductContext";
import { CartContext } from "../../../Context/CartContext";
import { useNavigate } from "react-router-dom";
const CartItems = () => {
  const Navigate = useNavigate()
  const {cartItems,removeItemfromCart,getTotalCartAmount} = useContext(CartContext)
  const {AllProductData} = useContext(ProductContext)
 
  const handleProceedToCheckout = ()=>{
    Navigate("/payment")
  }
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {AllProductData.map((item)=>{
        /*
         {
      "id": 4,
      "name": "Wooden TV Stand",
      "category": "livingroom",
      "image": "https://via.placeholder.com/150/FF5733/FFFFFF?text=LivingRoom4",
      "new_price": 700,
      "old_price": 900,
      "description": "A sturdy wooden TV stand with ample storage space.",
      "rating": 4.4,
      "reviews": 27,
      "topTrends": true,
      "newCollections": false,
      "relatedProducts": [1, 2, 3],
      "tags": ["wooden", "TV stand", "storage"],
      "details": {
        "detailOne": "This wooden TV stand is crafted from durable hardwood, providing a sturdy base for your television. It features multiple shelves and compartments for organizing media devices, gaming consoles, and more. The natural wood finish adds a touch of warmth to any living room.",
        "detailTwo": "The TV stand's spacious design accommodates large TVs and offers plenty of storage space without sacrificing style. It's easy to assemble and maintain, making it a practical choice for any home entertainment setup."
      }
    },
        */
        {
          if(cartItems[item.id] > 0){
            return (
              <div key={item.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={item.image} alt="" className="carticon-product-icon" />
                <p>{item.name}</p>
                <p>$ {item.new_price}</p>
                <button className="cartitems-quantity">{cartItems[item.id]}</button>
                <p>$ {item.new_price * cartItems[item.id]}</p>
                <ImCross onClick={()=>removeItemfromCart(item.id)} className="cartitems-remove-icon" />
              </div>
              <hr />
            </div>
            )
          }
   
        }
      
      })}
  
   

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>$ {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
