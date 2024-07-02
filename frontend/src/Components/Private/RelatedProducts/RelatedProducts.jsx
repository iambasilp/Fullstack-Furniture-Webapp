import React, { useContext } from 'react'
import './RelatedProducts.css'
import Item from '../../Shared/Item/Item'
import { ShopContext } from '../../../Context/ShopContext'
const RelatedProducts = () => {
  const {AllProductData} = useContext(ShopContext)
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {AllProductData.map((item,i)=>{
            if(i<4){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
           
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
