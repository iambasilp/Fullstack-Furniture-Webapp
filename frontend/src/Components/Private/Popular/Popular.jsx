import React, { useContext } from 'react'
import './Popular.css'
import Item from '../../Shared/Item/Item'
import { ProductContext } from '../../../Context/ProductContext'
const Popular = () => {
    const { AllProductData } = useContext(ProductContext);
    console.log(AllProductData);
    console.log(AllProductData);
  return (
    <div className='popular'>
      <h1>TOP FURNITURE TRENDS</h1>
      <hr />
      <div className="popular-item">
        {AllProductData.map((item,i)=>{
            if(i<5 && item.topTrends===true){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
           
        })}
      </div>
    </div>
  )
}

export default Popular
