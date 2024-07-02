import React, { useContext, useEffect } from 'react'
import './RelatedProducts.css'
import Item from '../../Shared/Item/Item'
import { ShopContext } from '../../../Context/ShopContext'
import ScrollReveal from 'scrollreveal'

const RelatedProducts = ({product}) => {
  // [1,2,3]
  const elementidfromproduct = product.map((item)=>{
    return item
  })
 const [a] = elementidfromproduct
  
const {AllProductData} = useContext(ShopContext)

  useEffect(() => {
    ScrollReveal().reveal(".relatedproducts-item", {
      duration: 1000,
      origin: "bottom",
      distance: "20px",
      delay: 300,
      easing: "ease",
    });
  }, []);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
      {
        /*

 {
      "id": 17,
      "name": "Upholstered Storage Bench",
      "category": "bedroom",
      "image": "https://via.placeholder.com/150/FF5733/FFFFFF?text=Bedroom3",
      "new_price": 350,
      "old_price": 450,
      "description": "An upholstered storage bench for practical and stylish seating.",
      "rating": 4.3,
      "reviews": 22,
      "topTrends": true,
      "newCollections": false,
      "relatedProducts": [15, 16, 18],
      "tags": ["upholstered", "storage bench", "seating"],
      "details": {
        "detailOne": "Add versatility to your bedroom with this upholstered storage bench. It features a cushioned seat upholstered in fabric for comfort and style. The storage compartment beneath the seat offers ample space for blankets, pillows, or other essentials.",
        "detailTwo": "The bench's sturdy wooden legs ensure stability and durability, making it suitable for everyday use. Place it at the foot of your bed for additional seating and storage, or use it in an entryway for a convenient spot to put on shoes. Upgrade your home with this functional and elegant piece."
      }
    },
*/
// product id is == current id
      }
      {AllProductData.map((item,i)=>{
        // ob.related.
        if(item.relatedProducts.includes(a)){
          console.log(true);
          console.log(item);
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
      })}
    
      </div>
    </div>
  )
}

export default RelatedProducts
/*
let array = [1,2,3,4]
array.includes(4)
*/